import { Question, QuestionType } from "./types";

export const EXAM_SET_6 = {
  id: 6,
  title: "ĐỀ THI THỬ SỐ 2 - Giải mã kiến thức thi TN THPT môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây mô tả đúng ứng dụng của trí tuệ nhân tạo trong thực tế?",
      options: [
        { id: "A", text: "Soạn văn bản bằng tay." },
        { id: "B", text: "Gửi thư điện tử thủ công." },
        { id: "C", text: "Đọc và phân tích ngữ nghĩa văn bản." },
        { id: "D", text: "Xem tivi qua sóng analog." },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây đúng về đặc điểm của AI?",
      options: [
        { id: "A", text: "Chỉ hoạt động khi có Internet." },
        { id: "B", text: "Có khả năng học từ dữ liệu." },
        { id: "C", text: "Thực hiện các hành động lặp đi lặp lại." },
        { id: "D", text: "Cảm nhận cảm xúc như con người." },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong hệ thống đề xuất video của YouTube, trí tuệ nhân tạo đóng vai trò nào sau đây?",
      options: [
        { id: "A", text: "Phát nhạc ngẫu nhiên." },
        { id: "B", text: "Lọc quảng cáo tĩnh." },
        { id: "C", text: "Gợi ý video phù hợp sở thích." },
        { id: "D", text: "Tắt âm thanh nền." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một trung tâm dự báo thời tiết đang xem xét áp dụng trí tuệ nhân tạo để nâng cao chất lượng dự báo. AI được sử dụng để thực hiện nhiệm vụ nào sau đây là phù hợp?",
      options: [
        { id: "A", text: "Soạn thảo văn bản dự báo tự động." },
        {
          id: "B",
          text: "Phân tích dữ liệu khí tượng, đưa ra mô hình dự đoán.",
        },
        { id: "C", text: "Phát sóng bản tin thời tiết trên tivi." },
        { id: "D", text: "In các bản đồ thời tiết ra giấy." },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau:\n\nPython:\nfor i in range(1, 6):\n  sum = 0\n  sum += i\nprint(sum)\n\nC++:\n#include <iostream>\nusing namespace std;\nint main() {\n  int sum = 0;\n  for (int i = 1; i <= 5; i++) {\n    sum += i;\n  }\n  cout << sum << endl;\n  return 0;\n}\n\nKết quả xuất ra màn hình là giá trị nào sau đây?",
      options: [
        { id: "A", text: "10" },
        { id: "B", text: "15" },
        { id: "C", text: "20" },
        { id: "D", text: "25" },
      ],
      correctOptionId: "B",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content: "Địa chỉ IP có tác dụng nào sau đây trong mạng Internet?",
      options: [
        { id: "A", text: "Định danh thiết bị." },
        { id: "B", text: "Đổi tên tệp tin gửi đi." },
        { id: "C", text: "Định danh gói tin." },
        { id: "D", text: "Bảo mật các gói tin." },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây đúng về chức năng của giao thức HTTPS?",
      options: [
        { id: "A", text: "Quản lí tài khoản người dùng." },
        { id: "B", text: "Mã hóa dữ liệu khi truyền qua mạng." },
        { id: "C", text: "Thiết kế trang web." },
        { id: "D", text: "Tăng tốc độ truyền tin qua mạng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Access Point có vai trò nào sau đây trong hệ thống mạng không dây?",
      options: [
        { id: "A", text: "Chia sẻ máy in." },
        { id: "B", text: "Mở rộng vùng phủ sóng Wifi." },
        { id: "C", text: "Quản lí tài khoản Google." },
        { id: "D", text: "Định tuyến gói tin trong mạng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong một mạng LAN, Switch đảm nhiệm chức năng nào sau đây?",
      options: [
        { id: "A", text: "Phát Wifi cho điện thoại." },
        { id: "B", text: "Định tuyến dữ liệu ra Internet." },
        { id: "C", text: "Chuyển dữ liệu giữa các thiết bị trong mạng." },
        { id: "D", text: "Lưu trữ dữ liệu người dùng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây mô tả hành vi văn minh trên mạng?",
      options: [
        { id: "A", text: "Chia sẻ tin chưa xác thực." },
        { id: "B", text: "Gửi tin nặc danh hàng loạt." },
        { id: "C", text: "Kiểm chứng thông tin trước khi chia sẻ." },
        { id: "D", text: "Phát tán ảnh chế gây hiểu lầm." },
      ],
      correctOptionId: "C",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây là hành động không văn minh trên mạng?",
      options: [
        { id: "A", text: "Bình luận lịch sự." },
        { id: "B", text: "Tôn trọng quyền riêng tư." },
        { id: "C", text: "Hỏi đáp học tập." },
        { id: "D", text: "Chia sẻ tin giả." },
      ],
      correctOptionId: "D",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content: "Hành vi nào dưới đây thể hiện ứng xử phù hợp khi học online?",
      options: [
        { id: "A", text: "Tắt mic khi không phát biểu." },
        { id: "B", text: "Mở mic nói chuyện riêng." },
        { id: "C", text: "Gửi sticker không liên quan trong tiết học." },
        { id: "D", text: "Đổi tên tham gia bằng biệt danh lạ." },
      ],
      correctOptionId: "A",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nghề nào sau đây trong nhóm nghề dịch vụ thuộc ngành Công nghệ thông tin?",
      options: [
        { id: "A", text: "Quản trị mạng máy tính." },
        { id: "B", text: "Sửa chữa, bảo trì máy tính." },
        { id: "C", text: "Xây dựng phần mềm." },
        { id: "D", text: "Phân tích thiết kế hệ thống." },
      ],
      correctOptionId: "B",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một chuyên viên quản trị hệ thống cần có kiến thức nào sau đây?",
      options: [
        { id: "A", text: "Kĩ năng giao tiếp." },
        { id: "B", text: "Hiểu rõ mạng máy tính và hệ điều hành." },
        { id: "C", text: "Biết nhiều ngôn ngữ lập trình." },
        { id: "D", text: "Kĩ năng xử lí ảnh." },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "An là chuyên viên an toàn thông tin được giao nhiệm vụ bảo vệ hệ thống công ty khỏi các cuộc tấn công mạng. Trong vai trò đó, An thực hiện công việc nào sau đây?",
      options: [
        { id: "A", text: "Biên tập video giới thiệu sản phẩm." },
        { id: "B", text: "Phát triển trò chơi điện tử cho công ty." },
        {
          id: "C",
          text: "Giám sát, bảo vệ dữ liệu số khỏi các cuộc tấn công mạng.",
        },
        {
          id: "D",
          text: "Viết bài báo về an toàn thông tin để quảng bá cho công ty.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ HTML nào sau đây tạo danh sách có thứ tự trong trang web?",
      options: [
        { id: "A", text: "<ul>" },
        { id: "B", text: "<ol>" },
        { id: "C", text: "<li>" },
        { id: "D", text: "<a>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đúng để căn giữa tiêu đề <h1> theo chiều ngang trong CSS?",
      options: [
        { id: "A", text: "align: center;" },
        { id: "B", text: "center-text: true;" },
        { id: "C", text: "text-align: center;" },
        { id: "D", text: "position: center;" },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn mã CSS nào sau đây thiết lập kích thước chữ tiêu đề h1 là 32 pixel?",
      options: [
        { id: "A", text: "h1 { font-size: 32px; }" },
        { id: "B", text: "h1 { size: 32px; }" },
        { id: "C", text: "h1 { font: 32; }" },
        { id: "D", text: "h1 { text-size: 32px; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã HTML nào sau đây đúng cú pháp để tạo một liên kết mở ra trong tab mới?",
      options: [
        { id: "A", text: '<a href="page.html" open>Trang</a>' },
        { id: "B", text: '<a href="page.html" newtab>Trang</a>' },
        { id: "C", text: '<a href="page.html" target="_blank">Trang</a>' },
        { id: "D", text: '<a newtab href="page.html">Trang</a>' },
      ],
      correctOptionId: "C",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cần thay đổi nội dung mặc định trong cặp thẻ <title></title> vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Hiển thị tiêu đề trang trên tab trình duyệt và trong kết quả tìm kiếm.",
        },
        {
          id: "B",
          text: "Tăng tính thẩm mỹ cho phần nội dung chính trong trang web.",
        },
        { id: "C", text: "Trình duyệt tải trang web nhanh hơn." },
        {
          id: "D",
          text: "Hỗ trợ người dùng đăng nhập nhanh hơn vào trang web.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để gắn tệp CSS ngoài vào tài liệu HTML, thẻ nào sau đây được sử dụng đúng cách trong phần <head>?",
      options: [
        { id: "A", text: '<style src="style.css">' },
        { id: "B", text: '<css link="style.css">' },
        {
          id: "C",
          text: '<link rel="stylesheet" href="style.css">',
        },
        {
          id: "D",
          text: '<script type="css" src="style.css">',
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi thiết kế trang web bằng HTML, trường hợp nào sau đây cần sử dụng thẻ <img>?",
      options: [
        { id: "A", text: "Chèn hình ảnh minh họa vào trang web." },
        { id: "B", text: "Tạo các đoạn văn bản dài trên trang web." },
        { id: "C", text: "Thêm liên kết đến các trang web khác." },
        { id: "D", text: "Tạo các bảng dữ liệu trên trang web." },
      ],
      correctOptionId: "A",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan sử dụng mã CSS nào sau đây để định kiểu màu nền toàn bộ trang web đang thiết kế?",
      options: [
        { id: "A", text: "body { background-color: yellow; }" },
        { id: "B", text: "div { background-color: yellow; }" },
        { id: "C", text: "p { color: yellow; }" },
        { id: "D", text: "body { font-size: 16px; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi thiết kế giao diện web, Lan muốn tạo khoảng cách đều đặn giữa các đoạn văn bằng cách đặt lề trên và dưới là 10px, lề trái và phải là 20px. Lan cần sử dụng mã CSS nào sau?",
      options: [
        { id: "A", text: "p { margin: 10px 20px; }" },
        { id: "B", text: "p { margin: 20px 10px; }" },
        { id: "C", text: "p { padding: 10px 20px; }" },
        { id: "D", text: "p { border: 10px 20px; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Hòa đang học trực tuyến bằng laptop qua Wi-Fi. Mạng thỉnh thoảng bị chập chờn dù chỉ có một thiết bị kết nối. Hòa mang laptop lại gần Router thì tín hiệu cải thiện rõ. Sau đó, Hòa kiểm tra thấy địa chỉ IP của máy là 192.168.1.5 và băn khoăn không biết vì sao máy mình có địa chỉ này. Hòa cũng biết Router là thiết bị định tuyến dữ liệu, nhưng cậu thắc mắc vì sao nó lại có thể phát sóng Wi-Fi.",
      subQuestions: [
        {
          id: "a",
          text: "Nếu chỉ có một thiết bị kết nối, mạng sẽ luôn ổn định.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Khoảng cách giữa Laptop và thiết bị phát sóng ảnh hưởng đến tín hiệu mạng.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Địa chỉ 192.168.1.5 là một địa chỉ IP thuộc dải mạng cục bộ (LAN).",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Router nhà Hòa sử dụng có tích hợp chức năng Access Point nên có thể phát Wifi.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một hệ thống quản lý thư viện trường học lưu thông tin sách trong bảng SACH gồm các cột: MaSach, TenSach, TacGia, NamXB. Thông tin bạn đọc được lưu trong bảng BANDOC với các cột: MaBD, HoTen, Lop, GioiTinh. Thông tin mượn sách được lưu trong bảng MUONSACH với các cột: MaBD, MaSach, NgayMuon, NgayTra.",
      subQuestions: [
        {
          id: "a",
          text: "MaSach trong bảng SACH bắt buộc có kiểu dữ liệu số nguyên.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "MaBD là khóa chính trong bảng MUONSACH.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Hệ thống quản lí thư viện trường là hệ cơ sở dữ liệu tập trung.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Sử dụng câu truy vấn sau để hiển thị tên các bạn đọc có mượn sách của thư viện. SELECT DISTINCT BANDOC.HoTen FROM BANDOC JOIN MUONSACH ON BANDOC.MaBD = MUONSACH.MaBD;",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong tiết Tin học, cô giáo yêu cầu học sinh thực hành thiết kế một trang web đơn giản bằng phần mềm hỗ trợ tạo trang web trực tuyến. Linh chọn một công cụ phù hợp để tạo trang web giới thiệu câu lạc bộ học tập của lớp...",
      subQuestions: [
        {
          id: "a",
          text: "Phần mềm tạo web trực tuyến cho phép tạo trang web bằng cách kéo – thả, không cần viết mã HTML.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Phần mềm tạo web trực tuyến cung cấp mẫu trang web có sẵn, Linh có thể chọn để tạo trang nhanh hơn.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Sau khi chèn văn bản, Linh không thể định dạng phông chữ, màu sắc, cỡ chữ theo sở thích.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Cần chỉnh quyền chia sẻ và công khai trang để mọi người có thể truy cập vào trang web.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một cửa hàng triển khai hệ thống quản lý bán hàng bằng cơ sở dữ liệu gồm 3 bảng: SANPHAM, KHACHHANG, HOADON...",
      subQuestions: [
        {
          id: "a",
          text: "Khi tạo bảng KHACHHANG, thêm ràng buộc UNIQUE vào trường SDT nếu muốn số điện thoại không trùng nhau.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Sử dụng lệnh UPDATE để cập nhật khách hàng mới của cửa hàng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Muốn khi xóa một khách hàng thì các hóa đơn liên quan cũng bị xóa theo, cần thiết lập ràng buộc khóa ngoại với tùy chọn ON DELETE CASCADE giữa bảng HOADON và bảng KHACHHANG.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Để hiển MaHD và SoLuong của hóa đơn có số lượng mua nhiều nhất, sử dụng lệnh SQL: SELECT MaHD, SoLuong FROM HOADON WHERE SoLuong = (SELECT MAX(SoLuong) FROM HOADON);",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
