import { Question, QuestionType } from "./types";

export const EXAM_SET_3 = {
  id: 3,
  title:
    "SỞ GD&ĐT NINH BÌNH - CỤM 05 TRƯỜNG THPT - ĐỀ THI THỬ TỐT NGHIỆP THPT NĂM 2026 (ĐỢT 1) - Môn thi: TIN HỌC",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bạn Q tham gia trong một cuộc thảo luận trực tuyến, khi trao đổi có một thành viên dùng lời lẽ cáu gắt và thiếu lịch sự. Cách ứng xử nào của bạn Q thể hiện tính nhân văn?",
      options: [
        {
          id: "A",
          text: "Lặng lẽ rời khỏi diễn đàn và không bao giờ quay lại tham gia thảo luận.",
        },
        {
          id: "B",
          text: "Phản bác lại ngay lập tức bằng những lời lẽ gay gắt để thể hiện quan điểm của minh.",
        },
        { id: "C", text: "Phớt lờ, xem như không thấy, không biết." },
        {
          id: "D",
          text: "Đáp lại một cách lịch sự và tập trung vào nội dung của vấn đề đang thảo luận.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành động nào thể hiện sự nhân văn và tôn trọng khi tham gia trực tuyến?",
      options: [
        {
          id: "A",
          text: "Phản bác một cách xây dựng và tôn trọng quan điểm của người khác, dù không đồng ý.",
        },
        {
          id: "B",
          text: "Sử dụng các biểu tượng cảm xúc để thể hiện cảm xúc cá nhân mà không cần chú ý đến ngữ cảnh.",
        },
        {
          id: "C",
          text: "Luôn đồng tình với tất cả các ý kiến của mọi người trong lúc thảo luận.",
        },
        {
          id: "D",
          text: "Chia sẻ thường xuyên các tin nóng theo số đông để tạo hiệu ứng và thu hút sự chú ý.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đặc trưng nào sau đây không phải là một trong những đặc trưng cơ bản của AI?",
      options: [
        { id: "A", text: "Khả năng học." },
        { id: "B", text: "Khả năng suy luận." },
        { id: "C", text: "Khả năng vận động." },
        { id: "D", text: "Khả năng nhận thức." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bảng điểm có các trường MOT_TIET; HỌC_KI. Để tìm những học sinh có điểm một tiết lớn hơn 3 và điểm thi học kì lớn hơn 5, biểu thức điều kiện nào sau đây là đúng?",
      options: [
        { id: "A", text: "MOT_TIET >= 3 AND HOC_KI > 5" },
        { id: "B", text: '[MOT_TIET] > "3" AND [HOC_KI] > "5"' },
        { id: "C", text: "[MOT_TIET] >= 3 OR [HOC_KI] > 5" },
        { id: "D", text: "[MOT_TIET] > 3 AND [HOC_KI] > 5" },
      ],
      correctOptionId: "D",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bạn A đọc một bài viết trên mạng xã hội (từ một tài khoản cho phép chia sẻ nội dung và nhận tin nhắn từ người lạ) nói về hoàn cảnh của bạn B trong lớp bị sai sự thật. Hành động nào của A thể hiện sự nhân văn khi giao tiếp trên không gian mạng?",
      options: [
        {
          id: "A",
          text: "Phản ứng mạnh mẽ và kêu gọi người khác lên án, phản bác tác giả đăng bài.",
        },
        {
          id: "B",
          text: "Chia sẻ bài viết đó lên trang cá nhân để bạn B có thể đọc được.",
        },
        {
          id: "C",
          text: "Bỏ qua nội dung bài viết vì không liên quan đến mình để tránh gặp rắc rối.",
        },
        {
          id: "D",
          text: "Gửi tin nhắn riêng giải thích và đề nghị tác giả đính chính nội dung hoặc gỡ bài.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để áp dụng cùng một kiểu chữ cho cả <h1> và các phần tử có class là title, cách viết CSS nào là đúng?",
      options: [
        { id: "A", text: "h1, .title {font-family: Arial;}" },
        { id: "B", text: "h1.title {font-family: Arial;}" },
        { id: "C", text: "h1.title {font-family: Arial;}" },
        { id: "D", text: ".h1, title {font-family: Arial;}" },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:\n\nPython:\ns = ""\nn = 12345\nwhile n > 0:\n  s += str(n % 10)\n  n //= 10\nprint(s)\n\nC++:\n#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n  string s = "";\n  int n = 12345;\n  while (n > 0) {\n    s += to_string(n % 10);\n    n /= 10;\n  }\n  cout << s << endl;\n}\n\nPhương án nào dưới đây nêu đúng giá trị của s sau khi thực hiện chương trình trên?',
      options: [
        { id: "A", text: "1" },
        { id: "B", text: "5" },
        { id: "C", text: "54321" },
        { id: "D", text: "12345" },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc nào trong lĩnh vực CNTT liên quan đến việc duy trì phần cứng máy tính hoạt động ổn định?",
      options: [
        { id: "A", text: "Quản trị mạng." },
        { id: "B", text: "Phát triển web." },
        { id: "C", text: "Sửa chữa và bảo trì." },
        { id: "D", text: "Chuyên viên bảo mật." },
      ],
      correctOptionId: "C",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hoa muốn chèn liên kết trên trang web cá nhân sao cho khi nhấp vào, liên kết mở trong tab mới. Mã HTML nào sau đây là đúng?",
      options: [
        {
          id: "A",
          text: '<a href="https://info.com"target="_self">Trang của tôi</a>',
        },
        { id: "B", text: '<a href="https://info.com">Trang của tôi</a>' },
        {
          id: "C",
          text: '<a src="https://info.com"target="_blank">Trang của tôi</a>',
        },
        {
          id: "D",
          text: '<a href="https://info.com"target="_blank">Trang của tôi</a>',
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thành tựu nào của AI đã đóng góp cho lĩnh vực tài chính?",
      options: [
        {
          id: "A",
          text: "Phân tích và dự đoán xu hướng thị trường tài chính.",
        },
        {
          id: "B",
          text: "Tạo ra các loại tiền mã hóa mới để thay đổi cách thanh toán truyền thống.",
        },
        { id: "C", text: "Nhận dạng khuôn mặt khi giao dịch." },
        {
          id: "D",
          text: "Thiết kế và triển khai các hệ thống mạng lưới thanh toán trực tuyến.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "Độ dài của địa chỉ MAC là bao nhiêu?",
      options: [
        { id: "A", text: "48 bit." },
        { id: "B", text: "8 bit." },
        { id: "C", text: "24 bit." },
        { id: "D", text: "32 bit." },
      ],
      correctOptionId: "A",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phần tử nào sau đây khai báo thuộc tính border để tạo đường viền bao quanh các ô của bảng?",
      options: [
        { id: "A", text: "table" },
        { id: "B", text: "td" },
        { id: "C", text: "tr" },
        { id: "D", text: "caption" },
      ],
      correctOptionId: "A",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Học sinh lớp 12 của trường THPT A đang tham gia buổi hội thảo hướng nghiệp để chuẩn bị định hướng chọn nghề ngành Công nghệ Thông tin (CNTT) trong tương lai. Mục tiêu nào cần được chú trọng hàng đầu trong buổi hội thảo hướng nghiệp này?",
      options: [
        {
          id: "A",
          text: "Tham gia các buổi trò chuyện giải trí và giao lưu với sinh viên ngành CNTT.",
        },
        {
          id: "B",
          text: "Tạo mối quan hệ với các nhà tuyển dụng và nộp hồ sơ xin việc ngay tại hội thảo.",
        },
        {
          id: "C",
          text: "Tìm hiểu các kĩ năng cần thiết để tiếp cận và thành công trong ngành CNTT.",
        },
        {
          id: "D",
          text: "Thu thập các tài liệu quảng cáo từ các công ty CNTT tham gia hướng nghiệp.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một cửa hàng thời trang trên đường Trần Phú lắp camera tích hợp AI để theo dõi khách hàng. Chủ cửa hàng muốn biết ứng dụng nào sau đây không phải là ví dụ của nhận dạng khuôn mặt bằng AI?",
      options: [
        { id: "A", text: "Dự đoán xu hướng thời trang." },
        { id: "B", text: "Xác định nhân vật trong video." },
        { id: "C", text: "Mở khóa điện thoại." },
        { id: "D", text: "Kiểm tra An ninh." },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phòng thư viện của Trường B có một modem tích hợp router kết nối Internet và một switch đơn chức năng có 12 cổng LAN. Trong đó, một cổng LAN của switch được dùng để nổi với modem/router. Vậy số lượng máy tính có thể kết nối Internet cùng lúc là bao nhiêu?",
      options: [
        { id: "A", text: "11" },
        { id: "B", text: "12" },
        { id: "C", text: "2" },
        { id: "D", text: "1" },
      ],
      correctOptionId: "A",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content: "Cách nào để đặt kiểu chữ vừa in đậm vừa in nghiêng sau đây?",
      options: [
        { id: "A", text: "<bold><i>" },
        { id: "B", text: "<strong><italic>" },
        { id: "C", text: 'style="font-weight:bold; font-style: italic;"' },
        { id: "D", text: "<bold><italic>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong quá trình nhận dạng chữ viết tay năng lực trí tuệ nào sau đây được thể hiện rõ nhất?",
      options: [
        {
          id: "A",
          text: "Chuyển đổi hình ảnh chữ viết tay thành dữ liệu văn bản.",
        },
        {
          id: "B",
          text: "Có thể suy luận và hiểu ý nghĩa sâu xa của các từ hoặc câu viết tay.",
        },
        {
          id: "C",
          text: "Có khả năng vận động để mô phỏng chữ viết tay của con người.",
        },
        {
          id: "D",
          text: "Có khả năng nhận thức để phân biệt và hiểu các kí tự viết tay, bất kể phong cách viêt.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chức năng nào sau đây là một trong những chức năng của Access Point?",
      options: [
        { id: "A", text: "Kết nối các mạng LAN với nhau." },
        { id: "B", text: "Thiết lập mạng WAN." },
        {
          id: "C",
          text: "Cung cấp điểm truy cập không dây cho các thiết bị đầu cuối của người dùng.",
        },
        { id: "D", text: "Thiết lập mạng LAN." },
      ],
      correctOptionId: "C",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuật ngữ AI được chính thức đề cập một cách khoa học vào năm nào?",
      options: [
        { id: "A", text: "1950." },
        { id: "B", text: "1956." },
        { id: "C", text: "1970." },
        { id: "D", text: "1957." },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị mạng được cung cấp bởi ISP để kết nối với Internet là gì?",
      options: [
        { id: "A", text: "Access Point." },
        { id: "B", text: "Router." },
        { id: "C", text: "Switch." },
        { id: "D", text: "Modem." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây phản ánh đúng vai trò trọng tâm của chuyền viên CNTT trong lĩnh vực Giáo dục hiện nay?",
      options: [
        {
          id: "A",
          text: "Thiết kế chương trình giảng dạy trực tuyến cho học sinh.",
        },
        {
          id: "B",
          text: "Phát triển và quản lí hệ thống quản lí học trực tuyến.",
        },
        {
          id: "C",
          text: "Quản lí các cuộc họp và hội thảo trực tuyến cho giáo viên.",
        },
        {
          id: "D",
          text: "Cài đặt và bảo trì hệ thống phần cứng cho các lớp học.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho khai báo thuộc tính CSS như sau:\n<style>\n.highlight { color: blue; }\n.notice { color: red; }\np { color: green; }\n</style>\nVới đoạn HTML:\n<p class="highlight notice">Chúc bạn thi tốt!</p>\nKhi hiển thị, màu chữ của đoạn văn bản sẽ là gì?',
      options: [
        { id: "A", text: "Trình duyệt báo lỗi vì phần tử có nhiều class" },
        { id: "B", text: "Xanh dương (blue)" },
        { id: "C", text: "Đỏ (red)" },
        { id: "D", text: "Xanh lá (green)" },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã sau:\n<ul>\n<li> Thiết kế trang web\n<ol>\n<li> Tài liệu HTML </li>\n<li> Tài liệu CSS </li>\n</ol>\n</li>\n<li> Tài liệu văn phòng\n<ol>\n<li> Tài liệu Word </li>\n<li> Tài liệu Excel </li>\n</ol>\n</li>\n</ul>\nTrên trình duyệt sẽ hiển thị kết quả nào dưới đây nếu thay cặp thẻ <ul></ul> thành cặp <ol></ol> và ngược lại?",
      options: [
        {
          id: "A",
          text: "1. Thiết kế trang Web\n◦ Tài liệu HTML\n◦ Tài liệu CSS\n2. Tài liệu văn phòng\n◦ Tài liệu Word\n◦ Tài liệu Excel",
        },
        {
          id: "B",
          text: "1. Thiết kế trang Web\n1. Tài liệu HTML\n2. Tài liệu CSS\n2. Tài liệu văn phòng\n1. Tài liệu Word\n2. Tài liệu Excel",
        },
        {
          id: "C",
          text: "• Thiết kế trang Web\n◦ Tài liệu HTML\n◦ Tài liệu CSS\n• Tài liệu văn phòng\n◦ Tài liệu Word\n◦ Tài liệu Excel",
        },
        {
          id: "D",
          text: "• Thiết kế trang Web\n1. Tài liệu HTML\n2. Tài liệu CSS\n• Tài liệu văn phòng\n1. Tài liệu Word\n2. Tài liệu Excel",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.TRUE_FALSE,
      content:
        'Để truy cập vào các chức năng của trang web giáo dục trực tuyến, người dùng cần đăng ký tài khoản. Nhân viên phát triển web đã viết đoạn mã HTML sau để tạo biểu mẫu đăng ký:\n<form>\n<label for="username">Tài Khoản </label>\n<input type="text"id="username"name="username"> <br>\n<label for="email">Email</label>\n<input type="email"id="email"name="email"> <br>\n<label for="password">Mật khẩu</label>\n<input type="password"id="password"name="password"> <br>\n<input type="submit"value="Đăng ký">\n</form>\nSau đây là một số nhận định về đoạn mã trên:',
      subQuestions: [
        {
          id: "a",
          text: "Kiểu dữ liệu cho tài khoản là text.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Khi nhập dữ liệu vào ô mật khẩu, dữ liệu sẽ được hiển thị rõ ràng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Phương thức gửi dữ liệu mặc định là phương thức POST.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Thẻ <input> của ô email yêu cầu người dùng nhập chính xác định dạng thư điện tử nhưng không kiểm tra liệu địa chỉ đó có tồn tại hay không.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Cho một CSDL quản lí các thuê bao điện thoại của một công ty viễn thông gồm 3 bảng: LOAI_THUE_BAO (Loai_TB: Loại thuê bao có mã khác nhau; Gia_Cuoc: giá cước); THUE_BAO (Sdt: số điện thoại là duy nhất Ho_ten: Họ tên); CUOC_GOI (Ma_CG: Mã cước gọi, Ngay_goi: Ngày gọi, Thoi_gian: Thời gian). Hãy đưa ra thông tin các cuộc gọi được thực hiện trong ngày 18/7/2025. Kết quả bao gồm: Mã cước gọi; số điện thoại; họ và tên; thời gian gọi và được sắp xếp theo thứ tự giảm dần. Sau đây là ý kiến của học sinh về câu hỏi trên. Em hãy xác định câu đúng sai.",
      subQuestions: [
        {
          id: "a",
          text: "Các trường thông tin cần đưa ra trong truy vấn có trong hai bảng LOAI_THUE_BAO; CUOC_GOI nên cả hai bảng này có trong truy vấn.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Hai bảng LOAI_THUE_BAO; CUOC_GOI được liên kết bằng hai khóa LOAI_THUE_BAO.Sdt = CUOC_GOI.Sdt.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: 'Thiết lập điều kiện lọc cho truy vấn bằng biểu thức: CUOC_GOI.Ngay_goi = "18/7/2025".',
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Thiết lập thứ tự kết quả theo giá trị cột Thoi_gian bằng từ khóa DESC.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        'Bạn H muốn tạo một biểu mẫu đăng ký trên trang web chia sẻ tài liệu của mình. Bạn đã khai báo CSS và code HTML như sau:... (form action="" ...). Bạn H đã đưa ra một số nhận định sau về cách trình duyệt web sẽ hiển thị đoạn code HTML trên. Nhận định nào là đúng, nhận định nào sai?',
      subQuestions: [
        {
          id: "a",
          text: "Biểu mẫu có chiều rộng tổng cộng 300px và được đặt chính giữa trang web theo chiều ngang.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Nút Đăng kí được tô màu xanh, khi nháy chọn để gửi nội dung thì màu nền của nút Đăng kí sẽ chuyển sang màu đỏ.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Khi nháy chọn vào các ô nhập dữ liệu, màu nền của ô vẫn được giữ như cũ.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Biểu mẫu của bạn H cho phép chọn nhiều lớp khác nhau trong một lần đăng kí.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        'Một học sinh viết câu lệnh SELECT để truy cập bảng HOCSINH (Ma_so, Ho_ten, Tuoi, Gioi_tinh) như sau: SELECT * FROM HOCSINH WHERE (Tuoi>=15 AND Tuoi <18) OR Gioi_tinh = "Nữ" ORDER BY Tuoi DESC. Sau đó, một số bạn đưa ra các phát biểu dưới đây về kết quả của câu lệnh này.',
      subQuestions: [
        {
          id: "a",
          text: "Chọn tất cả các trường (cột) của bảng HOCSINH.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Chọn các bản ghi (hàng) có tuổi từ 15 đến 18.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Các bản ghi trong kết quả có thứ tự giảm dần theo tuổi.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Tất cả các nữ sinh đều có trong kết quả.",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
