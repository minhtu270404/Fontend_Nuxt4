export default defineNuxtPlugin(() => {
  // Chạy chỉ bên client (import.meta.client)
  if (import.meta.client) {
    // Chỉ áp dụng khi đang ở môi trường dev — tránh che mất lỗi ở production
    // Nếu bạn muốn áp dụng cả dev/prod, sửa điều kiện bên dưới.
    const isDev = import.meta.env.MODE !== 'production';

    if (isDev) {
      // Tắt cảnh báo (console.warn)
      // Lưu ý: đừng tắt console.error nếu không muốn bỏ qua lỗi nghiêm trọng.
      console.warn = () => {};

      // Nếu bạn muốn tắt thêm log/info (không khuyến nghị), bỏ comment:
      // console.info = () => {};
      // console.log = () => {};
    }
  }
});
