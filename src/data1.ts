import { Question, QuestionType } from "./types";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const rawQuestions0501: Question[] = [
  {
    id: 1,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Khả năng hiểu ngôn ngữ của Trí tuệ nhân tạo không thể hiện trong hệ thống nào sau đây?",
    options: [
      { id: "A", text: "Trợ lý ảo trên xe ô tô." },
      { id: "B", text: "Tổng đài tự động hỏi đáp." },
      { id: "C", text: "Trợ giúp soạn thảo văn bản." },
      { id: "D", text: "Nhận diện khuôn mặt." },
    ],
    correctOptionId: "D",
  },
  {
    id: 2,
    type: QuestionType.SINGLE_CHOICE,
    content: "Người quản trị mạng thực hiện công việc chính nào sau đây?",
    options: [
      { id: "A", text: "Xây dựng các ứng dụng trên mạng." },
      { id: "B", text: "Tư vấn nâng cấp các thiết bị phần cứng." },
      { id: "C", text: "Thiết lập và cấu hình hệ thống mạng." },
      { id: "D", text: "Nghiên cứu và phát triển các phần mềm." },
    ],
    correctOptionId: "C",
  },
  {
    id: 3,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Phương án nào sau đây chỉ ra lý do chủ yếu dẫn tới nhu cầu gia tăng về số lượng chuyên gia bảo mật hệ thống, thông tin?",
    options: [
      {
        id: "A",
        text: "Tính phức tạp ngày càng tăng của các cuộc tấn công mạng.",
      },
      {
        id: "B",
        text: "Tốc độ xử lí của CPU ngày càng tăng nhanh.",
      },
      {
        id: "C",
        text: "Sự phổ biến của các ứng dụng soạn thảo văn bản.",
      },
      {
        id: "D",
        text: "Dung lượng của các thiết bị lưu trữ ngày càng tăng nhanh.",
      },
    ],
    correctOptionId: "A",
  },
  {
    id: 4,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong lĩnh vực y tế, Trí tuệ nhân tạo được ứng dụng phổ biến trong hệ thống nào sau đây?",
    options: [
      {
        id: "A",
        text: "Tự động hóa hoàn toàn việc kê đơn thuốc cho bệnh nhân.",
      },
      {
        id: "B",
        text: "In phiếu thứ tự khám bệnh cho bệnh nhân tại các phòng khám.",
      },
      {
        id: "C",
        text: "Tự động hóa hoàn toàn việc thẩm định các loại thuốc mới.",
      },
      {
        id: "D",
        text: "Hỗ trợ bác sĩ chẩn đoán bệnh dựa trên hình ảnh X-quang.",
      },
    ],
    correctOptionId: "D",
  },
  {
    id: 5,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Thiết bị nào sau đây có chức năng chính là thiết lập kênh kết nối giữa các thiết bị trong mạng LAN (có dây) để truyền dữ liệu?",
    options: [
      { id: "A", text: "Router." },
      { id: "B", text: "Access Point." },
      { id: "C", text: "Modem." },
      { id: "D", text: "Switch." },
    ],
    correctOptionId: "D",
  },
  {
    id: 6,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Một công ty có hai chi nhánh ở cách nhau khoảng 10 km. Các máy tính ở mỗi chi nhánh đã được kết nối thành một mạng LAN riêng. Thiết bị nào sau đây là phù hợp nhất để kết nối hai mạng riêng này thành một mạng chung?",
    options: [
      { id: "A", text: "Access Point." },
      { id: "B", text: "Modem." },
      { id: "C", text: "Router." },
      { id: "D", text: "Switch." },
    ],
    correctOptionId: "C",
  },
  {
    id: 7,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Đoạn mã CSS nào sau đây thiết lập đường viền có độ dày 3 pixel, kiểu nét đứt bao quanh các đối tượng nội dung khi hiển thị trên trình duyệt?",
    options: [
      {
        id: "A",
        text: "p.border { border-width: 3px; border-style: double; }",
      },
      {
        id: "B",
        text: "p { border-width: 3px; border-style: double; }",
      },
      {
        id: "C",
        text: "p { border-width: 3px; border-style: dashed; }",
      },
      {
        id: "D",
        text: "p.border { border-width: 3px; border-style: groove; }",
      },
    ],
    correctOptionId: "C",
  },
  {
    id: 8,
    type: QuestionType.SINGLE_CHOICE,
    content: `Lựa chọn ngôn ngữ Python hoặc C++ để tìm hiểu đoạn chương trình sau:

Python:
n, i, S = 9, 5, 0
while i < n:
    S = S + i
    i = i + 2
print(S)

C++:
int n = 9, i = 5, S = 0;
while (i < n) {
    S = S + i;
    i = i + 2;
}
cout << S;

Phương án nào sau đây chỉ ra đúng số lần lặp của câu lệnh while ở Dòng 2?`,
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "2" },
      { id: "C", text: "1" },
      { id: "D", text: "0" },
    ],
    correctOptionId: "B",
  },

  {
    id: 9,
    type: QuestionType.SINGLE_CHOICE,
    content: `Lựa chọn ngôn ngữ Python hoặc C++ để tìm hiểu đoạn chương trình sau:

Python:
s = "TRI TUE NHAN TAO"
x = 9
for i in range(8, 10):
    if i % 2 == 0:
        x = x * 2
    else:
        x = x // 3
print(s[x])

C++:
char s[] = "TRI TUE NHAN TAO";
int x = 9;
for (int i = 8; i < 10; i++) {
    if (i % 2 == 0) x = x * 2;
    else x = x / 3;
}
cout << s[x];

Sau khi thực hiện đoạn chương trình trên, kí tự nào sau đây được hiển thị trên màn hình?`,
    options: [
      { id: "A", text: "E" },
      { id: "B", text: "U" },
      { id: "C", text: "T" },
      { id: "D", text: "R" },
    ],
    correctOptionId: "A",
  },

  {
    id: 10,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong bộ giao thức TCP/IP, giao thức IP đảm nhận vai trò nào sau đây?",
    options: [
      {
        id: "A",
        text: "Truyền tải an toàn dữ liệu giữa các thiết bị.",
      },
      {
        id: "B",
        text: "Định tuyến các gói dữ liệu đến đúng địa chỉ mạng.",
      },
      {
        id: "C",
        text: "Cấp phát địa chỉ IP cho các thiết bị trong mạng.",
      },
      {
        id: "D",
        text: "Thiết lập bộ quy tắc gửi và nhận thư điện tử qua mạng.",
      },
    ],
    correctOptionId: "B",
  },

  {
    id: 11,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Đoạn mã HTML nào sau đây định dạng dòng chữ “TN THPT 2025” thành in đậm, riêng số 2025 còn được in nghiêng?",
    options: [
      { id: "A", text: "<p><em>TN THPT </em><strong>2025</strong></p>" },
      { id: "B", text: "<p><em>TN THPT <strong>2025</strong></em></p>" },
      { id: "C", text: "<p><em><strong>TN THPT 2025</strong></em></p>" },
      { id: "D", text: "<p><strong>TN THPT <em>2025</em></strong></p>" },
    ],
    correctOptionId: "D",
  },

  {
    id: 12,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Hành vi nào sau đây không phù hợp với đạo đức trong môi trường số?",
    options: [
      {
        id: "A",
        text: "Phát tán tin đồn chưa được kiểm chứng về người khác.",
      },
      {
        id: "B",
        text: "Trao đổi ý kiến thẳng thắn nhưng mang tính xây dựng.",
      },
      {
        id: "C",
        text: "Chia sẻ kiến thức có ích kèm theo nguồn trích dẫn.",
      },
      {
        id: "D",
        text: "Cổ vũ cho những việc làm tốt để lan tỏa đến mọi người.",
      },
    ],
    correctOptionId: "A",
  },

  {
    id: 13,
    type: QuestionType.SINGLE_CHOICE,
    content: "Thẻ HTML nào sau đây được dùng để tạo danh sách có thứ tự?",
    options: [
      { id: "A", text: "<li>" },
      { id: "B", text: "<ul>" },
      { id: "C", text: "<table>" },
      { id: "D", text: "<ol>" },
    ],
    correctOptionId: "D",
  },

  {
    id: 14,
    type: QuestionType.SINGLE_CHOICE,
    content: "Thuộc tính CSS nào sau đây thiết lập cỡ chữ cho văn bản?",
    options: [
      { id: "A", text: "font-size" },
      { id: "B", text: "text-align" },
      { id: "C", text: "font-family" },
      { id: "D", text: "text-indent" },
    ],
    correctOptionId: "A",
  },

  {
    id: 15,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Khi thực hiện đoạn mã HTML sau, dòng chữ “Chúc các em thi tốt!” sẽ được hiển thị trên trình duyệt theo định dạng nào dưới đây?",
    options: [
      { id: "A", text: "Màu xanh lá cây, in đậm." },
      { id: "B", text: "Màu vàng, in nghiêng." },
      { id: "C", text: "Màu xanh lá cây, in nghiêng." },
      { id: "D", text: "Màu vàng, in đậm." },
    ],
    correctOptionId: "B",
  },

  {
    id: 16,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Tiêu đề của trang web được khai báo trong phần tử HTML nào sau đây?",
    options: [
      { id: "A", text: "html" },
      { id: "B", text: "P" },
      { id: "C", text: "title" },
      { id: "D", text: "body" },
    ],
    correctOptionId: "C",
  },

  {
    id: 17,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Đoạn mã CSS nào sau đây thiết lập hình ảnh và văn bản được hiển thị theo khối?",
    options: [
      { id: "A", text: "img, p {display: block;}" },
      { id: "B", text: "img, p {display: none;}" },
      { id: "C", text: "img, p {display: inline;}" },
      { id: "D", text: "img, p {display: flex;}" },
    ],
    correctOptionId: "A",
  },

  {
    id: 18,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Người làm nghề sửa chữa và bảo trì máy tính phải có kiến thức về lĩnh vực nào sau đây?",
    options: [
      { id: "A", text: "Phần cứng máy tính." },
      { id: "B", text: "Lập trình nhúng." },
      { id: "C", text: "Cơ sở dữ liệu." },
      { id: "D", text: "An toàn thông tin." },
    ],
    correctOptionId: "A",
  },

  {
    id: 19,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Khi đọc được thông tin về một khu vực vừa bị thiên tai trên một trang báo điện tử uy tín, hành động nào sau đây không thể hiện tính nhân văn trên không gian mạng?",
    options: [
      {
        id: "A",
        text: "Đăng tải lại hình ảnh thiên tai trên trang cá nhân để tăng lượt tương tác.",
      },
      {
        id: "B",
        text: "Gửi lời chia buồn và động viên những người bị ảnh hưởng từ thiên tai.",
      },
      {
        id: "C",
        text: "Kêu gọi giúp đỡ từ cộng đồng nếu xác minh được thông tin là chính xác.",
      },
      {
        id: "D",
        text: "Tham gia các nhóm từ thiện trực tuyến để tìm hiểu và hỗ trợ thiết thực.",
      },
    ],
    correctOptionId: "A",
  },

  {
    id: 20,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Một người lạ bắt chuyện qua mạng xã hội và giới thiệu cơ hội “việc nhẹ lương cao” cho một học sinh. Tuy nhiên, để nhận công việc này phải nộp trước một số tiền đặt cọc giữ chỗ. Trong tình huống này, ứng xử nào sau đây của bạn học sinh không an toàn trên không gian mạng?",
    options: [
      {
        id: "A",
        text: "Xác minh thông tin một cách cẩn trọng.",
      },
      {
        id: "B",
        text: "Bỏ qua tin nhắn và cảnh báo cho bạn bè.",
      },
      {
        id: "C",
        text: "Trình báo cho công an về dấu hiệu lừa đảo.",
      },
      {
        id: "D",
        text: "Nộp tiền đặt cọc ngay theo yêu cầu.",
      },
    ],
    correctOptionId: "D",
  },

  {
    id: 21,
    type: QuestionType.SINGLE_CHOICE,
    content:
      'Cho đoạn mã HTML sau: <table border="1" width="50%" height="10%"> <tr> <th> </th> <th> </th> <th> </th> </tr> <tr> <td> </td> <td> </td> <td> </td> </tr> </table> Phương án nào sau đây nêu đúng số lượng hàng và cột của bảng được tạo bởi đoạn mã trên?',
    options: [
      { id: "A", text: "3 hàng, 2 cột." },
      { id: "B", text: "3 hàng, 3 cột." },
      { id: "C", text: "2 hàng, 2 cột." },
      { id: "D", text: "2 hàng, 3 cột." },
    ],
    correctOptionId: "B",
  },

  {
    id: 22,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Lĩnh vực tin học nào sau đây tập trung vào việc nghiên cứu và phát triển các phần mềm làm cho máy tính ngày càng thông minh như con người?",
    options: [
      { id: "A", text: "Mạng máy tính." },
      { id: "B", text: "An toàn thông tin." },
      { id: "C", text: "Trí tuệ nhân tạo." },
      { id: "D", text: "Internet vạn vật." },
    ],
    correctOptionId: "C",
  },

  {
    id: 23,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Cách ứng xử nào sau đây phù hợp đối với kết quả được tạo ra bởi Trí tuệ nhân tạo?",
    options: [
      {
        id: "A",
        text: "Tin tưởng hoàn toàn vào tính chính xác và khách quan.",
      },
      {
        id: "B",
        text: "Xem xét một cách thận trọng và có trách nhiệm.",
      },
      {
        id: "C",
        text: "Giữ nguyên để làm sản phẩm học tập và nghiên cứu.",
      },
      {
        id: "D",
        text: "Chia sẻ ra cộng đồng mà không cần kiểm chứng.",
      },
    ],
    correctOptionId: "B",
  },

  {
    id: 24,
    type: QuestionType.SINGLE_CHOICE,
    content: "Router có chức năng chính nào sau đây?",
    options: [
      {
        id: "A",
        text: "Kết nối các thiết bị bằng sóng vô tuyến trong mạng cục bộ.",
      },
      {
        id: "B",
        text: "Tìm đường đi tối ưu để truyền các gói dữ liệu giữa các mạng.",
      },
      {
        id: "C",
        text: "Chuyển đổi giữa tín hiệu tương tự và tín hiệu số qua mạng.",
      },
      {
        id: "D",
        text: "Phát tín hiệu đến tất cả các cổng kết nối trong mạng LAN.",
      },
    ],
    correctOptionId: "B",
  },

  {
    id: 25,
    type: QuestionType.TRUE_FALSE,
    content:
      "Tòa nhà của một công ty có một số phòng làm việc. Mỗi phòng có không quá 10 máy tính, được kết nối với nhau thông qua Switch tạo thành một mạng LAN. Công ty cần kết nối các mạng LAN này với nhau để tạo thành một mạng cục bộ duy nhất.",
    subQuestions: [
      {
        id: "a",
        text: "Mạng cục bộ của công ty là mạng WAN.",
        correctAnswer: false,
      },
      {
        id: "b",
        text: "Có thể sử dụng Switch loại 16 cổng để kết nối các máy tính trong mỗi phòng làm việc.",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Để máy tính trong các phòng làm việc truy cập được Internet thì chỉ cần lắp đặt thêm một Modem mà không cần phải đăng ký với nhà cung cấp dịch vụ Internet.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Để các nhân viên có thể sử dụng điện thoại thông minh kết nối được vào mạng cục bộ của công ty qua Wi-Fi, có thể lắp đặt cho mỗi phòng một Access Point và kết nối thiết bị này với Switch ở phòng đó.",
        correctAnswer: true,
      },
    ],
  },

  {
    id: 26,
    type: QuestionType.TRUE_FALSE,
    content:
      "Dữ liệu về dân số nước ta từ năm 2019 đến năm 2023 có trong niên giám số liệu thống kê của Tổng cục thống kê. Việc quản lí dữ liệu này có ý nghĩa quan trọng trong hoạch định một số chính sách quốc gia. Để lưu trữ và khai thác dữ liệu về dân số hàng năm theo từng khu vực, có thể tạo cơ sở dữ liệu với các bảng sau: • KHUVUC (maKV, tenKV): lưu thông tin mã khu vực và tên khu vực; mỗi khu vực có một mã khu vực duy nhất. TINH (maTinh, maKV, tenTinh): lưu thông tin mã tỉnh, mã khu vực và tên tỉnh; mỗi tỉnh chỉ thuộc về một khu vực và mỗi khu vực có thể có nhiều tỉnh. DANSO (maTinh, nam, danSoTB) lưu thông tin: mã tỉnh, năm và dân số trung bình của năm. Sau khi tìm hiểu cơ sở dữ liệu trên, một số học sinh đưa ra các ý kiến sau:",
    subQuestions: [
      {
        id: "a",
        text: "Trường maKV là khóa ngoài của bảng KHUVUC.",
        correctAnswer: false,
      },
      {
        id: "b",
        text: "Nhóm hai trường maTinh và nam là khóa chính của bảng DANSO.",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Chỉ cần liên kết hai bảng TINH và DANSO theo khóa maTinh là có thể kết xuất đầy đủ tên tỉnh, tên khu vực, năm và dân số trung bình.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Có thể truy vấn thông tin gồm tên tỉnh, năm và dân số trung bình năm 2020 bằng cách liên kết TINH với DANSO qua khóa maTinh và điều kiện DANSO.nam = 2020.",
        correctAnswer: true,
      },
    ],
  },

  {
    id: 27,
    type: QuestionType.TRUE_FALSE,
    content:
      "Một trường phổ thông muốn sử dụng một phần mềm để xây dựng một website đưa thông tin về hoạt động của các câu lạc bộ (CLB) trong nhà trường. Website có cấu trúc như sau: phần đầu trang chứa hình ảnh logo của trường; thân banner chứa hình ảnh về hoạt động của các CLB; thanh điều hướng gồm ba mục chính Giới thiệu, Hoạt động và Các sự kiện. Ứng với mỗi mục chính sẽ có các mục con để dẫn đến trang web của các CLB tương ứng. Trong khi thảo luận về việc sử dụng phần mềm để xây dựng website này, một số bạn học sinh đưa ra ý kiến như sau:",
    subQuestions: [
      {
        id: "a",
        text: "Phần mềm tạo trang web có sẵn mẫu bố cục trang web để thiết kế phần cho website của trường.",
        correctAnswer: true,
      },
      {
        id: "b",
        text: "Phần mềm tạo trang web cho phép thay thế ảnh có sẵn tại mẫu bằng ảnh về hoạt động của các CLB.",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Các mục con có nhãn là tên các CLB bắt buộc phải hiển thị trên thanh điều hướng của trang chủ.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Để có thể xem video về hoạt động của các CLB trên website, phải đồng thời thực hiện hai việc: tải video lên máy chủ của trang web và nhúng liên kết tới video đó trên YouTube.",
        correctAnswer: false,
      },
    ],
  },

  {
    id: 28,
    type: QuestionType.TRUE_FALSE,
    content:
      "Trong niên giám số liệu thống kê có dữ liệu từ năm 2019 đến năm 2023 về tổng vốn đăng kí đầu tư trực tiếp nước ngoài, được cấp phép phân theo địa phương (có hiệu lực đến 31/12/2023). Cần tạo cơ sở dữ liệu với các bảng sau để lưu trữ và khai thác nguồn dữ liệu này. • KHUVUC (maKV, tenKV): lưu thông tin về khu vực và tên khu vực; mỗi khu vực có một mã khu vực phát. • DIAPHUONG (maDP, tenDP, maKV): lưu thông tin mã địa phương, tên địa phương và mã khu vực; mỗi địa phương chỉ thuộc một khu vực và mỗi khu vực có thể có một số địa phương. • DAUTU (maDP, nam, tongVon): lưu trữ thông tin mã địa phương, năm và tổng vốn đăng kí đầu tư theo địa phương trong năm. Sau khi tìm hiểu các phần mềm để quản trị cơ sở dữ liệu trên, một số bạn học sinh đưa ra các ý kiến sau:",
    subQuestions: [
      {
        id: "a",
        text: "Phần mềm định nghĩa các bảng trên có thể sử dụng kiểu dữ liệu văn bản để lưu trữ dữ liệu dạng mã cho các trường maKV, maDP, tenDP, nam, tongVon.",
        correctAnswer: false,
      },
      {
        id: "b",
        text: "Khi tạo bảng DAUTU trong phần mềm quản trị cơ sở dữ liệu, chọn trường maDP rồi thiết lập trường này làm khóa chính của bảng.",
        correctAnswer: false,
      },
      {
        id: "c",
        text: "Trong phần mềm quản trị cơ sở dữ liệu, mối quan hệ của 3 bảng đã cho được thiết lập dựa trên việc liên kết từ bảng KHUVUC đến bảng DIAPHUONG và liên kết từ bảng KHUVUC đến bảng DAUTU.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Để đưa ra thống tin tổng vốn đầu tư của địa phương, năm và tổng vốn đăng kí đầu tư theo địa phương trong năm, có thể thực hiện truy vấn sau: SELECT KHUVUC.tenKV, DIAPHUONG.tenDP, DAUTU.nam, DAUTU.tongVon FROM KHUVUC INNER JOIN (DIAPHUONG INNER JOIN DAUTU ON DIAPHUONG.maDP = DAUTU.maDP) ON KHUVUC.maKV = DIAPHUONG.maKV",
        correctAnswer: true,
      },
    ],
  },
];

