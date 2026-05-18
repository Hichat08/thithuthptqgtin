import { Question, QuestionType } from "./types";

export const EXAM_SET_16 = {
  id: 16,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO LÂM ĐỒNG - ĐỀ THI CHÍNH THỨC KỲ THI THỬ TỐT NGHIỆP THPT NĂM 2026 (Đợt 1) Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã HTML nào sau đây chèn hình ảnh logo.png với chiều rộng 250px và chiều cao 150px?",
      options: [
        { id: "A", text: "<img src=\"logo.png\"width=\"250px\"height=\"150px\">" },
        { id: "B", text: "<img href=\"logo.png\"width=\"250px\"height=\"150px\">" },
        { id: "C", text: "<img source=\"logo.png\"width=\"250px\"height=\"150px\">" },
        { id: "D", text: "<image src=\"logo.png\"width=\"250\"height=\"150\">" },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây dùng để chứa phần nội dung hiển thị trên trang web?",
      options: [
        { id: "A", text: "<meta>" },
        { id: "B", text: "<body>" },
        { id: "C", text: "<head>" },
        { id: "D", text: "<title>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau bằng Python hoặc C++:\n\ns = 0\nn = 10\nfor i in range (1, n+1, 3):\n  s = s + i/2\nint s = 0, n = 10;\nfor (int i = 1; i <= n; i += 3) {\n  s = s + i/2;\n}\nPhương án nào sau đây là các giá trị của i?",
      options: [
        { id: "A", text: "1 2 3 4 5 6 7 8 9 10 11" },
        { id: "B", text: "0 1 2 3 4 5 6 7 8 9 10" },
        { id: "C", text: "1 4 7 10" },
        { id: "D", text: "1 2 3 4 5 6 7 8 9 10" },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện giao tiếp văn minh trong môi trường số?",
      options: [
        {
          id: "A",
          text: "Đăng thông tin cá nhân của người khác khi chưa được phép.",
        },
        {
          id: "B",
          text: "Chế giễu hoặc công kích cá nhân khi bất đồng ý kiến.",
        },
        {
          id: "C",
          text: "Tôn trọng quan điểm khác biệt khi thảo luận trên mạng.",
        },
        {
          id: "D",
          text: "Sử dụng lời lẽ xúc phạm khi tranh luận trên mạng xã hội.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho các khai báo CSS để đặt màu nền cho trang web như sau:\nCách 1 <body style=\"background-color: blue;\">\nCách 2 <body style=\"background-color: rgb(0, 0, 255);\">\nCách 3 <body style=\"background-color: hsl(240, 100%, 50%);\">\nCách 4 <body style=\"background-color: #00F;\">\nCách 5 <body style=\"background-color: #00GGFF;\">\nCách 6 <body style=\"background-color: rgb(0, 0, 300);\">\nPhương án nào sau đây liệt kê các cách đúng?",
      options: [
        { id: "A", text: "2, 3, 4, 5." },
        { id: "B", text: "1, 2, 3, 4." },
        { id: "C", text: "1, 3, 6." },
        { id: "D", text: "1, 2, 5, 6." },
      ],
      correctOptionId: "B",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau bằng Python hoặc C++:\n\ns = \"LamDong\"\nfor i in range(0, len(s), 2):\n  s = s[1:] + s[0]\n t = s[::3]\nprint(t)\nstring s = \"LamDong\";\nint n = (int)s.size();\nfor (int i = 0; i < n; i += 2) {\n  s = s.substr(1) + s[0];\n}\nstring t;\nfor (int i = 0; i < n; i += 3) {\n  t += s[i];\n}\ncout << t << endl;\nGiá trị nào sau đây là kết quả sau khi thực hiện chương trình?",
      options: [
        { id: "A", text: "LamDong" },
        { id: "B", text: "LDg" },
        { id: "C", text: "OLD" },
        { id: "D", text: "DongLam" },
      ],
      correctOptionId: "C",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện thách thức của các mô hình AI tạo sinh đối với xã hội?",
      options: [
        { id: "A", text: "Làm gia tăng chi phí lưu trữ dữ liệu số trên toàn cầu." },
        {
          id: "B",
          text: "Gia tăng nguy cơ phát tán thông tin giả mạo khó kiểm chứng.",
        },
        {
          id: "C",
          text: "Làm suy giảm chất lượng nội dung hình ảnh trên Internet.",
        },
        { id: "D", text: "Làm thay đổi phương thức sáng tạo nội dung số của con người." },
      ],
      correctOptionId: "B",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sao lưu dữ liệu của hệ thống máy tính là nhiệm vụ của nhân viên nào dưới đây?",
      options: [
        {
          id: "A",
          text: "Nhân viên quản trị và bảo trì hệ thống.",
        },
        {
          id: "B",
          text: "Kĩ thuật viên sửa chữa và bảo trì máy tính.",
        },
        { id: "C", text: "Lập trình viên ứng dụng." },
        { id: "D", text: "Nhân viên thiết kế đồ họa." },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã HTML sau:\n<input type=\"radio\" name=\"color\" value=\"red\"> Đỏ\n<input type=\"radio\" name=\"color\" value=\"black\"> Đen\nPhương án nào sau đây mô tả đúng cách hoạt động trên trang web khi thực hiện đoạn mã?",
      options: [
        {
          id: "A",
          text: "Khi chọn tùy chọn 'Đỏ', 'Đen' sẽ tự động được chọn theo.",
        },
        {
          id: "B",
          text: "Chỉ có thể chọn một trong hai tùy chọn 'Đỏ' hoặc 'Đen'.",
        },
        {
          id: "C",
          text: "Có thể chọn đồng thời cả hai tùy chọn 'Đỏ' và 'Đen'.",
        },
        { id: "D", text: "Không thể chọn tùy chọn nào vì thiếu thuộc tính id." },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Việc chuyển giọng nói thành văn bản trong AI thuộc về hướng nghiên cứu hay công nghệ nào sau đây?",
      options: [
        { id: "A", text: "Face Recognition." },
        { id: "B", text: "Robotics." },
        { id: "C", text: "Computer Vision." },
        { id: "D", text: "Speech Recognition." },
      ],
      correctOptionId: "D",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mạng máy tính sử dụng công nghệ Wi-Fi thuộc loại mạng nào sau đây?",
      options: [
        { id: "A", text: "WLAN." },
        { id: "B", text: "Internet." },
        { id: "C", text: "WAN." },
        { id: "D", text: "LAN." },
      ],
      correctOptionId: "A",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trường hợp nào sau đây ứng dụng trí tuệ nhân tạo chưa phù hợp?",
      options: [
        {
          id: "A",
          text: "Tự động đánh giá hoàn toàn bài vẽ mỹ thuật sáng tạo.",
        },
        {
          id: "B",
          text: "Hỗ trợ phân tích hình ảnh trong chẩn đoán y khoa.",
        },
        {
          id: "C",
          text: "Đề xuất tuyến đường giao hàng phù hợp cho tài xế.",
        },
        { id: "D", text: "Hỗ trợ dịch nội dung văn bản giữa các ngôn ngữ." },
      ],
      correctOptionId: "A",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khả năng nào sau đây không phải là đặc trưng của Trí tuệ nhân tạo hẹp?",
      options: [
        {
          id: "A",
          text: "Chuyển đổi linh hoạt giữa nhiều lĩnh vực tri thức.",
        },
        {
          id: "B",
          text:
            "Giải quyết nhiệm vụ đã được lập trình sẵn theo quy luật.",
        },
        {
          id: "C",
          text: "Học từ dữ liệu có sẵn để giải quyết nhiệm vụ cụ thể.",
        },
        {
          id: "D",
          text:
            "Tự điều chỉnh thuật toán để cải thiện hiệu suất.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây không phải là cách xử lý thông thường của kĩ thuật viên CNTT khi máy tính không thể kết nối với Internet?",
      options: [
        { id: "A", text: "Liên hệ với dịch vụ Internet." },
        { id: "B", text: "Kiểm tra cài đặt IP." },
        { id: "C", text: "Kiểm tra kết nối mạng." },
        { id: "D", text: "Cài đặt lại hệ điều hành." },
      ],
      correctOptionId: "D",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm nghề dịch vụ trong ngành CNTT cần thường xuyên cập nhật công nghệ vì lí do nào sau đây?",
      options: [
        { id: "A", text: "Thích nghi với sự thay đổi nhanh chóng." },
        { id: "B", text: "Có thể lập trình game chuyên nghiệp hơn." },
        { id: "C", text: "Để thi các chứng chỉ quốc tế." },
        { id: "D", text: "Do yêu cầu của nhà tuyển dụng." },
      ],
      correctOptionId: "A",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giao thức nào sau đây chịu trách nhiệm định tuyến và gán địa chỉ IP cho gói tin?",
      options: [
        { id: "A", text: "IP." },
        { id: "B", text: "TCP." },
        { id: "C", text: "UDP." },
        { id: "D", text: "HTTP." },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính nào sau đây được sử dụng để thiết lập kích thước của font chữ trong CSS?",
      options: [
        { id: "A", text: "text-size." },
        { id: "B", text: "font-size." },
        { id: "C", text: "font-style." },
        { id: "D", text: "size." },
      ],
      correctOptionId: "B",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào dưới đây nêu đúng về số lượng tối đa class có thể gán cho một phần tử HTML?",
      options: [
        { id: "A", text: "1 class." },
        { id: "B", text: "3 class." },
        { id: "C", text: "2 class." },
        { id: "D", text: "Không giới hạn." },
      ],
      correctOptionId: "D",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã HTML sau: <div style=\"line-height:40px\">\n<p style=\"font-size:10px; line-height:3\"> Chúc em thi tốt </p></div>\nPhương án nào sau đây nêu đúng chiều cao của dòng chữ được hiển thị khi thực hiện đoạn mã HTML trên?",
      options: [
        { id: "A", text: "3px." },
        { id: "B", text: "10px." },
        { id: "C", text: "40px." },
        { id: "D", text: "30px." },
      ],
      correctOptionId: "C",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là chức năng chính của thiết bị Router?",
      options: [
        { id: "A", text: "Điều chỉnh tốc độ truyền tín hiệu." },
        { id: "B", text: "Mã hóa dữ liệu trước khi gửi." },
        { id: "C", text: "Tăng công suất phát sóng Wi-Fi." },
        { id: "D", text: "Định tuyến gói tin giữa các mạng." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là thiết bị tối ưu để lưu trữ 256 cuốn sách, mỗi cuốn có dung lượng 20MB?",
      options: [
        { id: "A", text: "USB 2GB." },
        { id: "B", text: "USB 4GB." },
        { id: "C", text: "USB 8GB." },
        { id: "D", text: "USB 16GB." },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Việc làm nào sau đây thể hiện tôn trọng bản quyền và ứng xử văn minh trước khi chèn một hình ảnh tải trên Internet vào bài thuyết trình?",
      options: [
        {
          id: "A",
          text: "Chỉnh sửa lại hình ảnh rồi sử dụng như sản phẩm của mình.",
        },
        {
          id: "B",
          text: "Ghi rõ nguồn hoặc xin phép tác giả trước khi chèn hình ảnh.",
        },
        {
          id: "C",
          text: "Chèn hình ảnh vào bài trình chiếu mà không cần xin phép.",
        },
        {
          id: "D",
          text: "Tải hình ảnh lên Google Drive và chèn link vào bài thuyết trình.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là các thẻ dùng trong biểu mẫu của HTML?",
      options: [
        {
          id: "A",
          text: "label, input, textarea, button.",
        },
        {
          id: "B",
          text: "label, checkbox, radio, input.",
        },
        {
          id: "C",
          text: "label, input, textarea, checkbox.",
        },
        {
          id: "D",
          text: "input, textarea, button, radio.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây phù hợp nhất để kết nối 24 máy tính cần chia sẻ dữ liệu với tốc độ cao và ổn định?",
      options: [
        { id: "A", text: "Modem." },
        { id: "B", text: "Access Point." },
        { id: "C", text: "Hub." },
        { id: "D", text: "Switch." },
      ],
      correctOptionId: "D",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một văn phòng có 10 nhân viên sử dụng máy tính để bàn kết nối Internet. Các máy tính được liên kết trong một mạng cục bộ (LAN) để chia sẻ tài nguyên như máy in và thư mục dữ liệu chung có tên DULIEU. Trưởng phòng sử dụng máy chủ để phân quyền truy cập cho các máy tính của nhân viên. Một nhân viên có một số nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Tất cả nhân viên đều có thể dùng chung một máy in để in tài liệu.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Nhân viên được cấp quyền Read có thể chỉnh sửa các tệp trong thư mục DULIEU.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Kết nối có dây giữa các máy tính giúp tốc độ mạng ổn định hơn kết nối không dây.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Nếu hai máy tính trong mạng LAN được đặt địa chỉ IP khác lớp mạng, chúng sẽ không thể chia sẻ tài nguyên trực tiếp với nhau nếu không có thiết bị định tuyến hỗ trợ.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một thư viện xây dựng cơ sở dữ liệu gồm ba bảng: SACH(MaSach, TenSach, TacGia), MUONTRA(MaMuon, MaDG, MaSach, NgayMuon, NgayTra), HOIVIEN(MaHV, TenHV, SoDienThoai). Một học sinh khi tìm hiểu về cơ sở dữ liệu trên đưa ra các nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Bảng MUONTRA có 5 bản ghi.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Có thể chọn MaHV làm khóa chính cho bảng HOIVIEN.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Nên chọn kiểu số nguyên để lưu trữ dữ liệu của trường SoDienThoai.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Khi thư viện chỉ có một cơ sở nên lựa chọn cơ sở dữ liệu tập trung.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một cửa hàng thời trang xây dựng cơ sở dữ liệu để quản lí sản phẩm và bán hàng. Cơ sở dữ liệu gồm ba bảng: SANPHAM (MaSP, TenSP, DonGia), NHANVIEN (MaNV, HoTen, BoPhan), HOADON (MaHD, MaNV, MaSP, SoLuong, NgayBan). Các bảng được khai báo khóa chính, khóa ngoài để tạo liên kết. Các bạn học sinh tìm hiểu cách sử dụng SQL để truy vấn dữ liệu và Excel để thực hiện các phép tính thống kê. Sau khi tìm hiểu, các bạn đưa ra một số nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Câu lệnh SQL SET SANPHAM UPDATE DonGia = 50000 WHERE MASP='SP001' cập nhật lại đơn giá của sản phẩm có mã sản phẩm là SP001.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Câu lệnh SQL SELECT TenSP, SUM(SoLuong) AS TongBan FROM SANPHAM, HOADON WHERE SANPHAM.MaSP = HOADON.MaSP GROUP BY TenSP HAVING SUM(SoLuong) >= 10; trả về các sản phẩm có tổng số lượng bán từ 10 sản phẩm trở lên.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Trong Excel, biểu đồ hình tròn phù hợp để thể hiện sự thay đổi doanh thu theo thời gian của cửa hàng.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Câu lệnh SQL BACKUP DATABASE QuanLyBanHang TO DISK = 'backup.bak'; thực hiện phục hồi cơ sở dữ liệu QuanLyBanHang từ tệp backup.bak.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh xây dựng website bằng phần mềm để giới thiệu các sản phẩm tái chế nhằm bảo vệ môi trường. Mỗi trang web gồm các nội dung như văn bản giới thiệu, hình ảnh sản phẩm, video hướng dẫn tái chế và các liên kết đến những trang thông tin về môi trường. Nhóm cũng sử dụng phần mềm chỉnh sửa ảnh để thiết kế banner và tạo ảnh động. Một học sinh đưa ra một số nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Thanh điều hướng giúp chuyển giữa các trang trong website.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Ảnh động chỉ có thể được tạo bằng phần mềm làm video, không thể tạo bằng phần mềm xử lí ảnh.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Chân trang thường chứa thông tin liên hệ, bản quyền hoặc liên kết bổ sung của website.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Sau khi đã xuất bản, không thể chỉnh sửa hay cập nhật thêm nội dung cho trang web.",
          correctAnswer: false,
        },
      ],
    },
  ],
};
