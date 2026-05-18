import { Question, QuestionType } from "./types";

export const EXAM_SET_21 = {
  id: 21,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO BẮC NINH - ĐỀ THI CHÍNH THỨC - KỲ THI TỐT NGHIỆP THPT NĂM 2026 (Đợt 2) Môn: TIN HỌC (Mã đề: 0527)",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc “sử dụng phần mềm để thiết kế bản vẽ công trình” thuộc nhóm nào?",
      options: [
        { id: "A", text: "Nghề ứng dụng tin học." },
        { id: "B", text: "Nghề phát triển phần mềm." },
        { id: "C", text: "Ngành an toàn thông tin." },
        { id: "D", text: "Ngành khoa học dữ liệu." },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Một công ty phần mềm đang tuyển dụng vị trí "Đảm bảo chất lượng" (QA). Nhiệm vụ... Vị trí này thuộc nhóm nghề nào sau đây?',
      options: [
        { id: "A", text: "Thiết kế đồ họa và giao diện." },
        { id: "B", text: "Kỹ thuật bảo trì máy tính." },
        { id: "C", text: "Quản trị hệ thống và mạng." },
        { id: "D", text: "Phát triển phần mềm." },
      ],
      correctOptionId: "D",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một nhóm lớp trên Facebook có bài viết lan truyền thông tin chưa kiểm chứng. Cách xử lý phù hợp nhất là:",
      options: [
        { id: "A", text: "Bình luận yêu cầu người đăng cung cấp bằng chứng cụ thể." },
        { id: "B", text: "Chụp lại nội dung và hỏi riêng bạn bè thân thiết." },
        { id: "C", text: "Báo cáo bài viết và không tương tác để tránh lan truyền." },
        { id: "D", text: "Không chia sẻ nhưng vẫn “thả cảm xúc” để thể hiện quan điểm." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trí tuệ nhân tạo hẹp (Weak AI) được định nghĩa là hệ thống như thế nào?",
      options: [
        { id: "A", text: "Được lập trình để tự động sửa chữa các sự cố phần cứng..." },
        { id: "B", text: "Được thiết kế để thực hiện một nhiệm vụ cụ thể hoặc một nhóm nhiệm vụ trong phạm vi hạn chế." },
        { id: "C", text: "Được phát triển để có thể giải quyết mọi vấn đề phức tạp trong tất cả các lĩnh vực." },
        { id: "D", text: "Được xây dựng để có khả năng tự nhận thức và có cảm xúc giống như con người." },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Xét đoạn mã: <input type="checkbox" name="st"> Toán\n<input type="checkbox" name="st"> Lý\nPhát biểu đúng là:',
      options: [
        { id: "A", text: "Chỉ chọn được một môn." },
        { id: "B", text: "Chỉ chọn được khi có form." },
        { id: "C", text: "Không thể chọn." },
        { id: "D", text: "Có thể chọn nhiều môn cùng lúc." },
      ],
      correctOptionId: "D",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Xét đoạn mã:\n<table>\n<tr><td>A</td></tr>\n<tr><td>B</td></tr>\n</table>\nBảng này có đặc điểm gì?",
      options: [
        { id: "A", text: "2 hàng, 2 cột." },
        { id: "B", text: "2 hàng, 1 cột." },
        { id: "C", text: "1 hàng, 2 cột." },
        { id: "D", text: "1 cột, 1 hàng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một ứng dụng truyền dữ liệu đến đúng máy chủ nhưng không nhận được phản hồi. Nguyên nhân hợp lý nhất là gì?",
      options: [
        { id: "A", text: "Tên miền không được đăng ký hợp lệ." },
        { id: "B", text: "Địa chỉ IP của máy chủ không tồn tại." },
        { id: "C", text: "Giao thức gửi và nhận không tương thích." },
        { id: "D", text: "Trình duyệt không hỗ trợ hiển thị dữ liệu." },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một hệ thống có thể phát hiện thư rác dựa trên các email trước đó thuộc lĩnh vực nào?",
      options: [
        { id: "A", text: "Hệ chuyên gia." },
        { id: "B", text: "Nhận dạng hình ảnh." },
        { id: "C", text: "Điều khiển robot." },
        { id: "D", text: "Học từ dữ liệu." },
      ],
      correctOptionId: "D",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong khi tham gia thảo luận tại một diễn đàn học tập trực tuyến, hành động thiếu tính nhân văn và văn hóa ứng xử là:",
      options: [
        { id: "A", text: "Giải thích lịch sự về lỗi sai ngay dưới bài đăng." },
        { id: "B", text: "Nhắn tin riêng để chỉ ra chỗ sai và hướng dẫn." },
        { id: "C", text: "Để lại bình luận động viên và chia sẻ tài liệu." },
        { id: "D", text: "Chụp màn hình rồi đăng vào nhóm khác để chế giễu." },
      ],
      correctOptionId: "D",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content: "Địa chỉ IP dùng để làm gì trong mạng?",
      options: [
        { id: "A", text: "Lưu trữ dữ liệu của người dùng." },
        { id: "B", text: "Xác định thiết bị trong mạng." },
        { id: "C", text: "Hiển thị nội dung trang web." },
        { id: "D", text: "Tăng tốc độ kết nối mạng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "AI tạo sinh (Generative AI) hoạt động chủ yếu dựa trên yếu tố nào?",
      options: [
        { id: "A", text: "Không cần dữ liệu." },
        { id: "B", text: "Chỉ dựa vào phần cứng." },
        { id: "C", text: "Dữ liệu và mô hình học máy." },
        { id: "D", text: "Chỉ dựa vào con người." },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình (Python/C++) cho n = 13, sau khi thực hiện đoạn chương trình trên, kết quả cuối cùng nhận được là gì?",
      options: [
        { id: "A", text: "1011" },
        { id: "B", text: "4" },
        { id: "C", text: "1101" },
        { id: "D", text: "13" },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong HTML, thẻ nào dùng để làm chữ in đậm?",
      options: [
        { id: "A", text: "<bld>" },
        { id: "B", text: "<strong>" },
        { id: "C", text: "<bold>" },
        { id: "D", text: "<bb>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong bảng HTML, thẻ nào dùng để tạo một hàng?",
      options: [
        { id: "A", text: "<td>" },
        { id: "B", text: "<th>" },
        { id: "C", text: "<row>" },
        { id: "D", text: "<tr>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong lĩnh vực truyền thông và mạng xã hội, ứng dụng phổ biến của AI là gì?",
      options: [
        { id: "A", text: "Hiển thị số lượng bạn bè và lượt theo dõi." },
        { id: "B", text: "Cho phép chỉnh sửa thông tin cá nhân." },
        { id: "C", text: "Đề xuất nội dung dựa trên hành vi và sở thích." },
        { id: "D", text: "Sắp xếp nội dung theo thời gian đăng bài." },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một công ty có hai mạng LAN ở hai tòa nhà khác nhau trong cùng thành phố và muốn kết nối chúng lại với nhau. Thiết bị nào phù hợp nhất?",
      options: [
        { id: "A", text: "Access Point." },
        { id: "B", text: "Router." },
        { id: "C", text: "Switch." },
        { id: "D", text: "Modem." },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nhóm nghề nào liên quan đến việc viết chương trình cho thiết bị như robot, máy giặt thông minh?",
      options: [
        { id: "A", text: "Lập trình nhúng." },
        { id: "B", text: "Thiết kế đồ họa." },
        { id: "C", text: "Quản trị mạng." },
        { id: "D", text: "Khoa học dữ liệu." },
      ],
      correctOptionId: "A",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ nào dùng để tạo liên kết (hyperlink) trong HTML?",
      options: [
        { id: "A", text: "<url>" },
        { id: "B", text: "<href>" },
        { id: "C", text: "<link>" },
        { id: "D", text: "<a>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo một khối hình vuông có màu nền xanh, chữ trắng căn giữa trong khối, phương án nào thực hiện đúng yêu cầu?",
      options: [
        { id: "A", text: "div {width: 100px; height: 100px; background: white; color: blue; text-align: center;}" },
        { id: "B", text: "div {width: 100px; padding: 100px; background: blue; color: white; text-align: left;}" },
        { id: "C", text: "div {width: 100px; height: 50px; background: blue; color: white; text-align: center;}" },
        { id: "D", text: "div {width: 100px; height: 100px; background: blue; color: white; text-align: center; line-height: 100px;}" },
      ],
      correctOptionId: "D",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị chuyển mạch trong mạng nội bộ có chức năng nào sau đây?",
      options: [
        { id: "A", text: "Kết nối các thiết bị và truyền dữ liệu ra mạng bên ngoài." },
        { id: "B", text: "Kết nối các thiết bị và phát tín hiệu mạng không dây." },
        { id: "C", text: "Kết nối các thiết bị và chuyển đổi tín hiệu từ nhà cung cấp." },
        { id: "D", text: "Kết nối các thiết bị và chuyển dữ liệu trong mạng nội bộ." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Khi thực hiện đoạn mã: <style> p { font-weight: normal; } .note { font-weight: bold; } </style> <p class="note" style="font-weight: normal;"> Tiên học lễ, hậu học văn</p> Dòng chữ sẽ được hiển thị như thế nào?',
      options: [
        { id: "A", text: "Không xác định." },
        { id: "B", text: "In đậm." },
        { id: "C", text: "Nửa đậm, nửa thường." },
        { id: "D", text: "Chữ bình thường." },
      ],
      correctOptionId: "D",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Trên một trang web xem phim trực tuyến, hiện thông báo “Máy tính của bạn đã bị nhiễm virus, hãy tải phần mềm này về để quét ngay”. Hành động đúng đắn là:',
      options: [
        { id: "A", text: "Quét mã QR để thanh toán phí diệt virus." },
        { id: "B", text: "Nhấn nút tải về ngay để bảo vệ máy tính." },
        { id: "C", text: "Gửi liên kết đó cho bạn bè để cảnh báo." },
        { id: "D", text: "Tắt trình duyệt hoặc đóng cửa sổ thông báo." },
      ],
      correctOptionId: "D",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Xét đoạn mã CSS: .class1 { color: blue; }. Để áp dụng CSS này, HTML đúng là:',
      options: [
        { id: "A", text: '<p type="class1">' },
        { id: "B", text: '<p id="class1">' },
        { id: "C", text: '<p name="class1">' },
        { id: "D", text: '<p class="class1">' },
      ],
      correctOptionId: "D",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Quan sát hai tệp mã nguồn (CSS và HTML) như trong đề bài. Phương án nào mô tả đúng nội dung hiển thị trên trang web?',
      options: [
        { id: "A", text: "Chữ màu xanh lá, kiểu in đậm." },
        { id: "B", text: "Chữ màu đỏ, chữ bình thường." },
        { id: "C", text: "Chữ màu xanh dương, kiểu in đậm." },
        { id: "D", text: "Chữ màu đỏ, kiểu in đậm." },
      ],
      correctOptionId: "D",
    },

    // TRUE/FALSE items
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Nhận định về cơ sở dữ liệu QuanLyChoThue và các ý kiến của học sinh.",
      subQuestions: [
        { id: "a", text: "Để biết một khách thuê đang ở loại phòng nào và giá bao nhiêu, ta chỉ cần kết xuất dữ liệu từ hai bảng KHACHTHUE và CANHO.", correctAnswer: false },
        { id: "b", text: "Để lập danh sách gồm hoTen, maCH, ngayKy của hợp đồng ký trong tháng 04/2026 có thể chọn KHACHTHUE và HOPDONG, liên kết qua maKT và lọc ngày ký.", correctAnswer: true },
        { id: "c", text: "Trong bảng CANHO, trường loaiPhong nên được chọn làm khóa chính vì khách hàng thường tìm kiếm căn hộ theo loại phòng.", correctAnswer: false },
        { id: "d", text: "Trường maCH và maKT trong bảng HOPDONG là các khóa ngoài dùng để liên kết với bảng CANHO và KHACHTHUE.", correctAnswer: true },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content: "Câu 2 (Phần II): Nhận định về thiết kế mạng cho văn phòng.",
      subQuestions: [
        { id: "a", text: "Khi diện tích văn phòng rộng, có thể dùng nhiều Access Point cùng tên (SSID) để tạo sự liền mạch khi di chuyển.", correctAnswer: true },
        { id: "b", text: "Các thiết bị trong cùng một VLAN có thể liên lạc với nhau mà không cần thông qua Router.", correctAnswer: true },
        { id: "c", text: "Chỉ cần trang bị Switch có tốc độ 1 Gbps thì mọi máy tính trong mạng chắc chắn sẽ đạt được tốc độ truy cập Internet là 1 Gbps.", correctAnswer: false },
        { id: "d", text: "Cáp xoắn đôi Cat6 thường được dùng để kết nối từ Switch đến các máy tính trong văn phòng.", correctAnswer: true },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content: "Nhận định về hệ thống quản lý dữ liệu rác thải tái chế.",
      subQuestions: [
        { id: "a", text: "Trong bảng THONG_KE, trường maDV đóng vai trò là khóa chính vì nó dùng để xác định khối lượng rác của đơn vị thu gom.", correctAnswer: false },
        { id: "b", text: "Để trích xuất Tên loại rác, Tên đơn vị thu gom và Khối lượng năm 2025 cần liên kết PHAN_LOAI -> DON_VI -> THONG_KE.", correctAnswer: true },
        { id: "c", text: "Sử dụng phần mềm quản trị cơ sở dữ liệu giúp quản lý dữ liệu chặt chẽ hơn phần mềm bảng tính nhờ khả năng thiết lập ràng buộc giữa các bảng.", correctAnswer: true },
        { id: "d", text: "Câu truy vấn được đưa ra có thể dùng để báo cáo tổng hợp lượng rác 'Nhựa' năm 2025.", correctAnswer: true },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content: "Nhận định về phần mềm tạo website.",
      subQuestions: [
        { id: "a", text: "Phần mềm tạo trang web cung cấp các khối (block) mẫu có sẵn để kéo thả và chỉnh sửa mà không cần viết mã phức tạp.", correctAnswer: true },
        { id: "b", text: "Sau khi thiết kế trên phần mềm, trang web sẽ tự động hiển thị trên Internet mà không cần thao tác 'Xuất bản' hay tải lên máy chủ.", correctAnswer: false },
        { id: "c", text: "Để thay đổi thông tin liên hệ ở phần chân trang, người dùng chỉ cần chọn khối chân trang và chỉnh sửa trực tiếp trên phần mềm.", correctAnswer: true },
        { id: "d", text: "Tối ưu tốc độ tải trang khi đưa video lên website tốt nhất là tải trực tiếp tệp .mp4 chất lượng cao lên máy chủ thay vì dùng mã nhúng từ nền tảng trực tuyến.", correctAnswer: false },
      ],
    },
  ],
};

export default EXAM_SET_21;
