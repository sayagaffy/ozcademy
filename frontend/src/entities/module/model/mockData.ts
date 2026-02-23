export interface Module {
  id: string;
  title: string;
  mentorName: string;
  rating: number;
  lessonsCount: number;
  imageUrl: string;
  category?: string; // e.g., 'VOD', 'Audio'
  price?: string;
}

export const modules: Module[] = [
  {
    id: "MODULE_01",
    title: "Mastering Public Speaking",
    mentorName: "Andhika Pratama",
    rating: 4.9,
    lessonsCount: 12,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoe9lx8FWj5eJcwghmlYPp2uX32V3Sp5Cn9bEcCWhTdt4mOrPBW9O-nwSBDpajJo9yygiPMYdkiSzMPImgK1KUyTXYA17hai6DCzyJX-EOqnBph0tSxS8Xh4GiyWwgL6G2kywB7sxkoA3-M2J7Hw-yRzQI4oDfj2Y_UeA50P5f1Pb3SNMOT7350lfVGj95WJm4hnou8REhmTxLOkivAgpEKGj8fDFK0ymemHPnHAw7NIQiCdtzA4P6OYlP5hQRBZGL_vn5P_7GCIc",
    category: "AKSES PREMIUM"
  },
  {
    id: "MODULE_02",
    title: "Advanced Audio Mixing",
    mentorName: "Raka Aditya",
    rating: 4.8,
    lessonsCount: 24,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPcTAIccWJFhUByFJ3hsit_-fszezODGYRTb-W7xDLMFYYlRPN42yG7s1hXiIEvnZP1uPEFRlxR7UMBsgsHW5J2NDL2D_qJy4Hdl4zX_0xaxtB5P_6J-99e11YCJ5hFdwuo9NcntJPYm3xlEYgRm8PwjAxNd2aOP5bLcwjrzmci1BFWnR3fN_ufaMbU4T_XYwBXlEAnQPONOQrTYmIOFu7hgaX7JUnC1KEqsgbn6_GsxGc8JDju-1a6kmXpGDk8fIGbNl0yeZ43JU",
    category: "AKSES PREMIUM"
  },
  {
    id: "MODULE_03",
    title: "Pro Live Streaming Setup",
    mentorName: "Budi Santoso",
    rating: 5.0,
    lessonsCount: 18,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE4f5UoFIZlHU36_DB24AkswYJXhFKqofAr_uFLFfLiJDzMuOlKM_7WBi6omfYtt_kgTp0_IKDIgk5lj6en8Uzos9zaUuM3-196qT1bKbqVb9Og5y_ucoGZhxNjFS0QDogb1wAVjCG0A2-nbwPYcBeY8q3e6drtF1mcfehUyTy_hWEeT-FWvQotKC-qZi1_LT7pexe4SgP2bN3zBCw6a9GBTpHo4w5OWwkTAy270zaUWVnXEXxzAaC3Q8UM_vLNPh6lMkBEzY8NVY",
    category: "LIVE CLASS",
    price: "RP 100.000"
  },
  {
    id: "MODULE_04",
    title: "The Art of Voice Acting",
    mentorName: "Maya Putri",
    rating: 4.9,
    lessonsCount: 15,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAygUdPbJW9lIXchx__SHqNzil7_FYTEEGTI4fnF8xlK4hJK2svubiZNcy3NzPpWcfNvqNwue2huHcAbvneyRQOO-z5pN4DWozc79LTtdOjg4E5i_ERiOvic6KabHpIFt_ZN5GZwD4VqDn_BDfw9Fa6x0M2XmFBaCvX6BUoSvO5bxqcZneRzy0ycoZUJkvl9soq0NnQCF5W3E54FkNjjtp2wRqpVZz__vHY0TuJLQEeuzruBGywOsKR3_n49R3V4cjCGUlE4umA5Og",
    category: "AKSES PREMIUM"
  }
];
