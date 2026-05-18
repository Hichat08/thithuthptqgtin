import { Question, QuestionType } from "./types";

export const EXAM_SET_11 = {
  id: 11,
  title:
    "ĐỀ THI THỬ SỐ 5 - ĐỀ THI THỬ CỦA SỞ GD-ĐT BẾN TRE NĂM HỌC 2024-2025 - Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong các dự án phát triển phần mềm giáo dục, chuyên viên Công nghệ Thông tin cần thực hiện công việc nào sau đây để giúp phần mềm không ngừng hoàn thiện và mang lại hiệu quả sử dụng cao?",
      options: [
        { id: "A", text: "Phát triển phần mềm mà không cần phản hồi từ người dùng." },
        { id: "B", text: "Phát triển theo chỉ đạo từ đơn vị quản lý giáo dục." },
        { id: "C", text: "Dựa vào kinh nghiệm cá nhân để phát triển." },
        { id: "D", text: "Dựa vào phản hồi của người dùng và cập nhật liên tục." },
      ],
      correctOptionId: "D",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để thiết lập tiêu đề hiển thị trên thanh tiêu đề của trình duyệt khi thiết kế một trang web, cần sử dụng thẻ HTML nào sau đây?",
      options: [
        { id: "A", text: "<h1> Tiêu đề trang web </h1> đặt trong thẻ <body>" },
        { id: "B", text: "<title> Tiêu đề trang web </title> đặt trong thẻ <head>" },
        { id: "C", text: "<meta title=\"Tiêu đề trang web\"> đặt trong thẻ <head>" },
        { id: "D", text: "<header> Tiêu đề trang web </header> đặt trong thẻ <head>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Yếu tố nào sau đây là cần thiết để đảm bảo việc giao tiếp hiệu quả và chính xác giữa các máy tính và thiết bị trong một mạng?",
      options: [
        { id: "A", text: "Giao dịch mạng (Network transactions)." },
        { id: "B", text: "Giao thức mạng (Network protocol)." },
        { id: "C", text: "Giao thông mạng (Network traffic)." },
        { id: "D", text: "Giao tiếp mạng (Network communication)." },
      ],
      correctOptionId: "B",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cấu trúc cơ bản của một trang web HTML bao gồm các phần tử nào sau đây?",
      options: [
        { id: "A", text: "<html>, <head>, <body>" },
        { id: "B", text: "<div>, <span>, <table>" },
        { id: "C", text: "<title>, <link>, <meta>" },
        { id: "D", text: "<header>, <footer>, <article>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thẻ nào dưới đây được sử dụng để tạo tiêu đề nhỏ nhất?",
      options: [
        { id: "A", text: "<p>" },
        { id: "B", text: "<h4>" },
        { id: "C", text: "<h6>" },
        { id: "D", text: "<h1>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trí tuệ nhân tạo (AI) khi thu thập và xử lý thông tin cá nhân có thể gây ảnh hưởng đến quyền riêng tư của người dùng theo cách nào dưới đây?",
      options: [
        { id: "A", text: "Cải thiện giao tiếp giữa các thiết bị." },
        { id: "B", text: "Tăng cường bảo mật dữ liệu." },
        { id: "C", text: "Tối ưu hóa quy trình sản xuất." },
        { id: "D", text: "Gây ra tình trạng thu thập và lạm dụng dữ liệu cá nhân." },
      ],
      correctOptionId: "D",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong mạng máy tính, giao thức IP thực hiện chức năng quan trọng nào dưới đây?",
      options: [
        { id: "A", text: "Cung cấp kết nối vật lý giữa các thiết bị." },
        { id: "B", text: "Mã hóa dữ liệu để bảo mật thông tin." },
        {
          id: "C",
          text: "Định tuyến và truyền dữ liệu giữa các thiết bị trong mạng.",
        },
        {
          id: "D",
          text: "Kiểm soát tốc độ truyền dữ liệu trong mạng nội bộ.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cách nào sau đây có thể giúp bạn xử lý tình huống khó xử trong không gian mạng một cách hiệu quả?",
      options: [
        { id: "A", text: "Học cách xử lý chúng một cách đúng mực." },
        { id: "B", text: "Tránh mọi tình huống khó xử." },
        { id: "C", text: "Gửi tin nhắn tức giận mỗi khi gặp khó khăn." },
        { id: "D", text: "Bỏ qua vấn đề và không giải quyết." },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau: \n\nPython:\nS = 0\nfor i in range(1, 100):\n if (i % 4 == 0) and (i % 7 == 0):\n   S += i\nprint(S)\n\nC++:\nint S = 0;\nfor (int i = 1; i < 100; i++)\n if ((i % 4 == 0) && (i % 7 == 0))\n   S += i;\ncout << S;\n\nPhương án nào sau đây nêu đúng giá trị của biến S sau khi thực hiện đoạn chương trình trên?",
      options: [
        { id: "A", text: "164." },
        { id: "B", text: "168." },
        { id: "C", text: "170." },
        { id: "D", text: "166." },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong trường hợp máy tính không thể kết nối với Internet, phương án nào dưới đây KHÔNG phải là một bước xử lý thông thường mà một kỹ thuật viên Công nghệ Thông tin nên thực hiện?",
      options: [
        { id: "A", text: "Kiểm tra kết nối mạng." },
        { id: "B", text: "Cài đặt lại hệ điều hành." },
        { id: "C", text: "Kiểm tra cài đặt IP." },
        { id: "D", text: "Liên hệ với nhà cung cấp dịch vụ mạng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong các thiết bị mạng sau đây, thiết bị nào có chức năng xác định cổng kết nối và thiết lập kênh truyền tạm thời để truyền dữ liệu giữa hai thiết bị trong mạng cục bộ (LAN)?",
      options: [
        { id: "A", text: "Hub." },
        { id: "B", text: "Modem." },
        { id: "C", text: "Switch." },
        { id: "D", text: "Router." },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để bảo vệ và gìn giữ tính nhân văn trong không gian mạng, hành động nào sau đây là cần thiết nhất đối với người dùng?",
      options: [
        {
          id: "A",
          text: "Tham gia vào các cuộc tranh luận mà không cân nhắc đến ý kiến của đối phương.",
        },
        {
          id: "B",
          text: "Tránh giao tiếp với những người có quan điểm trái ngược.",
        },
        {
          id: "C",
          text: "Nhận thức và tôn trọng sự đa dạng trong quan điểm của người khác.",
        },
        {
          id: "D",
          text: "Chỉ chia sẻ những thông tin mà bản thân cho là đúng mà không kiểm tra tính xác thực.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong CSS, cú pháp nào dưới đây được sử dụng để khai báo một phần tử hiển thị theo dạng khối?",
      options: [
        { id: "A", text: "display: list-item;" },
        { id: "B", text: "display: inline;" },
        { id: "C", text: "display: block;" },
        { id: "D", text: "display: none;" },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo một tiêu đề chính (heading cấp 1) trong HTML, cú pháp nào sau đây là chính xác?",
      options: [
        { id: "A", text: "<h1> Tiêu đề </h1>" },
        { id: "B", text: "[h1] Tiêu đề [/h1]" },
        { id: "C", text: "<h1> Tiêu đề <h1>" },
        { id: "D", text: "{h1} Tiêu đề {/h1}" },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi muốn gộp hai ô tiêu đề \"Sản phẩm\" và \"Loại hàng\" thành một ô duy nhất ở hàng tiêu đề trên cùng của bảng, sử dụng đoạn mã HTML nào sau đây?",
      options: [
        { id: "A", text: "<th rowspan=\"2\">Sản phẩm - Loại hàng</th>" },
        { id: "B", text: "<th colspan=\"2\">Sản phẩm - Loại hàng</th>" },
        { id: "C", text: "<td merge=\"2\">Sản phẩm - Loại hàng</td>" },
        { id: "D", text: "<tr colspan=\"2\"><th>Sản phẩm - Loại hàng</th></tr>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lĩnh vực nào của trí tuệ nhân tạo (AI) chuyên xử lý các tác vụ liên quan đến việc thu nhận, phân tích và nhận dạng hình ảnh từ thế giới thực?",
      options: [
        { id: "A", text: "AI tạo sinh." },
        { id: "B", text: "Xử lý ngôn ngữ tự nhiên." },
        { id: "C", text: "Thị giác máy tính." },
        { id: "D", text: "Học máy." },
      ],
      correctOptionId: "C",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong quy trình phát triển phần mềm, mỗi thành viên đều đảm nhận một vai trò cụ thể để đảm bảo sản phẩm đạt chất lượng cao nhất. Vậy ai là người chịu trách nhiệm chính trong việc kiểm tra và phát hiện lỗi của phần mềm trước khi được đưa vào sử dụng?",
      options: [
        { id: "A", text: "Quản lý dự án phát triển phần mềm." },
        { id: "B", text: "Thiết kế giao diện người dùng." },
        { id: "C", text: "Viết mã nguồn cho phần mềm." },
        { id: "D", text: "Chạy thử phần mềm để tìm lỗi." },
      ],
      correctOptionId: "D",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong thiết kế trang web, CSS đóng vai trò quan trọng trong việc nào sau đây?",
      options: [
        { id: "A", text: "Tinh chỉnh giao diện và kiểu dáng cho trang web." },
        { id: "B", text: "Lưu trữ và quản lý dữ liệu người dùng." },
        { id: "C", text: "Cải thiện hiệu suất tải trang web." },
        { id: "D", text: "Định nghĩa cấu trúc HTML cho trang web." },
      ],
      correctOptionId: "A",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong các chức năng sau đây, đâu là mô tả chính xác về vai trò của một Access Point trong mạng?",
      options: [
        { id: "A", text: "Phân phối địa chỉ IP cho các thiết bị kết nối trong mạng." },
        { id: "B", text: "Kết nối thiết bị không dây vào mạng có dây qua Wi-Fi." },
        { id: "C", text: "Bảo mật dữ liệu khi truyền qua mạng Internet." },
        { id: "D", text: "Định tuyến dữ liệu giữa các mạng khác nhau." },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong số các lĩnh vực dưới đây, lĩnh vực nào ít chịu ảnh hưởng mạnh mẽ từ sự phát triển của trí tuệ nhân tạo (AI)?",
      options: [
        { id: "A", text: "Sản xuất thiết bị tiện ích thông minh." },
        { id: "B", text: "Điều khiển tự động." },
        { id: "C", text: "Tài chính ngân hàng." },
        { id: "D", text: "Xây dựng nhà, đường, cầu." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi gặp phải ý kiến trái chiều trong không gian mạng, hành động nào sau đây thể hiện ứng xử văn minh và tôn trọng nhất?",
      options: [
        {
          id: "A",
          text: "Phản đối quyết liệt mà không lắng nghe lý do của người khác.",
        },
        {
          id: "B",
          text: "Tự tin bác bỏ tất cả ý kiến khác với quan điểm của mình.",
        },
        {
          id: "C",
          text: "Lắng nghe và tôn trọng ý kiến của người khác.",
        },
        { id: "D", text: "Để lại những bình luận thô lỗ trên mạng xã hội." },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ <head> trong cấu trúc trang HTML có vai trò quan trọng nào sau đây trong việc tổ chức thông tin trang web?",
      options: [
        {
          id: "A",
          text: "Cung cấp thông tin meta, tiêu đề và liên kết đến các tài nguyên bên ngoài.",
        },
        {
          id: "B",
          text: "Quản lý định dạng của văn bản và hình ảnh trong trang.",
        },
        {
          id: "C",
          text: "Chứa nội dung chính mà người dùng thấy trên trang.",
        },
        {
          id: "D",
          text: "Tạo ra các phần tử tương tác như biểu mẫu và nút bấm.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, để tạo chú thích, sử dụng phần tử nào sau đây?",
      options: [
        { id: "A", text: "{…chú thích…}" },
        { id: "B", text: "<!-- chú thích -->" },
        { id: "C", text: "!– chú thích!" },
        { id: "D", text: "// chú thích" },
      ],
      correctOptionId: "B",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong các khả năng sau đây, đâu là đặc điểm nổi bật giúp trí tuệ nhân tạo (AI) vượt trội hơn con người trong một số lĩnh vực ứng dụng?",
      options: [
        { id: "A", text: "Làm việc liên tục không nghỉ." },
        { id: "B", text: "Hiểu và đồng cảm." },
        { id: "C", text: "Phân tích thông tin nhanh." },
        { id: "D", text: "Sáng tạo và đổi mới." },
      ],
      correctOptionId: "C",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trung tâm đào tạo nghề có 20 máy tính dành cho học viên và 3 máy tính dành cho giảng viên. Hệ thống mạng tại trung tâm được thiết lập để kết nối tất cả các máy tính, phục vụ cho việc giảng dạy và học tập. Các thiết bị mạng đang sử dụng gồm: 1 Switch 24 cổng, 1 Router với 1 cổng WAN và 2 cổng LAN; cùng với các dây cáp mạng cần thiết. Xem xét các nhận định sau và cho biết chúng đúng hay sai:",
      subQuestions: [
        {
          id: "a",
          text: "Switch được sử dụng để nhận diện địa chỉ IP và định tuyến dữ liệu giữa các máy tính.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Router có khả năng kết nối mạng nội bộ với Internet và phân phối địa chỉ IP cho các thiết bị trong mạng.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Tất cả các máy tính của học viên sẽ được kết nối vào Switch để truy cập mạng nội bộ.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Để mở rộng khả năng kết nối không dây cho học viên sử dụng thiết bị di động, trung tâm cần mua thêm một Access Point và kết nối vào Switch hoặc Router.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường cao đẳng thiết lập hệ thống quản lý thư viện bằng cơ sở dữ liệu quan hệ với ba bảng chính: SACH (MaSach, TenSach, TacGia, NamXB, TheLoai, SoLuong); SINHVIEN (MaSV, TenSV, Khoa); MUONTRA (MaSV, MaSach, NgayMuon, NgayTra, SoLuong). Xem xét các nhận định sau và cho biết chúng đúng hay sai:",
      subQuestions: [
        {
          id: "a",
          text: "Bảng SACH gồm 6 trường dữ liệu.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Bảng SACH và bảng SINHVIEN có quan hệ với nhau qua khóa ngoại MaSV.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "MaSV là khóa chính trong bảng MUONTRA.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Hiển thị thông tin sách có số lượng tồn kho bằng 0 bằng lệnh truy vấn: SELECT * FROM SACH WHERE SoLuong = 0;",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong một khóa học về công nghệ thông tin, các sinh viên được hướng dẫn thực hành sử dụng phần mềm tạo trang web để thiết kế một trang web cá nhân. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Phần mềm tạo trang web cung cấp các mẫu và giao diện người dùng thân thiện, giúp sinh viên dễ dàng tạo ra trang web mà không cần kiến thức lập trình.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Sinh viên không cần quan tâm đến kích thước hình ảnh khi chèn vào trang web, vì phần mềm sẽ tự động điều chỉnh kích thước cho phù hợp.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Sinh viên không cần phải kiểm tra tính tương thích của trang web với các trình duyệt khác nhau vì phần mềm tự động đảm bảo điều này.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để tạo trải nghiệm người dùng tốt hơn, sinh viên nên chú ý đến cách bố trí nội dung và tính điều hướng của trang web.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong một khóa học về cơ sở dữ liệu, sinh viên được giao nhiệm vụ thực hành tạo và khai thác một cơ sở dữ liệu dùng để quản lý thông tin sinh viên và điểm số của họ. Các nhận xét từ sinh viên như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Cơ sở dữ liệu giúp lưu trữ và quản lý thông tin một cách hiệu quả hơn so với việc lưu trữ trong file văn bản.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Trong bảng SINHVIEN, MaSV là một trường không bắt buộc và có thể để trống.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Việc viết truy vấn JOIN có thể giúp kết hợp dữ liệu từ bảng SINHVIEN và bảng DIEM để lấy thông tin điểm số của sinh viên theo lớp học.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Sinh viên có thể viết truy vấn để tính trung bình điểm của từng sinh viên trong bảng DIEM và kết hợp kết quả với thông tin cá nhân từ bảng SINHVIEN để tạo ra báo cáo tổng hợp.",
          correctAnswer: true,
        },
      ],
    },
  ],
};
