import { Question, QuestionType } from "./types";

export const EXAM_SET_5 = {
  id: 5,
  title: "ĐỀ THI THỬ SỐ 1 - Giải mã kiến thức thi TN THPT môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuật ngữ nào sau đây mô tả khả năng học của trí tuệ nhân tạo dựa trên dữ liệu?",
      options: [
        { id: "A", text: "Machine Learning" },
        { id: "B", text: "Data Mining" },
        { id: "C", text: "Learning Data" },
        { id: "D", text: "Cloud Computing" },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Ứng dụng nào sau đây không tích hợp khả năng hiểu ngôn ngữ tự nhiên của trí tuệ nhân tạo?",
      options: [
        { id: "A", text: "Siri" },
        { id: "B", text: "Google Assistant" },
        { id: "C", text: "Microsoft Word" },
        { id: "D", text: "Alexa" },
      ],
      correctOptionId: "C",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trí tuệ nhân tạo AI không có khả năng nào sau đây?",
      options: [
        { id: "A", text: "Phân tích dữ liệu lớn để đưa ra dự đoán." },
        { id: "B", text: "Học từ kinh nghiệm để cải thiện hiệu suất." },
        { id: "C", text: "Cảm nhận cảm xúc một cách tự nhiên như con người." },
        { id: "D", text: "Nhận diện hình ảnh và giọng nói." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đúng về tình hình lao động trong một công ty khi sử dụng AI để tự động hóa quy trình kiểm tra chất lượng sản phẩm?",
      options: [
        {
          id: "A",
          text: "Tăng nhu cầu tuyển thêm nhân viên kiểm tra chất lượng sản phẩm.",
        },
        {
          id: "B",
          text: "Cần có lao động kỹ thuật để quản lí và vận hành hệ thống AI.",
        },
        {
          id: "C",
          text: "Tăng nhanh số lượng lao động do cần nhiều người làm việc cùng AI.",
        },
        {
          id: "D",
          text: "Tất cả lao động sẽ bị thay thế hoàn toàn bởi AI.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:\n\nPython:\ndef dem_uoc(n):\n  dem = 0\n  for i in range(1, n//2+1):\n    if n % i == 0: dem += 1\n  return dem\n\nC++:\nint dem_uoc(int n) {\n  int dem = 0;\n  for (int i = 1; i <= n / 2; ++i) {\n    if (n % i == 0) {\n      dem++;\n    }\n  }\n  return dem;\n}\n\nPhương án nào sau đây là kết quả của lời gọi hàm dem_uoc(12)?",
      options: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "12" },
        { id: "D", text: "0" },
      ],
      correctOptionId: "A",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thiết bị Access Point trong mạng có chức năng nào sau đây?",
      options: [
        {
          id: "A",
          text: "Khuếch đại tín hiệu Internet từ nhà cung cấp dịch vụ.",
        },
        { id: "B", text: "Kết nối các thiết bị mạng thông qua cáp mạng." },
        {
          id: "C",
          text: "Cung cấp kết nối không dây cho các thiết bị trong mạng cục bộ.",
        },
        {
          id: "D",
          text: "Định tuyến đường truyền gói tin giữa các mạng cục bộ.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây chuyển đổi dữ liệu số thành tín hiệu tương tự để truyền qua mạng?",
      options: [
        { id: "A", text: "Switch" },
        { id: "B", text: "Access Point" },
        { id: "C", text: "Hub" },
        { id: "D", text: "Modem" },
      ],
      correctOptionId: "D",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao thức TCP không có vai trò nào sau đây?",
      options: [
        { id: "A", text: "Gán địa chỉ nguồn và đích cho gói tin." },
        { id: "B", text: "Chia nhỏ dữ liệu thành các gói tin." },
        { id: "C", text: "Đánh số thứ tự trên các gói tin." },
        {
          id: "D",
          text: "Đảm bảo dữ liệu được truyền đi một cách chính xác.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công ty có 2 mạng LAN riêng biệt tại dãy văn phòng A và B. Thiết bị nào sau đây cần được lắp đặt để hai mạng LAN này có thể trao đổi dữ liệu với nhau?",
      options: [
        { id: "A", text: "Hub" },
        { id: "B", text: "Switch" },
        { id: "C", text: "Router" },
        { id: "D", text: "Modem" },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao tiếp trong không gian mạng không có lợi ích nào sau đây?",
      options: [
        { id: "A", text: "Tiết kiệm thời gian, chi phí." },
        { id: "B", text: "Không liên tục do yếu tố kỹ thuật." },
        { id: "C", text: "Công cụ giao tiếp đa dạng." },
        { id: "D", text: "Xóa bỏ rào cản giao tiếp." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Không nên chia sẻ thông tin cá nhân trên không gian mạng vì lí do nào sau đây?",
      options: [
        { id: "A", text: "Bạn bè khó kết nối và chia sẻ." },
        {
          id: "B",
          text: "Tăng nguy cơ bị xâm phạm quyền riêng tư.",
        },
        {
          id: "C",
          text: "Tạo điều kiện hợp tác và học tập hiệu quả.",
        },
        {
          id: "D",
          text: "Góp phần xây dựng hình ảnh cá nhân tích cực.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan bắt gặp bài đăng trên mạng xã hội của một bạn trong lớp có nội dung sai lệch và mang tính chế giễu người khác. Với vai trò là người sử dụng mạng có trách nhiệm Lan nên làm gì sau đây?",
      options: [
        { id: "A", text: "Bỏ qua bài viết vì không liên quan đến mình." },
        {
          id: "B",
          text: "Chụp màn hình và chia sẻ lại để cảnh báo người khác.",
        },
        {
          id: "C",
          text: "Gửi tin nhắn riêng góp ý nhẹ nhàng và khuyến khích bạn gỡ bài.",
        },
        {
          id: "D",
          text: "Bình luận công khai để chỉ trích bạn đó trước mọi người.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm nghề dịch vụ thuộc ngành Công nghệ thông tin không thực hiện công việc nào sau đây?",
      options: [
        { id: "A", text: "Hỗ trợ kĩ thuật, khắc phục sự cố phần mềm." },
        { id: "B", text: "Khắc phục lỗi phần cứng máy tính." },
        {
          id: "C",
          text: "Triển khai các giải pháp bảo mật hệ thống thông tin.",
        },
        { id: "D", text: "Bảo trì máy tính và thiết bị ngoại vi." },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm nghề Quản trị mạng cần thường xuyên giám sát và bảo trì hệ thống mạng vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Đảm bảo người dùng không thể truy cập vào hệ thống mạng.",
        },
        {
          id: "B",
          text: "Đảm bảo hệ thống hoạt động liên tục, ổn định và sớm phát hiện sự cố.",
        },
        {
          id: "C",
          text: "Tăng tốc độ truy cập Internet cho tất cả người dùng.",
        },
        { id: "D", text: "Dễ dàng truy cập vào mọi máy tính trong hệ thống." },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Doanh nghiệp A cần trang bị máy tính và thiết bị tin học phục vụ công việc. Họ nên liên hệ người thuộc nhóm nghề nào sau đây để được tư vấn về phần cứng và thiết bị ngoại vi phù hợp?",
      options: [
        { id: "A", text: "Dịch vụ kĩ thuật Công nghệ thông tin." },
        { id: "B", text: "Lập trình ứng dụng." },
        { id: "C", text: "Quản trị cơ sở dữ liệu." },
        { id: "D", text: "Thiết kế đồ họa." },
      ],
      correctOptionId: "A",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng thẻ HTML nào sau đây để chèn một đường kẻ ngang trong trang web?",
      options: [
        { id: "A", text: "<hr>" },
        { id: "B", text: "<br>" },
        { id: "C", text: "<p>" },
        { id: "D", text: "<pre>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ <img> trong HTML không có thuộc tính nào sau đây?",
      options: [
        { id: "A", text: "alt" },
        { id: "B", text: "src" },
        { id: "C", text: "href" },
        { id: "D", text: "title" },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây định kiểu bo tròn các góc của đường viền?",
      options: [
        { id: "A", text: "border-style" },
        { id: "B", text: "border-radius" },
        { id: "C", text: "border-color" },
        { id: "D", text: "border-width" },
      ],
      correctOptionId: "B",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong CSS không tồn tại bộ chọn nào sau đây?",
      options: [
        { id: "A", text: "Tên định danh." },
        { id: "B", text: "Tên miền." },
        { id: "C", text: "Tên lớp." },
        { id: "D", text: "Tên phần tử." },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây phù hợp để trình bày danh sách các món ăn yêu thích trên một trang web?",
      options: [
        { id: "A", text: "<table>" },
        { id: "B", text: "<li>" },
        { id: "C", text: "<ul>" },
        { id: "D", text: "<ol>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng mã CSS nào sau đây để tất cả đề mục cấp 1 hiển thị màu đỏ bất kể các quy tắc CSS khác?",
      options: [
        { id: "A", text: "h1 {color: red !priority;}" },
        { id: "B", text: "#h1 {color: red;}" },
        { id: "C", text: ".h1 {color: red;}" },
        { id: "D", text: "h1 {color: red !important;}" },
      ],
      correctOptionId: "D",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nam muốn tạo bảng điểm gồm các cột: Họ tên, Toán, Văn. Mã HTML nào sau đây tạo dòng tiêu đề cho bảng điểm?",
      options: [
        {
          id: "A",
          text: "<tr><th>Họ tên</th><th>Toán</th><th>Văn</th></tr>",
        },
        {
          id: "B",
          text: "<tr><td>Họ tên</td><td>Toán</td><td>Văn</td></tr>",
        },
        { id: "C", text: "<th>Họ tên</th><th>Toán</th><th>Văn</th>" },
        {
          id: "D",
          text: "<td><th>Họ tên</th><th>Toán</th><th>Văn</th></td>",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan sử dụng mã HTML nào sau đây để chèn một liên kết trên trang web cá nhân sao cho khi người dùng nhấp vào, trang liên kết sẽ mở ra trong một tab mới của trình duyệt?",
      options: [
        { id: "A", text: '<a href="https://info.com">Trang của tôi</a>' },
        {
          id: "B",
          text: '<a href="https://info.com" target="_self">Trang của tôi</a>',
        },
        {
          id: "C",
          text: '<a href="https://info.com" target="_blank">Trang của tôi</a>',
        },
        {
          id: "D",
          text: '<a src="https://info.com" target="_blank">Trang của tôi</a>',
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho đoạn mã HTML sau:\n<ol style="list-style-type: decimal-leading-zero;">\n<li>Bước 1</li>\n<li>Bước 2</li>\n</ol>\nKết quả nào sau đây được hiển thị trên trình duyệt?',
      options: [
        {
          id: "A",
          text: "1. Bước 1\n2. Bước 2",
        },
        {
          id: "B",
          text: "01. Bước 1\n02. Bước 2",
        },
        { id: "C", text: "I. Bước 1\nII. Bước 2" },
        { id: "D", text: "a. Bước 1\nb. Bước 2" },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trường phổ thông A tổ chức thi Tin học trực tuyến tại 2 phòng máy. Đề thi được lưu trên một máy chủ nội bộ. Các máy tính học sinh truy cập vào máy chủ để lấy đề thi và nộp bài vào thư mục được chỉ định. Máy tính không được kết nối Internet trong suốt thời gian thi để đảm bảo tính nghiêm túc và bảo mật.",
      subQuestions: [
        {
          id: "a",
          text: "Máy chủ nội bộ và các máy học sinh cùng kết nối trong một mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Thư mục chứa đề thi được chia sẻ cho học sinh với quyền Full control.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Ở mỗi phòng máy, cần một Switch để kết nối các máy tính thành mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Để học sinh có thể nộp bài lên máy chủ vào cuối giờ thi, cần kết nối lại Internet cho toàn bộ máy tính.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một cửa hàng quản lí bán hàng bằng hệ thống dữ liệu gồm bảng KhachHang và DonHang. Bảng KhachHang gồm các cột: MaKH (Mã khách hàng), HoTen (Họ tên), DiaChi (Địa chỉ), SoDienThoai (Số điện thoại). Thông tin đơn hàng được lưu trong bảng DonHang với các cột: MaHD (Mã hóa đơn), MaKH, NgayDatHang (Ngày đặt hàng), TongTien (Tổng tiền mua hàng). Sau đây là các ý kiến thảo luận của nhóm học sinh về hệ thống trên:",
      subQuestions: [
        {
          id: "a",
          text: "MaKH là khóa chính trong bảng KhachHang.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Bảng DonHang có 4 trường dữ liệu.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Nếu cửa hàng không có chi nhánh thì chỉ cần sử dụng hệ cơ sở dữ liệu phân tán để quản lí cơ sở dữ liệu.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Câu lệnh SELECT* FROM DonHang; truy vấn họ tên tất cả khách hàng đã mua hàng.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Minh được giáo viên giao nhiệm vụ thiết kế trang web giới thiệu dự án học tập của nhóm, sử dụng phần mềm thiết kế web trực tuyến. Minh khởi tạo một dự án, chọn mẫu giao diện phù hợp, sau đó thêm các trang như: Giới thiệu dự án, Nhật ký học tập và Góp ý. Minh chèn thêm văn bản mô tả, hình ảnh hoạt động nhóm, video minh họa và biểu mẫu thu thập ý kiến. Sau khi xem sản phẩm của Minh, các bạn trong lớp đưa ra một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Muốn thêm video vào trang web cần phải viết mã lệnh HTML.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Trang Góp ý có thể chèn biểu mẫu Google Forms để thu thập ý kiến từ người xem.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Phần mềm thiết kế web trực tuyến không cho phép thay đổi vị trí các thành phần như hình ảnh hay văn bản.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Sau khi trang web hoàn thiện, chỉ có thể xuất bản trực tuyến (public) để mọi người truy cập.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Bệnh viện X triển khai hệ thống quản lý bệnh nhân bằng cơ sở dữ liệu. CSDL QL_BenhNhan gồm 3 bảng với cấu trúc như sau: • BENHNHAN (MaBN, HoTen, NgaySinh, GioiTinh, DiaChi): lưu thông tin mã bệnh nhân, họ tên, ngày sinh, giới tính và địa chỉ. • BENH (MaBenh, TenBenh, MoTa): lưu mã bệnh, tên bệnh và mô tả chi tiết. • DIEUTRI (MaBN, MaBenh, NgayNhapVien, NgayRaVien, KetQua): lưu thông tin điều trị gồm mã bệnh nhân, mã bệnh, ngày nhập viện, ngày ra viện và kết quả điều trị. Một nhóm học sinh đang học về Cơ sở dữ liệu đưa ra một số ý kiến về hệ thống trên như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Khi một bệnh nhân ra viện, MaBN của bệnh nhân đó trong bảng BENHNHAN sẽ tự động xóa.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Khi tạo bảng DIEUTRI, cần tạo khóa ngoại liên kết với bảng BENHNHAN và BENH.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Khi nhập dữ liệu trường MaBN trong bảng BENHNHAN, dữ liệu đó phải tồn tại trong bảng DIEUTRI.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để hiển thị tên bệnh nhân điều trị bệnh 'Cúm' có kết quả là 'Khỏi', sử dụng lệnh truy vấn: SELECT HoTen FROM BENHNHAN JOIN DIEUTRI ON BENHNHAN.MaBN = DIEUTRI.MaBN JOIN BENH ON DIEUTRI.MaBenh = BENH.MaBenh WHERE TenBenh = 'Cúm' AND KetQua = 'Khỏi';",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
