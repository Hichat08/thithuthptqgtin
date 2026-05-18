import { Question, QuestionType } from "./types";

export const EXAM_SET_4 = {
  id: 4,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO GIA LAI - ĐỀ THI CHÍNH THỨC KỲ THI THỬ THPT NĂM 2026 (ĐỢT 1) - Môn thi: TIN HỌC",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây mô tả không đúng về lợi ích và ứng dụng của công nghệ thông tin trong các hoạt động của đời sống xã hội?",
      options: [
        {
          id: "A",
          text: "Hệ thống cảm biến trong nông nghiệp thông minh có thể tự động đo độ ẩm đất và điều khiển tưới tiêu.",
        },
        {
          id: "B",
          text: "Bản đồ số và định vị toàn cầu hỗ trợ tìm đường và cập nhật tình trạng giao thông theo thời gian thực.",
        },
        {
          id: "C",
          text: "Dịch vụ công trực tuyến yêu cầu người dân luôn phải đến trực tiếp cơ quan nhà nước để hoàn tất thủ tục.",
        },
        {
          id: "D",
          text: "Công nghệ thực tế ảo cho phép người dùng trải nghiệm các không gian mô phỏng mà không cần có mặt trực tiếp.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một buổi học trực tuyến, khi một bạn học gặp sự cố về micro hoặc đường truyền khiến việc phát biểu bị gián đoạn, cách ứng xử nào sau đây thể hiện văn hóa ứng xử phù hợp trong môi trường số?",
      options: [
        {
          id: "A",
          text: "Kiên nhẫn chờ đợi và hỗ trợ bạn khắc phục sự cố nếu mình biết cách xử lí phù hợp.",
        },
        {
          id: "B",
          text: "Đề nghị giáo viên chuyển sang bạn khác để tránh làm ảnh hưởng đến tiến độ của buổi học.",
        },
        {
          id: "C",
          text: "Tạm thời rời khỏi lớp học vì cho rằng sự cố kỹ thuật đang làm giảm hiệu quả học tập.",
        },
        {
          id: "D",
          text: "Gửi tin nhắn trêu đùa về sự cố kỹ thuật của bạn để tạo không khí vui vẻ cho lớp học.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nội dung nào sau đây không thuộc các lĩnh vực nghiên cứu cốt lõi của AI?",
      options: [
        { id: "A", text: "Xử lý ngôn ngữ tự nhiên (NLP)." },
        { id: "B", text: "Học sâu (Deep Learning)." },
        { id: "C", text: "Hệ quản trị cơ sở dữ liệu (DBMS)." },
        { id: "D", text: "Nhận dạng tiếng nói và âm thanh." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong bộ giao thức TCP/IP, chức năng nào sau đây thuộc về giao thức TCP?",
      options: [
        {
          id: "A",
          text: "Đánh số thứ tự các gói tin để ghép lại đúng đắn ở máy nhận.",
        },
        { id: "B", text: "Định địa chỉ và định tuyến gói tin trong mạng." },
        { id: "C", text: "Xác định đường đi tối ưu cho gói tin." },
        { id: "D", text: "Chỉ định địa chỉ máy gửi và máy nhận." },
      ],
      correctOptionId: "A",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lựa chọn ngôn ngữ Python hoặc C++ để tìm hiểu đoạn chương trình sau:\n\ni, s = 5, 10\nwhile i > 2:\n  s = s - i\n  i = i - 1\nprint(s)\n\nint i = 5, s = 10;\nwhile (i > 2) {\n  s = s - i;\n  i = i - 1;\n}\ncout << s;\n\nSau khi thực hiện đoạn chương trình trên, giá trị nào sau đây hiển thị trên màn hình?",
      options: [
        { id: "A", text: "2." },
        { id: "B", text: "-1." },
        { id: "C", text: "1." },
        { id: "D", text: "-2." },
      ],
      correctOptionId: "D",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi chia sẻ thông tin cá nhân của người khác lên mạng xã hội mà chưa được sự đồng ý của người đó, nhận định nào sau đây là đúng?",
      options: [
        { id: "A", text: "Hành vi này cần được khuyến khích thực hiện." },
        { id: "B", text: "Hành vi này vi phạm đạo đức." },
        { id: "C", text: "Hành vi này không vi phạm đạo đức." },
        { id: "D", text: "Hành vi này không đáng bị phê phán." },
      ],
      correctOptionId: "B",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi gặp một đường link lạ được chia sẻ trên mạng xã hội, hành động nào sau đây là an toàn?",
      options: [
        { id: "A", text: "Nhấp vào đường link để kiểm tra nội dung." },
        { id: "B", text: "Chia sẻ đường link cho bạn bè để hỏi ý kiến." },
        { id: "C", text: "Không nhấp hoặc chia sẻ trên trang cá nhân." },
        { id: "D", text: "Đăng đường link lên trang cá nhân để cảnh báo." },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện ứng dụng của Trí tuệ nhân tạo (AI) trong lĩnh vực y học?",
      options: [
        {
          id: "A",
          text: "Sử dụng AI để lọc thư rác và quảng cáo trong hòm thư điện tử của cán bộ nhân viên y tế.",
        },
        {
          id: "B",
          text: "Sử dụng AI để kiểm soát hệ thống điều hòa và ánh sáng trong các phòng bệnh nhằm tiết kiệm điện năng.",
        },
        {
          id: "C",
          text: "Sử dụng AI để phát hiện các dấu hiệu bệnh lý bất thường trên hình ảnh y khoa như X-quang, CT, MRI.",
        },
        {
          id: "D",
          text: "Sử dụng AI để tự động hóa quy trình in ấn hóa đơn và biên lai thanh toán tại quầy thu ngân bệnh viện.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây được dùng để tạo danh sách không có thứ tự?",
      options: [
        { id: "A", text: "<table>" },
        { id: "B", text: "<ol>" },
        { id: "C", text: "<ul>" },
        { id: "D", text: "<li>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây không đúng về chức năng của Router?",
      options: [
        { id: "A", text: "Kết nối các mạng LAN lại với nhau." },
        {
          id: "B",
          text: "Kiểm soát lỗi và đảm bảo dữ liệu được truyền tin cậy.",
        },
        { id: "C", text: "Định tuyến các gói tin giữa các mạng khác nhau." },
        {
          id: "D",
          text: "Quản lí địa chỉ IP và phân phối gói tin trong mạng nội bộ.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thuộc tính CSS nào sau đây thiết lập font chữ cho văn bản?",
      options: [
        { id: "A", text: "font-style" },
        { id: "B", text: "font-family" },
        { id: "C", text: "font-size" },
        { id: "D", text: "text-align" },
      ],
      correctOptionId: "B",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mục tiêu trọng tâm và đặc trưng nhất của việc phát triển các hệ thống Trí tuệ nhân tạo (AI) là gì?",
      options: [
        {
          id: "A",
          text: "Tối ưu hóa dung lượng bộ nhớ để máy tính có thể lưu trữ được toàn bộ dữ liệu số hóa của nhân loại.",
        },
        {
          id: "B",
          text: "Thay thế hoàn toàn các phép tính số học cơ bản bằng các quy trình xử lý văn bản tự động.",
        },
        {
          id: "C",
          text: "Xây dựng các thuật toán cho phép máy tính có khả năng mô phỏng các quá trình suy nghĩ, học tập và ra quyết định giống như trí tuệ con người.",
        },
        {
          id: "D",
          text: "Tăng cường tốc độ xử lý phần cứng để máy tính có thể chạy được nhiều chương trình đồ họa nặng cùng lúc.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một thời khóa biểu được tạo bằng bảng trong HTML. Tiêu đề “Thứ” cần nằm ở cột đầu tiên và kéo dài qua 2 hàng để bao quát cả hàng tiêu đề và hàng dữ liệu. Đâu là đoạn mã HTML đúng về chức năng và đúng ngữ nghĩa để tạo ô này?",
      options: [
        { id: "A", text: '<td rowspan="2">Thứ</td>' },
        { id: "B", text: '<th colspan="2">Thứ</th>' },
        { id: "C", text: '<td colspan="2">Thứ</td>' },
        { id: "D", text: '<th rowspan="2">Thứ</th>' },
      ],
      correctOptionId: "D",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây mô tả đúng về nhiệm vụ của một chuyên gia phân tích dữ liệu?",
      options: [
        {
          id: "A",
          text: "Thiết kế giao diện website và xây dựng hình ảnh thương hiệu trên nền tảng số.",
        },
        {
          id: "B",
          text: "Cài đặt và bảo trì hệ điều hành cùng các phần mềm cho máy tính trong doanh nghiệp.",
        },
        {
          id: "C",
          text: "Khai thác và phân tích dữ liệu nhằm tạo ra thông tin hỗ trợ cho việc ra quyết định.",
        },
        {
          id: "D",
          text: "Lắp đặt và cấu hình các thiết bị mạng phục vụ kết nối Internet và truyền dữ liệu.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây nêu đúng chức năng chính của Access Point?",
      options: [
        {
          id: "A",
          text: "Chuyển đổi tín hiệu số sang tín hiệu tương tự và ngược lại.",
        },
        {
          id: "B",
          text: "Kết nối hữu tuyến các thiết bị trong cùng một mạng LAN.",
        },
        {
          id: "C",
          text: "Cho phép các thiết bị kết nối không dây vào mạng LAN.",
        },
        {
          id: "D",
          text: "Định tuyến và chuyển tiếp dữ liệu giữa các mạng khác nhau.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn mã CSS nào sau đây thiết lập cả hình ảnh (img) và đoạn văn (p) hiển thị trên cùng một dòng?",
      options: [
        { id: "A", text: "img, p {display: inline;}" },
        { id: "B", text: "img, p {display: none;}" },
        { id: "C", text: "img, p {visibility: hidden;}" },
        { id: "D", text: "img, p {display: block;}" },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một biểu mẫu đăng ký tài khoản yêu cầu người dùng chỉ được chọn một giới tính nam hoặc nữ. Đoạn mã HTML nào sau đây thực hiện chức năng này?",
      options: [
        { id: "A", text: '<input type="checkbox" name="gt">' },
        { id: "B", text: '<input type="button" name="gt">' },
        { id: "C", text: '<input type="text" name="gt">' },
        { id: "D", text: '<input type="radio" name="gt">' },
      ],
      correctOptionId: "D",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ HTML nào sau đây không có thẻ đóng?",
      options: [
        { id: "A", text: "<p>" },
        { id: "B", text: "<a>" },
        { id: "C", text: "<body>" },
        { id: "D", text: "<img>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện sự khác biệt giữa Trí tuệ nhân tạo hẹp (AI hẹp) và Trí tuệ nhân tạo tổng quát (AI tổng quát)?",
      options: [
        {
          id: "A",
          text: "AI tổng quát chỉ có khả năng xử lý ngôn ngữ tự nhiên, trong khi AI hẹp có thể làm mọi nhiệm vụ.",
        },
        {
          id: "B",
          text: "AI hẹp có thể tự ra quyết định mà không cần dữ liệu, còn AI tổng quát thì không.",
        },
        {
          id: "C",
          text: "AI hẹp chỉ thực hiện được một nhiệm vụ cụ thể, trong khi AI tổng quát có khả năng tự học và thích nghi như con người.",
        },
        {
          id: "D",
          text: "AI hẹp chỉ hoạt động trong lĩnh vực tài chính, còn AI tổng quát hoạt động trong lĩnh vực công nghệ thông tin.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong ngành công nghệ thông tin, công việc nào sau đây có nhiệm vụ chính là thiết kế, xây dựng, bảo trì các phần mềm ứng dụng trên máy tính hoặc điện thoại thông minh?",
      options: [
        { id: "A", text: "Phát triển phần mềm." },
        { id: "B", text: "Vận hành hệ thống mạng." },
        { id: "C", text: "Thiết kế đồ họa kỹ thuật số." },
        { id: "D", text: "Quản trị cơ sở dữ liệu." },
      ],
      correctOptionId: "A",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để thiết lập đường viền nét đứt, độ dày 7 pixel, bao quanh các thẻ tiêu đề <h1>, đoạn mã CSS nào sau đây là đúng?",
      options: [
        { id: "A", text: "h1 {border-width: 7px; border-style: groove;}" },
        { id: "B", text: "h1 {border-width: 7px; border-style: double;}" },
        { id: "C", text: "h1 {border-width: 7px; border-style: dashed;}" },
        { id: "D", text: "h1 {border-width: 7px; border-style: dotted;}" },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong mạng máy tính, thuật ngữ IP (Internet Protocol) dùng để chỉ thành phần nào sau đây?",
      options: [
        { id: "A", text: "Thiết kế trang web." },
        { id: "B", text: "Trình duyệt web." },
        { id: "C", text: "Nhà cung cấp dịch vụ." },
        { id: "D", text: "Giao thức Internet." },
      ],
      correctOptionId: "D",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Khi thực hiện đoạn mã HTML sau, dòng chữ “ĐẠI NGÀN CHẠM BIỂN XANH!” sẽ được hiển thị trên trình duyệt theo định dạng nào dưới đây?\n<html><head><style>\n.note {color: blue; font-weight: bold;}\n#note {color: red; background: yellow;}\n</style></head>\n<body><p class="note" id="note">ĐẠI NGÀN CHẠM BIỂN XANH!</p>\n</body></html>',
      options: [
        { id: "A", text: "Màu đỏ, nền vàng và in đậm." },
        { id: "B", text: "Màu xanh dương, in đậm và nền đỏ." },
        { id: "C", text: "Màu xanh dương, in đậm và nền vàng." },
        { id: "D", text: "Màu đỏ, in đậm và nền xanh dương." },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:\n\na = [10, 3, 5, 8, 2]\ni, s = 0, 0\nwhile i < 5:\n  if a[i] % 2 == 0:\n    s = s + a[i]\n  i += 1\nprint(s)\n\nint a[] = {10, 3, 5, 8, 2};\nint i = 0, s = 0;\nwhile (i < 5) {\n  if (a[i] % 2 == 0)\n    s += a[i];\n  i++;\n}\ncout << s;\n\nSau khi thực hiện đoạn chương trình trên, giá trị nào sau đây hiển thị trên màn hình?",
      options: [
        { id: "A", text: "20." },
        { id: "B", text: "28." },
        { id: "C", text: "18." },
        { id: "D", text: "10." },
      ],
      correctOptionId: "A",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học có 02 phòng máy nằm ở hai tầng khác nhau. Mỗi phòng có 45 máy tính được kết nối vào một Switch 48 cổng. Để hai phòng máy có thể kết nối thành một mạng LAN, kỹ thuật viên dùng một sợi cáp mạng nối từ một cổng của Switch ở tầng thứ nhất đến một cổng của Switch ở tầng thứ hai. Cả hệ thống chưa được kết nối với Internet. Một số học sinh nhận định về hệ thống này như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Sau khi kết nối hai Switch, toàn bộ hệ thống máy tính ở hai tầng tạo thành một mạng LAN thống nhất.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Nếu cáp nối giữa hai Switch bị ngắt, các máy trong cùng một tầng vẫn có thể liên lạc với nhau.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Máy in muốn được chia sẻ trong mạng nội bộ bắt buộc phải hỗ trợ kết nối Wi-Fi.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Chỉ cần thay đổi địa chỉ MAC của một máy tính là toàn bộ hệ thống có thể truy cập Internet.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong giờ thực hành Tin học, giáo viên yêu cầu một nhóm học sinh thiết kế cơ sở dữ liệu quản lý điểm gồm ba bảng như sau: • HOCSINH (maHS, hoTen, ngaySinh, lop): lưu thông tin mã học sinh, họ tên, ngày sinh và lớp; mỗi học sinh có một mã học sinh duy nhất. • MONHOC (maMon, tenMon): lưu thông tin mã môn học, tên môn học; mỗi môn học có một mã môn học duy nhất. • KETQUA (maHS, maMon, diemThi): lưu mã học sinh, mã môn học và điểm thi của từng học sinh theo môn. Một số bạn trong nhóm đưa ra các nhận định về việc thiết lập và khai thác cơ sở dữ liệu này như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Trong bảng HOCSINH, trường maHS được thiết lập làm khóa chính để đảm bảo tính duy nhất của mỗi học sinh.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để trích xuất danh sách gồm: 'Họ tên học sinh' và 'Lớp' của toàn bộ học sinh, bắt buộc thực hiện truy vấn liên kết giữa bảng HOCSINH và bảng KETQUA.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Để đưa ra 'Tên môn' và 'Điểm thi' của học sinh có mã là 'HS01', ta cần thực hiện truy vấn chọn bảng MONHOC liên kết với KETQUA qua khóa maMon và đặt điều kiện lọc: KETQUA.maHS = 'HS01'.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Trường maMon trong bảng KETQUA đóng vai trò là khóa ngoài tham chiếu đến bảng MONHOC.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một học sinh sử dụng công cụ tạo website trực tuyến (như Google Sites) để làm trang web giới thiệu Câu lạc bộ Tin học của trường. Website dự kiến có các trang: Trang chủ, Thành viên, Sản phẩm và Tài liệu. Trong phần Sản phẩm, bạn muốn đăng các bài viết hướng dẫn lập trình kèm hình ảnh minh họa và video bài giảng từ kênh YouTube của Câu lạc bộ. Dưới đây là các nhận xét của bạn học sinh đó:",
      subQuestions: [
        {
          id: "a",
          text: "Trên thanh điều hướng, ta có thể tạo các mục con bên dưới mục chính để phân loại nội dung rõ ràng hơn.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để tối ưu hóa tốc độ tải trang cho người xem mà vẫn giữ được chất lượng hình ảnh tốt và có nền trong suốt, bạn học sinh nên ưu tiên chuyển đổi tất cả ảnh minh họa sang định dạng .bmp trước khi đăng lên website.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Để hiển thị video từ YouTube lên trang web, ta có thể sử dụng chức năng nhúng thông qua địa chỉ liên kết của video đó.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi trình bày nội dung bài viết, văn bản và hình ảnh chỉ có thể sắp xếp theo một cột duy nhất từ trên xuống dưới, không thể chia thành nhiều cột để nằm cạnh nhau trên cùng một hàng.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một thư viện quản lý việc mượn sách bằng cơ sở dữ liệu quan hệ gồm 3 bảng: • SACH (maSach, tenSach, tacGia, soLuong): lưu thông tin về mã sách, tên sách, tác giả và số lượng. • DOCGIA (maDG, hoTen, ngaySinh, lop): lưu thông tin về độc giả gồm mã độc giả, họ tên, ngày sinh, lớp. • PHIEUMUON (maPhieu, maDG, maSach, ngayMuon, ngayTra): lưu thông tin mượn trả sách gồm: mã phiếu, mã độc giả, mã sách, ngày mượn và ngày trả. Mỗi độc giả có thể mượn nhiều cuốn sách và một cuốn sách có thể được nhiều độc giả mượn ở các thời điểm khác nhau. Dưới đây là các nhận xét của thủ thư:",
      subQuestions: [
        {
          id: "a",
          text: "maSach và tenSach là các trường tương ứng với các cột trong bảng SACH.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Trong bảng DOCGIA, ta không nên chọn trường hoTen làm khóa chính vì trong thực tế có thể tồn tại nhiều học sinh trùng cả họ và tên, dẫn đến vi phạm tính duy nhất của khóa chính.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Việc thiết lập khóa ngoài giữa các bảng chỉ có tác dụng làm đẹp cấu trúc cơ sở dữ liệu chứ không có vai trò ngăn chặn việc xóa dữ liệu nhầm.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Câu lệnh SQL sau đây thực hiện liệt kê tên các cuốn sách và ngày mượn của độc giả có mã là 'DG05': SELECT SACH.tenSach, PHIEUMUON.ngayMuon FROM SACH INNER JOIN PHIEUMUON ON SACH.maSach = PHIEUMUON.maSach WHERE PHIEUMUON.maDG = 'DG05';",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
