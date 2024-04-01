<script setup lang="ts">
import { ref } from "vue";

const selectedFile = ref<string>("");
const input = ref<HTMLInputElement | any>();
const imageUrl = ref<string>("");
const isImageLoading = ref<boolean>(false);
const HintText = ref<string>("Select File");
const isError = ref<boolean>(false);
const isDisabledButton = ref<boolean>(false);
const textbutton = ref<string>("Выбор Файла");

function openFileSelect() {
  input.value.click();
}

function handleFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    isImageLoading.value = true;
    selectedFile.value = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        imageUrl.value = reader.result;
        isImageLoading.value = false;
        HintText.value = "File is uploaded";
      }
    };
    reader.onerror = () => {
      isImageLoading.value = false;
      selectedFile.value = "";
      imageUrl.value = "";
      HintText.value = "Error during file upload";
    };
    reader.readAsDataURL(file);
  } else {
    isError.value = true;
    HintText.value = "Error when selecting a file";
  }
}

function cancelFileSelection() {
  selectedFile.value = "";
  imageUrl.value = "";
  input.value = "";
  isImageLoading.value = false;
  HintText.value = "Select File";
}

function deleteSelectedFile() {
  selectedFile.value = "";
  imageUrl.value = "";
  HintText.value = "File deleted";
  isDisabledButton.value = true;
  textbutton.value = "Выбрать";
}
</script>

<template>
  <div>
    <h1>File Input</h1>
    <div class="fileselect">
      <label for="inputselect">Label</label>
      <input
        type="file"
        name="inputselect"
        id="inputselect"
        ref="input"
        style="display: none"
        accept="image/*"
        @change="handleFileChange"
      />
      <div class="fileselect__item">
        <button
          id="buttonselect"
          @click="openFileSelect"
          v-if="!isImageLoading && !selectedFile"
          :disabled="isDisabledButton"
        >
          {{ textbutton }}
        </button>
        <button
          @click="cancelFileSelection"
          id="buttoncancel"
          v-if="isImageLoading && selectedFile"
        >
          Отменить
        </button>
        <button
          @click="deleteSelectedFile"
          id="buttondelete"
          v-if="selectedFile && !isImageLoading"
        >
          Удалить
        </button>
        <p v-if="isImageLoading" class="loading">
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i
          >{{ selectedFile }}
        </p>

        <img
          v-else-if="imageUrl"
          :src="imageUrl"
          alt="Selected Image"
          style="max-width: 100px; max-height: 100px"
        />
        <p v-else>Файл не выбран</p>
      </div>
      <p :class="{ error: isError }">{{ HintText }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fileselect {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      color: #9ca3b0;
    }
    button {
      align-self: baseline;
      display: inline-block;
      cursor: pointer;
      padding: 12px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      font-size: 14px;
    }
    button:hover {
      border: 1px solid #d0d5dc;
    }
    button:active {
      background-color: #e5e7eb;
    }
    label {
      font-weight: 500;
    }
    input[type="file"] {
      display: none;
    }
    .loading {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  p {
    color: #6b7280;
    font-size: 14px;
  }
  .error {
    color: red !important;
  }
}
</style>
