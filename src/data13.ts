import { Question, QuestionType } from "./types";

export const EXAM_SET_14 = {
  id: 14,
  title:
    "ĐỀ THI THỬ SỐ 11 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây mô tả chức năng của trí tuệ nhân tạo?",
      options: [
        { id: "A", text: "Lưu trữ dữ liệu lớn." },
        { id: "B", text: "Thực hiện các tác vụ thông minh." },
        { id: "C", text: "Kết nối mạng xã hội." },
        { id: "D", text: "Tạo ra phần mềm văn phòng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trí tuệ nhân tạo (AI) không thể thực hiện nhiệm vụ nào sau đây?",
      options: [
        { id: "A", text: "Nhận dạng giọng nói." },
        { id: "B", text: "Chẩn đoán bệnh qua hình ảnh y tế." },
        { id: "C", text: "Phân tích dữ liệu lớn (Big Data)." },
        { id: "D", text: "Phát triển cảm xúc như con người." },
      ],
      correctOptionId: "D",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Ứng dụng có tích hợp AI nào sau đây có thể bị dùng để giả mạo danh tính trong video lừa đảo, tống tiền, hoặc đánh lừa hệ thống xác thực bằng khuôn mặt?",
      options: [
        { id: "A", text: "DeepFaceLab" },
        { id: "B", text: "AutoSploit" },
        { id: "C", text: "Chat GPT" },
        { id: "D", text: "AI-Powered Phishing Tools" },
      ],
      correctOptionId: "A",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một ngân hàng muốn sử dụng trí tuệ nhân tạo (AI) để giảm thiểu rủi ro từ các giao dịch gian lận. Phương án nào sau đây là ứng dụng phù hợp của AI để hỗ trợ mục tiêu này?",
      options: [
        {
          id: "A",
          text: "Tạo giao diện website thân thiện hơn với người dùng.",
        },
        { id: "B", text: "Dự đoán xu hướng đầu tư dài hạn." },
        {
          id: "C",
          text: "Phân tích hành vi giao dịch để phát hiện giao dịch bất thường.",
        },
        { id: "D", text: "Tự động in sao kê tài khoản cho khách hàng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:\n\nĐoạn chương trình viết bằng ngôn ngữ Python\ndef kt_ngto(n):\n  if n < 2:\n    return 0\n  for i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n      return 0\n  return 1\n\nĐoạn chương trình viết bằng ngôn ngữ C++\nbool kt_ngto(int n) {\n  if (n < 2) return 0;\n  int limit = int(sqrt(n));\n  for (int i = 2; i <= limit; i++) {\n    if (n % i == 0) return 0;\n  }\n  return 1;\n}\n\nPhương án nào sau đây là giá trị của hàm kt_ngto khi truyền tham số n bằng 13?",
      options: [
        { id: "A", text: "False" },
        { id: "B", text: "True" },
        { id: "C", text: "1" },
        { id: "D", text: "0" },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giao thức nào sau đây xử lý việc truyền email giữa các máy chủ?",
      options: [
        { id: "A", text: "SMTP." },
        { id: "B", text: "POP3." },
        { id: "C", text: "IMAP." },
        { id: "D", text: "HTTPS." },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây mô tả đúng chức năng của địa chỉ MAC trong mạng máy tính?",
      options: [
        { id: "A", text: "Xác định địa chỉ vật lý của thiết bị mạng." },
        { id: "B", text: "Kết nối Internet tốc độ cao." },
        { id: "C", text: "Mã hóa dữ liệu khi truyền qua mạng." },
        { id: "D", text: "Định danh thiết bị trên mạng Internet." },
      ],
      correctOptionId: "A",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ thống DNS cần thiết trong hoạt động của mạng Internet vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Giúp người dùng dễ dàng ghi nhớ địa chỉ trang web qua tên miền.",
        },
        {
          id: "B",
          text: "Bảo vệ thông tin người dùng khi truyền dữ liệu trên Internet.",
        },
        {
          id: "C",
          text: "Giúp người dùng dễ dàng ghi nhớ địa chỉ IP của trang web.",
        },
        {
          id: "D",
          text: "Hỗ trợ người dùng kiểm soát việc gửi và nhận thư điện tử.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một công ty có hai mạng cục bộ (LAN) hoạt động độc lập. Sử dụng thiết bị nào sau đây để các máy tính ở hai mạng này có thể truy cập Internet và chia sẻ tài nguyên với nhau?",
      options: [
        { id: "A", text: "Router" },
        { id: "B", text: "Modem" },
        { id: "C", text: "Switch" },
        { id: "D", text: "Access Point" },
      ],
      correctOptionId: "A",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện hành vi ứng xử văn minh trên mạng xã hội?",
      options: [
        { id: "A", text: "Gửi tin nhắn nặc danh xúc phạm." },
        { id: "B", text: "Chia sẻ thông tin chưa kiểm chứng." },
        { id: "C", text: "Bình luận lịch sự, tôn trọng người khác." },
        { id: "D", text: "Chế giễu người khác qua mạng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là hành động nên tránh khi giao tiếp trong không gian mạng?",
      options: [
        { id: "A", text: "Đăng tải nội dung gây kích động thù ghét." },
        { id: "B", text: "Tôn trọng quyền riêng tư của người khác." },
        { id: "C", text: "Trả lời bình luận một cách ôn hòa." },
        { id: "D", text: "Sử dụng ngôn ngữ phù hợp." },
      ],
      correctOptionId: "A",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan muốn đăng ảnh và chia sẻ kỷ niệm về chuyến du lịch trên mạng xã hội. Hành động nào sau đây của Lan có thể gây rủi ro đến bảo mật thông tin cá nhân?",
      options: [
        {
          id: "A",
          text: "Chia sẻ ảnh kèm vị trí hiện tại và thông tin hộ chiếu.",
        },
        {
          id: "B",
          text: "Thiết lập quyền riêng tư chỉ bạn bè xem được bài viết.",
        },
        {
          id: "C",
          text: "Đăng một số hình ảnh về cảnh đẹp trong chuyến du lịch.",
        },
        {
          id: "D",
          text: "Bật xác thực hai yếu tố cho tài khoản trước khi đăng bài.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc nào sau đây là nhiệm vụ chính của người làm nghề dịch vụ thuộc ngành CNTT?",
      options: [
        { id: "A", text: "Dạy học về lập trình web." },
        { id: "B", text: "Thiết kế đồ họa và sáng tạo nội dung." },
        { id: "C", text: "Hỗ trợ kĩ thuật, khắc phục sự cố phần cứng." },
        { id: "D", text: "Tổ chức sự kiện công nghệ." },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nhân lực CNTT đóng vai trò quan trọng trong lĩnh vực ngân hàng hiện đại vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Bảo vệ thông tin khách hàng và duy trì an toàn hệ thống tài chính.",
        },
        {
          id: "B",
          text: "Làm việc với khách hàng trực tiếp tại quầy giao dịch.",
        },
        {
          id: "C",
          text: "Phụ trách thiết kế các sản phẩm đồ họa quảng cáo cho ngân hàng.",
        },
        {
          id: "D",
          text: "Thực hiện các công việc văn thư hành chính trong ngân hàng.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Minh muốn theo học một ngành tập trung vào việc bảo vệ dữ liệu và xử lý các mối đe dọa an ninh mạng trong doanh nghiệp. Ngành học nào sau đây phù hợp nhất với mục tiêu của Minh?",
      options: [
        { id: "A", text: "Khoa học máy tính." },
        { id: "B", text: "Mạng máy tính." },
        { id: "C", text: "An toàn thông tin." },
        { id: "D", text: "Công nghệ phần mềm." },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây mô tả đúng chức năng của thẻ <audio> trong HTML?",
      options: [
        { id: "A", text: "Hiển thị hình ảnh trên trang web." },
        { id: "B", text: "Nhúng tệp âm thanh vào trang web." },
        { id: "C", text: "Tạo liên kết đến trang khác." },
        { id: "D", text: "Hiển thị video trên trang web." },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content: "CSS không có vai trò nào sau đây trong thiết kế trang web?",
      options: [
        { id: "A", text: "Định dạng kiểu dáng cho các phần tử." },
        { id: "B", text: "Xác định cấu trúc và nội dung của trang web." },
        { id: "C", text: "Thay đổi màu sắc, font chữ của văn bản." },
        {
          id: "D",
          text: "Định kiểu cho các trạng thái khác nhau của phần tử.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng thẻ HTML nào sau đây tạo các trường nhập liệu như ô textbox, checkbox, radio trên biểu mẫu?",
      options: [
        { id: "A", text: "<div>" },
        { id: "B", text: "<form>" },
        { id: "C", text: "<input>" },
        { id: "D", text: "<iframe>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ nào sau đây không bắt buộc có trong trang HTML cơ bản?",
      options: [
        { id: "A", text: "<html>" },
        { id: "B", text: "<head>" },
        { id: "C", text: "<body>" },
        { id: "D", text: "<h1>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng mã CSS nào sau đây định kiểu viền màu đỏ, dày 2px, kiểu nét liền cho thẻ <div>?",
      options: [
        { id: "A", text: "div {border: 2px solid red;}" },
        { id: "B", text: "div {border-color: red; border-width: 2px solid;}" },
        { id: "C", text: "div {border: red 2px solid;}" },
        { id: "D", text: "div {border-style: solid; border: 2px red;}" },
      ],
      correctOptionId: "A",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đúng về vai trò của thẻ <mark> khi sử dụng trong văn bản HTML?",
      options: [
        { id: "A", text: "Tạo đoạn văn bản in đậm." },
        { id: "B", text: "Đánh dấu và làm nổi bật đoạn văn bản." },
        { id: "C", text: "Chèn liên kết đến trang khác." },
        { id: "D", text: "Hiển thị đoạn văn bản ở dạng chữ nghiêng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng mã HTML nào sau đây sẽ cho kết quả hiển thị trên trang web như hình dưới?",
      options: [
        {
          id: "A",
          text: '<ul style="list-style-type: square;">\n <li>Hoa đào</li> <li>Hoa mai</li><li>Hoa cúc</li>\n</ul>',
        },
        {
          id: "B",
          text: '<ul style="list-style-type: disc;">\n <li>Hoa đào</li> <li>Hoa mai</li><li>Hoa cúc</li>\n</ul>',
        },
        {
          id: "C",
          text: '<ol style="list-style-type: circle;">\n <li>Hoa đào</li> <li>Hoa mai</li><li>Hoa cúc</li>\n</ol>',
        },
        {
          id: "D",
          text: '<ol style="list-style-type: square;">\n <li>Hoa đào</li> <li>Hoa mai</li><li>Hoa cúc</li>\n</ol>',
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã CSS nào sau đây thay đổi màu chữ của liên kết sang màu đỏ khi người dùng di chuyển chuột lướt qua?",
      options: [
        { id: "A", text: "a:hover {color: red;}" },
        { id: "B", text: "a {hover-color: red;}" },
        { id: "C", text: "a:active {color: red;}" },
        { id: "D", text: "a:visited {color: red;}" },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã HTML nào sau đây tạo một ô nhập liệu trong biểu mẫu mà người dùng chỉ được nhập số và bắt buộc phải nhập?",
      options: [
        { id: "A", text: '<input type="text" required>' },
        { id: "B", text: '<input type="number" required>' },
        { id: "C", text: '<input type="number">' },
        { id: "D", text: '<input type="text">' },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học triển khai hệ thống mạng LAN để kết nối các phòng máy tính, thư viện và văn phòng. Mỗi phòng đều có nhiều máy tính được kết nối qua Switch, trong khi một Router trung tâm được sử dụng để kết nối toàn bộ hệ thống ra Internet. Để mở rộng kết nối cho các thiết bị di động như laptop và điện thoại trong khu vực thư viện và phòng họp, nhà trường sử dụng thêm Access Point. Tuy nhiên, vào giờ cao điểm, mạng thường chậm lại, đặc biệt là khi nhiều người truy cập Internet cùng lúc tại thư viện. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Switch là thiết bị dùng để kết nối các máy tính trong cùng mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Router có vai trò chuyển đổi tín hiệu giữa các chuẩn Wifi khác nhau.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Mạng chậm tại thư viện là do thiết bị Switch không đủ mạnh để phát sóng Wifi cho toàn bộ khu vực.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Khi mất tín hiệu Internet, các máy tính trong văn phòng vẫn chia sẻ dữ liệu nội bộ được cho nhau.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Công ty 3K vừa triển khai dự án quản lí dữ liệu khách hàng và sản phẩm. Họ được giới thiệu về các hệ quản trị cơ sở dữ liệu (CSDL). Ban quản lí biết rằng hệ CSDL quan hệ lưu trữ dữ liệu dưới dạng bảng, sử dụng ngôn ngữ SQL để truy vấn, phù hợp với dữ liệu có cấu trúc rõ ràng và có các ràng buộc dữ liệu nghiêm ngặt. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Bảng dữ liệu trong CSDL quan hệ gồm các trường và bản ghi.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Ngôn ngữ SQL chỉ hỗ trợ truy vấn, cần dùng công cụ khác để tạo lập và cập nhật CSDL.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Ràng buộc dữ liệu giữa các bảng thông qua khóa ngoại.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Công ty 3K nên cân nhắc sử dụng hệ quản trị NoSQL để lưu trữ dữ liệu phi cấu trúc như hình ảnh, video và mở rộng linh hoạt.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Công ty Hoàng Khôi muốn xây dựng một trang web giới thiệu sản phẩm thân thiện với người dùng và dễ dàng cập nhật nội dung. Nhóm thiết kế web của công ty được giao nhiệm vụ sử dụng phần mềm tạo trang web để thiết kế giao diện, bố trí các thành phần như hình ảnh, văn bản và liên kết. Họ cũng cần đảm bảo trang web hiển thị tốt trên nhiều thiết bị khác nhau như máy tính và điện thoại di động. Ngoài ra, nhóm phải lưu trữ mã nguồn và dữ liệu một cách hợp lí để dễ bảo trì và nâng cấp trong tương lai. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Phần mềm tạo trang web thường hỗ trợ kéo thả các thành phần, giúp thiết kế giao diện nhanh và đơn giản.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Thiết kế website chỉ cần tập trung vào màu sắc và hình ảnh, không cần quan tâm đến bố cục hay trải nghiệm người dùng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Các phần mềm tạo trang web tự động điều chỉnh ở mức cơ bản chế độ hiển thị trang web trên các thiết bị khác nhau.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Có thể lưu trang web dưới dạng mã nguồn HTML để lưu trữ và nâng cấp trong tương lai.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một hệ cơ sở dữ liệu (CSDL) quản lí bán vé máy bay gồm 3 bảng chính: ChuyenBay(MaCB, NoiDi, NoiDen, GioKhoiHanh), KhachHang(MaKH, HoTen, SoDienThoai), VeMayBay(MaVe, MaCB, MaKH, GiaVe). Trong quá trình thực hành với hệ CSDL quan hệ này, học sinh đưa ra một số ý kiến sau:",
      subQuestions: [
        {
          id: "a",
          text: "Cần thêm lệnh CHECK (NoiDi <> NoiDen) khi tạo bảng ChuyenBay để đảm bảo sân bay khởi hành khác với sân bay đến.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Khi nhập dữ liệu bảng VeMayBay, không được để trống trường MaVe.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Có thể thêm một bản ghi vào bảng VeMayBay với MaCB không tồn tại trong bảng ChuyenBay.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để hiển thị danh sách khách hàng đã mua vé máy bay, sử dụng câu lệnh truy vấn SELECT KhachHang.HoTen, KhachHang.SoDienThoai FROM KhachHang JOIN VeMayBay ON KhachHang.MaKH = VeMayBay.MaKH;.",
          correctAnswer: true,
        },
      ],
    },
  ],
};