const singleChoice0501 = rawQuestions0501.filter(
  (q) => q.type === QuestionType.SINGLE_CHOICE,
);

const trueFalse0501 = rawQuestions0501.filter(
  (q) => q.type === QuestionType.TRUE_FALSE,
);

const shuffledSingleChoice0501 = shuffleArray(singleChoice0501).map((q) => {
  if (!q.options) return q;

  const correctOption = q.options.find((opt) => opt.id === q.correctOptionId);

  const correctText = correctOption?.text;

  const shuffledOptions = shuffleArray([...q.options]);

  const finalOptions = shuffledOptions.map((opt, index) => ({
    ...opt,
    id: String.fromCharCode(65 + index),
  }));

  const newCorrectOption = finalOptions.find((opt) => opt.text === correctText);

  return {
    ...q,
    options: finalOptions,
    correctOptionId: newCorrectOption?.id || q.correctOptionId,
  };
});

export const EXAM_SET_2 = {
  id: 2,
  title:
    "BỘ GIÁO DỤC VÀ ĐÀO TẠO ĐỀ THI CHÍNH THỨC KỲ THI TỐT NGHIỆP TRUNG HỌC PHỔ THÔNG NĂM 2025",
  questions: [...shuffledSingleChoice0501, ...trueFalse0501],
};
