import { Question, QuestionType } from "./types";

export const EXAM_SET_15 = {
  id: 15,
  title:
    "ĐỀ THI THỬ SỐ 12 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Google Photos sử dụng trí tuệ nhân tạo để thực hiện chức năng nào sau đây?",
      options: [
        { id: "A", text: "Tăng tốc độ mạng máy tính." },
        { id: "B", text: "Phát hiện virus trong ảnh." },
        { id: "C", text: "Nhận diện khuôn mặt và phân loại ảnh." },
        { id: "D", text: "Chỉnh sửa bảng tính." },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khả năng giải quyết vấn đề của trí tuệ nhân tạo thể hiện qua hoạt động nào sau đây?",
      options: [
        { id: "A", text: "Lưu trữ dữ liệu trên đám mây." },
        { id: "B", text: "Vẽ hình ảnh bằng phần mềm đồ họa." },
        {
          id: "C",
          text: "Sao chép dữ liệu từ thiết bị này sang thiết bị khác.",
        },
        { id: "D", text: "Phân tích vấn đề và đưa ra quyết định phù hợp." },
      ],
      correctOptionId: "D",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ thống trí tuệ nhân tạo nào dưới đây có thể phân tích hình ảnh khuôn mặt của người dùng để xác định danh tính của họ?",
      options: [
        { id: "A", text: "Chatbot" },
        { id: "B", text: "Face ID" },
        { id: "C", text: "Amazon Go" },
        { id: "D", text: "Autopilot" },
      ],
      correctOptionId: "B",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một hệ thống giám sát giao thông ứng dụng trí tuệ nhân tạo, chức năng nào sau đây thể hiện vai trò của AI rõ nhất?",
      options: [
        { id: "A", text: "Phát thông báo qua loa." },
        { id: "B", text: "Điều khiển đèn tín hiệu." },
        { id: "C", text: "Phân tích hành vi phương tiện." },
        { id: "D", text: "Cấp điện cho camera." },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau:\n\nPython:\ndef demLe(a):\n  dem = 0\n  for i in a:\n    if i % 2 == 1:\n      dem += 1\n  return dem\nprint(demLe([2, 3, 5, 6]))\n\nC++:\n#include <iostream>\nusing namespace std;\nint demLe(int a[], int n) {\n  int dem = 0;\n  for (int i = 0; i < n; i++) {\n    if (a[i] % 2 == 1) {\n      dem++;\n    }\n  }\n  return dem;\n}\nint main() {\n  int a[] = {2, 3, 5, 6};\n  int n = sizeof(a) / sizeof(a[0]);\n  cout << demLe(a, n);\n  return 0;\n}",
      options: [
        { id: "A", text: "1" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "4" },
      ],
      correctOptionId: "B",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong quá trình chia sẻ thư mục trên mạng LAN, phương án nào sau đây là đúng khi muốn cho phép người dùng chỉ xem mà không được chỉnh sửa nội dung trong thư mục đó?",
      options: [
        { id: "A", text: "Cấp quyền Full Control cho người dùng." },
        { id: "B", text: "Cấp quyền Read cho người dùng." },
        { id: "C", text: "Cấp quyền Write cho người dùng." },
        { id: "D", text: "Cấp quyền Modify cho người dùng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thiết bị nào sau đây kết nối máy tính với Internet?",
      options: [
        { id: "A", text: "Modem" },
        { id: "B", text: "Switch" },
        { id: "C", text: "Hub" },
        { id: "D", text: "Webcam" },
      ],
      correctOptionId: "A",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Vai trò nào sau đây không thuộc về giao thức TCP?",
      options: [
        { id: "A", text: "Gán địa chỉ IP." },
        { id: "B", text: "Kiểm tra lỗi." },
        { id: "C", text: "Đánh số gói tin." },
        { id: "D", text: "Đảm bảo thứ tự gói tin." },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giải pháp nào sau đây hiệu quả nhất khi giáo viên muốn chia sẻ file bài giảng cho tất cả học sinh trong phòng máy tính mà không cần sử dụng USB hay Internet?",
      options: [
        { id: "A", text: "Gửi bài qua email cho từng học sinh." },
        {
          id: "B",
          text: "Kết nối tất cả máy tính vào mạng LAN và chia sẻ file.",
        },
        {
          id: "C",
          text: "Dùng webcam để truyền hình ảnh bài giảng cho học sinh.",
        },
        { id: "D", text: "Chiếu toàn bộ bài giảng trong file lên ti vi." },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành động nào sau đây thể hiện giao tiếp có trách nhiệm trên mạng?",
      options: [
        { id: "A", text: "Gửi tin rác." },
        { id: "B", text: "Chia sẻ thông tin chưa kiểm chứng." },
        { id: "C", text: "Sử dụng ngôn từ thô tục." },
        { id: "D", text: "Bình luận có thiện chí." },
      ],
      correctOptionId: "D",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Rủi ro nào sau đây có thể xảy ra khi chia sẻ thông tin cá nhân trên mạng?",
      options: [
        { id: "A", text: "Có thêm bạn mới." },
        { id: "B", text: "Bị đánh cắp dữ liệu." },
        { id: "C", text: "Được nhiều lượt thích." },
        { id: "D", text: "Có thêm bình luận." },
      ],
      correctOptionId: "B",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi bạn bị quấy rối trên mạng, hành động nào sau đây thể hiện sự ứng xử nhân văn?",
      options: [
        { id: "A", text: "Phản ứng mạnh lại." },
        { id: "B", text: "Gỡ ứng dụng." },
        { id: "C", text: "Báo cáo và tìm sự hỗ trợ." },
        { id: "D", text: "Đăng bài đáp trả." },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người thuộc nhóm nghề nào sau đây sẽ chịu trách nhiệm khắc phục sự cố mạng?",
      options: [
        { id: "A", text: "Thiết kế web." },
        { id: "B", text: "Quản trị mạng." },
        { id: "C", text: "Nhập liệu." },
        { id: "D", text: "Đồ họa." },
      ],
      correctOptionId: "B",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content: "Công việc nào sau đây không thuộc nhóm nghề dịch vụ CNTT?",
      options: [
        { id: "A", text: "Cài đặt phần mềm." },
        { id: "B", text: "Hỗ trợ người dùng." },
        { id: "C", text: "Phát triển phần mềm." },
        { id: "D", text: "Bảo trì hệ thống." },
      ],
      correctOptionId: "C",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một trường học muốn phát triển hệ thống học trực tuyến có tính năng đăng nhập, theo dõi tiến độ học và chấm điểm tự động. Để đảm bảo hệ thống hoạt động ổn định và không bị gián đoạn, họ cần tuyển dụng người làm công việc nào dưới đây?",
      options: [
        { id: "A", text: "Lập trình viên." },
        { id: "B", text: "Quản trị hệ thống." },
        { id: "C", text: "Chuyên viên kiểm thử." },
        { id: "D", text: "Thiết kế đồ họa." },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây được dùng để định dạng gạch chân văn bản trên trang web?",
      options: [
        { id: "A", text: "<underline>" },
        { id: "B", text: "<u>" },
        { id: "C", text: "<b>" },
        { id: "D", text: "<i>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thuộc tính nào sau đây của thẻ <img> hiển thị chú thích khi di chuyển con trỏ lên ảnh?",
      options: [
        { id: "A", text: "alt" },
        { id: "B", text: "title" },
        { id: "C", text: "src" },
        { id: "D", text: "note" },
      ],
      correctOptionId: "B",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thẻ nào sau đây được dùng để tạo ô tiêu đề cho bảng?",
      options: [
        { id: "A", text: "<td>" },
        { id: "B", text: "<tr>" },
        { id: "C", text: "<th>" },
        { id: "D", text: "<caption>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây dùng để tạo ô nhập văn bản trong biểu mẫu?",
      options: [
        { id: "A", text: '<input type="text">' },
        { id: "B", text: "<textarea>" },
        { id: "C", text: "<label>" },
        { id: "D", text: "<form>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content: "Sử dụng thẻ nào sau đây để gửi dữ liệu biểu mẫu đến máy chủ?",
      options: [
        { id: "A", text: '<form method="post">' },
        { id: "B", text: "<input>" },
        { id: "C", text: "<submit>" },
        { id: "D", text: "<data>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Bộ chọn CSS nào sau đây chọn tất cả phần tử có tên lớp là "menu"?',
      options: [
        { id: "A", text: "#menu" },
        { id: "B", text: ".menu" },
        { id: "C", text: "menu" },
        { id: "D", text: "*menu" },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho mã lệnh: <p><b>CaCO<sup>3</sup></b></p> Phương án nào sau đây là kết quả hiển thị của mã lệnh trên trình duyệt?",
      options: [
        { id: "A", text: "CaCO3" },
        { id: "B", text: "CaCO3" },
        { id: "C", text: "CaCO3" },
        { id: "D", text: "CaCO³" },
      ],
      correctOptionId: "D",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content: "Đoạn mã nào sau đây tạo ra bảng như hình trên?",
      options: [
        {
          id: "A",
          text: '<table border="1" cellspacing="0">\n<caption>Bảng điểm</caption>\n<tr><th>Họ và tên</th><th>Toán</th></tr>\n<tr><td>Trần Văn B</td><td>9.4</td></tr>\n</table>',
        },
        {
          id: "B",
          text: '<table border="1">\n<caption>Bảng điểm</caption>\n<tr><th>Họ và tên</th><th>Toán</th></tr>\n<tr><td>Trần Văn B</td><td>9.4</td></tr>\n</table>',
        },
        {
          id: "C",
          text: '<table border="1" cellspacing="0">\n<title>Bảng điểm</title>\n<tr><th>Họ và tên</th><th>Toán</th></tr>\n<tr><td>Trần Văn B</td><td>9.4</td></tr>\n</table>',
        },
        {
          id: "D",
          text: '<table cellspacing="0">\n<caption>Bảng điểm</caption>\n<tr><th>Họ và tên</th><th>Toán</th></tr>\n<tr><td>Trần Văn B</td><td>9.4</td></tr>\n</table>',
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã CSS nào sau đây định kiểu kí tự đầu dòng của danh sách như hình trên?",
      options: [
        { id: "A", text: "ul{list-style-type: decimal;}" },
        { id: "B", text: "ul{list-style-type: decimal-leading-zero;}" },
        { id: "C", text: "ul{list-style-type: lower-roman;}" },
        { id: "D", text: "ul{list-style-type: float;}" },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Công ty X muốn nâng cấp mạng LAN nội bộ nhằm tăng hiệu suất và bảo mật. Họ đang cân nhắc giữa việc dùng Switch và Hub cùng với việc áp dụng VLAN để quản lý mạng. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Switch giúp giảm xung đột mạng bằng cách truyền dữ liệu trực tiếp đến thiết bị đích, nâng cao hiệu suất mạng.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Không cần thay Hub bằng Switch vẫn đảm bảo tăng hiệu suất mạng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Sử dụng Access Point để thiết lập mạng WLAN.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi được thiết lập phù hợp, các thiết bị trong mạng LAN và WLAN có thể trao đổi dữ liệu với nhau.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một công ty quản lý thông tin nhân viên trong bảng NhanVien có các cột: MaNV, TenNV, PhongBan, Luong. Ban quản trị muốn tìm danh sách nhân viên có lương cao hơn mức trung bình của phòng ban mình làm việc. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Bảng NhanVien có khoá chính là MaNV.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Trong bảng NhanVien một nhân viên có thể có 2 giá trị phòng ban vì nhân viên có thể làm việc ở 2 phòng ban.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Có thể sử dụng hệ quản trị cơ sở dữ liệu quan hệ để tạo lập, cập nhật và khai thác bảng NhanVien.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Câu lệnh SQL: SELECT MaNV, TenNV FROM NhanVien WHERE Luong > (SELECT MAX(Luong) FROM NhanVien WHERE PhongBan = NhanVien.PhongBan); có thể sử dụng để lấy kết quả theo yêu cầu.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh đang thực hiện nhiệm vụ tạo một website của Đoàn trường bằng một phần mềm. Nội dung website gồm trang chủ, các trang chuyên mục như: Tin tức - sự kiện, hoạt động, giới thiệu. Các trang chuyên mục có đầy đủ các thành phần cơ bản như thanh điều hướng, nội dung chính, phần chân trang. Nội dung chính của website có thể là các bài viết, hình ảnh, video hoạt động của đoàn trường. Một số học sinh đưa ra các quan điểm như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Trang chuyên mục là trang có các nội dung cùng chủ đề hoặc cùng lĩnh vực trong website.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Thông tin trên các trang web được truyền tải tới người xem phổ biến nhất là dưới dạng hình ảnh.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Cần tạo thanh điều hướng nhiều cấp để liên kết tới các chuyên mục vì thanh điều hướng 1 cấp không thể hiện thị được đầy đủ các liên kết.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Để điều chỉnh độ lớn hình ảnh trên trang web, cần thay đổi kích thước toàn bộ khối nội dung chứa hình ảnh.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Ngọc được giao phân tích doanh thu bán hàng theo tháng. Dữ liệu gồm các cột: Mã sản phẩm, Số lượng bán, Giá bán, Ngày bán. Cô cần tổng hợp doanh thu theo tháng, lọc các tháng có doanh thu trên 100 triệu và vẽ biểu đồ thể hiện xu hướng doanh thu. Có một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Số lượng bán có thể là số âm để thể hiện các giao dịch bán nhiều hơn số hàng có trong kho.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Có thể dùng Pivot Table để hiển thị xu hướng doanh thu bằng cách áp dụng trực tiếp biểu đồ đường (line chart).",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Câu lệnh SQL có thể sử dụng SUM(Số_lượng_bán * Giá_bán) kết hợp GROUP BY tháng để tổng hợp doanh thu.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Có thể lọc các tháng doanh thu trên 100 triệu bằng mệnh đề WHERE SUM(doanh_thu) > 100000000.",
          correctAnswer: false,
        },
      ],
    },
  ],
};
