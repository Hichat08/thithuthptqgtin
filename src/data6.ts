import { Question, QuestionType } from "./types";

export const EXAM_SET_7 = {
  id: 7,
  title:
    "ĐỀ THI THỬ SỐ 3 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trí tuệ nhân tạo (AI) có khả năng nào sau đây?",
      options: [
        { id: "A", text: "Lưu trữ dữ liệu trên các thiết bị." },
        {
          id: "B",
          text: "Tự động hóa các tác vụ thông thường không cần thuật toán.",
        },
        {
          id: "C",
          text: "Mô phỏng tư duy và hành vi thông minh của con người.",
        },
        {
          id: "D",
          text: "Thực hiện các phép tính toán cơ bản trong thời gian ngắn.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ thống trí tuệ nhân tạo có khả năng chơi cờ thuộc loại AI nào sau đây?",
      options: [
        {
          id: "A",
          text: "Artificial Super Intelligence (Siêu trí tuệ nhân tạo)",
        },
        {
          id: "B",
          text: "Artificial General Intelligence (Trí tuệ nhân tạo tổng quát)",
        },
        {
          id: "C",
          text: "Artificial Narrow Intelligence (Trí tuệ nhân tạo yếu)",
        },
        { id: "D", text: "Natural Intelligence (Trí tuệ tự nhiên)" },
      ],
      correctOptionId: "C",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây sai về ứng dụng của AI trong lĩnh vực y tế?",
      options: [
        {
          id: "A",
          text: "Phân tích hình ảnh y tế hỗ trợ bác sĩ chẩn đoán bệnh.",
        },
        {
          id: "B",
          text: "Tự động thực hiện phẫu thuật không cần sự can thiệp của bác sĩ.",
        },
        {
          id: "C",
          text: "Dự đoán nguy cơ bệnh dựa trên dữ liệu bệnh án và lịch sử sức khỏe.",
        },
        {
          id: "D",
          text: "Hỗ trợ theo dõi tình trạng bệnh nhân thông qua các thiết bị đeo.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bệnh viện X triển khai hệ thống AI hỗ trợ chẩn đoán bệnh. Bác sĩ của bệnh viện nên làm gì sau đây để sử dụng AI hiệu quả?",
      options: [
        {
          id: "A",
          text: "Kết hợp kết quả phân tích của AI với chuyên môn của bác sĩ.",
        },
        {
          id: "B",
          text: "Chỉ dùng AI để chẩn đoán các bệnh nhẹ.",
        },
        {
          id: "C",
          text: "Tin tưởng tuyệt đối vào kết quả chẩn đoán của AI.",
        },
        {
          id: "D",
          text: "Để AI tự động ra quyết định điều trị bệnh.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn chương trình sau giải quyết bài toán nào?\n\nPython:\na = [10, 2, 3, 4, 53, 6]\ns = 0\nfor x in a:\n  if x % 2 == 0:\n    s += x\nprint(s)\n\nC++:\nint a[] = {10, 2, 3, 4, 53, 6};\nint s = 0;\nfor (int x : a) {\n  if (x % 2 == 0) {\n    s += x;\n  }\n}\ncout << s;",
      options: [
        { id: "A", text: "Tính tổng các phần tử trong danh sách." },
        { id: "B", text: "Tính tổng các số chẵn trong danh sách." },
        { id: "C", text: "In ra các số chẵn trong danh sách." },
        { id: "D", text: "Đếm số lượng phần tử chẵn trong danh sách." },
      ],
      correctOptionId: "B",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây dùng làm thành phần trung tâm trong mô hình mạng hình sao?",
      options: [
        { id: "A", text: "Modem" },
        { id: "B", text: "Router" },
        { id: "C", text: "Switch" },
        { id: "D", text: "Repeater" },
      ],
      correctOptionId: "C",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây có chức năng kết nối mạng cục bộ với Internet?",
      options: [
        { id: "A", text: "Switch" },
        { id: "B", text: "Access Point" },
        { id: "C", text: "Hub" },
        { id: "D", text: "Router" },
      ],
      correctOptionId: "D",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao thức mạng có vai trò nào sau đây trong mạng máy tính?",
      options: [
        {
          id: "A",
          text: "Đảm bảo các thiết bị hiểu và giao tiếp với nhau hiệu quả.",
        },
        {
          id: "B",
          text: "Kết nối máy tính và các thiết bị trong mạng.",
        },
        {
          id: "C",
          text: "Tăng tốc độ truyền dữ liệu giữa các máy tính và thiết bị.",
        },
        {
          id: "D",
          text: "Đảm bảo tính bảo mật khi truyền dữ liệu trong mạng.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây phù hợp để mở rộng mạng không dây cho dãy các phòng học trong trường?",
      options: [
        { id: "A", text: "Hub" },
        { id: "B", text: "Switch" },
        { id: "C", text: "Access Point" },
        { id: "D", text: "Modem" },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành động nào sau đây thể hiện cách ứng xử nhân văn khi tham gia mạng xã hội?",
      options: [
        { id: "A", text: "Chia sẻ thông tin sai lệch để thu hút sự chú ý." },
        { id: "B", text: "Tôn trọng ý kiến và quyền riêng tư của người khác." },
        {
          id: "C",
          text: "Chia sẻ mọi thông tin tìm thấy được trên mạng xã hội.",
        },
        { id: "D", text: "Đăng tải mọi thông tin cá nhân lên mạng xã hội." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Việc chia sẻ thông tin không xác thực khi giao tiếp trong không gian mạng có thể gây ra hậu quả nào sau đây?",
      options: [
        {
          id: "A",
          text: "Nhận được nhiều thông tin từ người khác chia sẻ.",
        },
        {
          id: "B",
          text: "Gây hiểu lầm, hoang mang và mất uy tín.",
        },
        {
          id: "C",
          text: "Tăng lượng người theo dõi tài khoản mạng xã hội.",
        },
        {
          id: "D",
          text: "Thu hút sự chú ý của nhiều người lạ.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bạn đang lướt xem tin tức trên mạng xã hội thì bắt gặp một bài đăng có hình ảnh phản cảm. Bạn nên thực hiện hành vi nào sau đây để góp phần xây dựng môi trường mạng lành mạnh?",
      options: [
        { id: "A", text: "Đăng bình luận chỉ trích bài viết." },
        { id: "B", text: "Lướt nhanh qua để không còn nhìn thấy hình ảnh đó." },
        { id: "C", text: "Chia sẻ lại bài viết để cảnh báo mọi người." },
        {
          id: "D",
          text: "Báo cáo bài viết với ban quản trị của diễn đàn.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc nào sau đây thuộc nhóm nghề Dịch vụ thuộc ngành Công nghệ thông tin?",
      options: [
        {
          id: "A",
          text: "Lập trình phần mềm và phát triển game.",
        },
        {
          id: "B",
          text: "Thiết kế đồ họa và chỉnh sửa video.",
        },
        {
          id: "C",
          text: "Sửa chữa phần cứng, cài đặt phần mềm.",
        },
        { id: "D", text: "Mua bán máy tính, thiết bị tin học." },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm nhóm nghề Dịch vụ thuộc ngành Công nghệ thông tin cần có kĩ năng nào sau đây?",
      options: [
        {
          id: "A",
          text: "Xử lý sự cố và giao tiếp với khách hàng.",
        },
        { id: "B", text: "Vẽ và thiết kế mỹ thuật." },
        { id: "C", text: "Phân tích dữ liệu chuyên sâu." },
        { id: "D", text: "Dịch thuật và thuyết trình." },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một doanh nghiệp vừa mở rộng chi nhánh, cần đảm bảo các máy chủ, mạng hệ thống giữa các chi nhánh hoạt động ổn định, bảo mật cao và có thể quản lý từ xa. Để đáp ứng yêu cầu này, doanh nghiệp cần tuyển dụng nhân sự có chuyên môn trong lĩnh vực nào sau đây?",
      options: [
        { id: "A", text: "Kỹ thuật phần mềm." },
        { id: "B", text: "Quản trị và an ninh mạng." },
        { id: "C", text: "Thiết kế đồ họa." },
        { id: "D", text: "Phân tích dữ liệu." },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng thẻ HTML nào sau đây để ngắt dòng văn bản trong trang web?",
      options: [
        { id: "A", text: "<br>" },
        { id: "B", text: "<hr>" },
        { id: "C", text: "<p>" },
        { id: "D", text: "<pre>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ <a> trong HTML không có thuộc tính nào sau đây?",
      options: [
        { id: "A", text: "href" },
        { id: "B", text: "target" },
        { id: "C", text: "alt" },
        { id: "D", text: "title" },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây dùng để định kiểu độ dày của đường viền?",
      options: [
        { id: "A", text: "border-style" },
        { id: "B", text: "border-width" },
        { id: "C", text: "border-color" },
        { id: "D", text: "border-radius" },
      ],
      correctOptionId: "B",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cách chèn mã CSS nào sau đây sử dụng thuộc tính style trực tiếp trong thẻ HTML?",
      options: [
        { id: "A", text: "CSS nội bộ (Internal CSS)" },
        { id: "B", text: "CSS nội tuyến (Inline CSS)" },
        { id: "C", text: "CSS ngoài (External CSS)" },
        { id: "D", text: "CSS nâng cao (Advanced CSS)" },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thẻ <img> sử dụng thuộc tính nào sau đây cung cấp văn bản thay thế hỗ trợ và mô tả hình ảnh khi không tải được?",
      options: [
        { id: "A", text: "title" },
        { id: "B", text: "src" },
        { id: "C", text: "alt" },
        { id: "D", text: "href" },
      ],
      correctOptionId: "C",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã CSS h1, p {color: blue;} sử dụng loại định kiểu bằng vùng chọn nào sau đây?",
      options: [
        {
          id: "A",
          text: "Vùng chọn tổ hợp (combinator selector)",
        },
        { id: "B", text: "Vùng chọn nhóm (group selector)" },
        { id: "C", text: "Vùng chọn lớp (class selector)" },
        { id: "D", text: "Vùng chọn lớp giả (pseudo-class selector)" },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mã HTML nào sau đây chèn video có tên “AI.mp4” vào trang web và cho phép người dùng điều khiển video đó?",
      options: [
        { id: "A", text: '<video src="AI.mp4"></video>' },
        { id: "B", text: '<video src="AI.mp4" autoplay></video>' },
        { id: "C", text: '<video src="AI.mp4" controls></video>' },
        { id: "D", text: '<video file="AI.mp4" controls></video>' },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho đoạn mã HTML sau:\n<table border="1">\n <tr> <th>STT</th> <th>Môn học</th> <th>Điểm</th> </tr>\n <tr> <td>1</td> <td>Toán</td> <td>8.5 </td> </tr>\n</table>\nPhương án nào sau đây đúng về ý nghĩa của đoạn mã trên?',
      options: [
        { id: "A", text: "Tạo bảng gồm 3 ô tiêu đề." },
        { id: "B", text: "Tạo danh sách gồm 2 mục." },
        { id: "C", text: "Tạo bảng gồm 6 ô dữ liệu." },
        { id: "D", text: "Tạo form gồm 2 dòng nhập liệu." },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho mã CSS: p {color: blue; font-size: 16px; }. Phương án nào sau đây là cách sử dụng đúng đoạn mã CSS này trong HTML?",
      options: [
        { id: "A", text: "<p> Nội dung </p>" },
        { id: "B", text: '<h1 class= "p">Nội dung </h1>' },
        { id: "C", text: '<p id= "Nội dung"> </p>' },
        { id: "D", text: ".p { color: blue; font-size: 16px; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Phòng Tin học của một trường phổ thông được thiết lập mạng LAN để chia sẻ dữ liệu giữa các máy tính. Các máy tính được kết nối vào một thiết bị trung tâm đặt ở cuối phòng. Nhà trường dự định lắp đặt thêm một phòng Tin mới bên cạnh phòng hiện có và mong muốn các máy tính giữa hai phòng có thể trao đổi dữ liệu với nhau. Đồng thời, học sinh có thể gửi dữ liệu, sản phẩm bài tập thực hành để truy cập bằng thiết bị cá nhân tại nhà. Các bạn học sinh lớp 12A1, sau khi học về chủ đề kết nối mạng, đã cùng thảo luận và đưa ra một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Thiết bị trung tâm kết nối các máy tính trong phòng Tin là Switch.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Mạng LAN chỉ hoạt động trong phạm vi một phòng Tin nên các máy tính trong phòng Tin mới không thể trao đổi dữ liệu với máy trong phòng Tin hiện có.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Việc chia sẻ dữ liệu giữa các máy tính trong mạng LAN được thực hiện bởi chức năng mạng của hệ điều hành.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Cần lắp một Router để các máy tính có thể trao đổi dữ liệu ra bên ngoài.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một hệ thống quản lí điểm thi học kì ở trường phổ thông lưu thông tin học sinh trong bảng HocSinh gồm các cột: MaHS, HoTen, Lop, GioiTinh. Thông tin điểm các môn học được lưu trong bảng Diem với các cột: MaHS, TenMon, Diemso. Sau đây là các ý kiến thảo luận của nhóm học sinh về hệ thống trên:",
      subQuestions: [
        {
          id: "a",
          text: "MaHS trong bảng Diem có thể được dùng làm khóa ngoại để liên kết với bảng HocSinh.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Bảng HocSinh gồm 4 bản ghi.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Mỗi học sinh có một bản ghi duy nhất trong bảng Diem.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Câu lệnh SELECT MAX(Diemso) FROM Diem WHERE MaHS = 'HS010'; dùng để lấy điểm cao nhất của học sinh HS010.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Huy được chủ nhiệm CLB Tin của trường giao nhiệm vụ thiết kế một trang web giới thiệu về CLB, sử dụng phần mềm tạo trang web trực tuyến. Huy tạo một dự án trang web, chọn các mẫu giao diện có sẵn để thiết kế các trang: Trang chủ, Hoạt động và Đăng ký thành viên. Sau đó, cậu sử dụng các tiện ích có sẵn của phần mềm thêm vào văn bản, hình ảnh, liên kết và biểu mẫu đăng ký thành viên. Sau khi quan sát trang web, các bạn của Huy đưa ra các ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Huy cần biết lập trình HTML mới có thể tạo được trang web.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Việc chọn đúng mẫu giao diện phù hợp giúp tiết kiệm thời gian và đảm bảo tính thẩm mỹ cho trang web.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Trang Đăng ký thành viên chỉ có thể chứa biểu mẫu, không thể thêm văn bản hoặc hình ảnh.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Hình ảnh ở trang Hoạt động có thể được trình bày sinh động dưới dạng trình chiếu (slide show).",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học triển khai hệ thống quản lí học tập của học sinh bằng hệ cơ sở dữ liệu. CSDL QuanLiHS gồm 3 bảng với cấu trúc như sau: HOCSINH (MaHS, Hoten, Ngaysinh, Gioitinh, Lop); MONHOC (MaMH, TenMH, Sotiet); DIEM (MaHS, MaMH, DiemKT, DiemThi). Các bạn học sinh đang học về hệ CSDL đưa ra một số ý kiến về hệ thống trên như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Khi nhập dữ liệu bảng HOCSINH, trường MaHS cần để trống.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Khi tạo bảng DIEM, cần tạo khóa ngoài liên kết bảng điểm với bảng HOCSINH và MONHOC.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Khi một học sinh chuyển lớp trường Lop trong bảng HOCSINH tương ứng với học sinh đó tự động được cập nhật.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để hiển thị tên học sinh có điểm thi môn Tin cao nhất sử dụng lệnh truy vấn: SELECT Hoten, DiemThi FROM HOCSINH JOIN DIEM JOIN MONHOC WHERE TenMH = 'Tin' AND DiemThi = (SELECT MAX(DiemThi)",
          correctAnswer: false,
        },
      ],
    },
  ] as Question[],
};
