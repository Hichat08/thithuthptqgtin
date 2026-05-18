import { Question, QuestionType } from "./types";

export const EXAM_SET_8 = {
  id: 8,
  title:
    "ĐỀ THI THỬ SỐ 4 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây đúng về khái niệm trí tuệ nhân tạo?",
      options: [
        {
          id: "A",
          text: "Phần mềm được dùng để chơi trò giải trí trên máy tính.",
        },
        {
          id: "B",
          text: "Hệ thống máy tính thực hiện các tác vụ trí tuệ như con người.",
        },
        { id: "C", text: "Phương tiện kết nối các thiết bị trong mạng." },
        {
          id: "D",
          text: "Nền tảng cung cấp dịch vụ lưu trữ dữ liệu trực tuyến.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong tương lai, AI sẽ không gây ra mối lo ngại nào sau đây?",
      options: [
        {
          id: "A",
          text: "Dữ liệu huấn luyện sai lệch gây ra các vấn đề về đạo đức.",
        },
        {
          id: "B",
          text: "Tạo ra các cuộc tấn công mạng thông minh và khó bị phát hiện.",
        },
        {
          id: "C",
          text: "Tạo ra các lo ngại về quyền riêng tư và dữ liệu cá nhân.",
        },
        { id: "D", text: "Thay thế hoàn toàn các công việc hiện tại." },
      ],
      correctOptionId: "D",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây mô tả đúng khả năng nhận thức của trí tuệ nhân tạo?",
      options: [
        {
          id: "A",
          text: "Phân tích và hiểu ngữ nghĩa từ dữ liệu đầu vào.",
        },
        {
          id: "B",
          text: "Đọc, hiểu, diễn giải, tạo ra văn bản tương tự như con người.",
        },
        { id: "C", text: "Trích rút thông tin từ dữ liệu để học." },
        {
          id: "D",
          text: "Vận dụng tri thức và logic để đưa ra quyết định.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một trường học sử dụng hệ thống trí tuệ nhân tạo để hỗ trợ giảng dạy. Phương án nào sau đây là cách áp dụng AI nhằm nâng cao hiệu quả học tập của học sinh?",
      options: [
        {
          id: "A",
          text: "Phân tích kết quả học tập để cá nhân hóa nội dung.",
        },
        { id: "B", text: "Thống kê số lượng học sinh không làm bài tập." },
        {
          id: "C",
          text: "Tạo ngân hàng đề thi trắc nghiệm thủ công từ tài liệu nhập vào.",
        },
        { id: "D", text: "Giáo viên gửi bài tập về nhà qua mail." },
      ],
      correctOptionId: "A",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content: `Đoạn chương trình sau giải quyết bài toán nào?\n\nPython:\ndef dem(s):\n  d = 0\n  for tu in s.split():\n    d += 1\n  print(d)\n\nC++:\n#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\nvoid dem(const string& s) {\n  istringstream iss(s);\n  string tu;\n  int d = 0;\n  while (iss >> tu) {\n    ++d;\n  }\n  cout << d << endl;\n}\n\nPhương án nào sau đây là kết quả in ra màn hình khi gọi hàm dem("Learning programming is interesting")?`,
      options: [
        { id: "A", text: "0" },
        { id: "B", text: "d" },
        { id: "C", text: "4" },
        { id: "D", text: "1" },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content: "Địa chỉ MAC trong mạng máy tính có vai trò nào sau đây?",
      options: [
        { id: "A", text: "Ngăn chặn sự lây nhiễm của phần mềm độc hại." },
        { id: "B", text: "Xác định vị trí địa lý của thiết bị." },
        { id: "C", text: "Định danh thiết bị trên mạng Internet." },
        { id: "D", text: "Định danh thiết bị trong mạng cục bộ." },
      ],
      correctOptionId: "D",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sau khi chia sẻ máy in trong mạng cục bộ, phương án nào sau đây là đúng?",
      options: [
        {
          id: "A",
          text: "Mỗi máy tính phải kết nối trực tiếp với máy in bằng dây cáp riêng.",
        },
        {
          id: "B",
          text: "Cho phép các máy tính trong mạng sử dụng chung máy in được chia sẻ.",
        },
        {
          id: "C",
          text: "Cho phép lưu trữ các tệp cần in trên máy kết nối trực tiếp với máy in.",
        },
        {
          id: "D",
          text: "Máy in tự động in tất cả các tệp trên những máy tính được kết nối trong mạng.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mobile Hotspot dùng phương thức nào sau đây để cung cấp Internet cho các thiết bị khác?",
      options: [
        {
          id: "A",
          text: "Tạo mạng Wi-Fi từ dữ liệu di động để chia sẻ Internet cho thiết bị khác.",
        },
        {
          id: "B",
          text: "Lưu trữ dữ liệu Internet của các thiết bị khác trên điện thoại.",
        },
        {
          id: "C",
          text: "Tăng cường tốc độ sóng di động của tất cả các thiết bị.",
        },
        {
          id: "D",
          text: "Tự động tải ứng dụng quản lý mạng cho các thiết bị kết nối.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong công ty nhiều phòng ban dùng mạng cục bộ, quản trị viên cần hệ thống chia sẻ tệp bảo mật cao, phân quyền chi tiết và hiệu suất tốt. Phương án nào sau đây phù hợp nhất để thực hiện yêu cầu này?",
      options: [
        {
          id: "A",
          text: "Chia sẻ thư mục trên máy cá nhân, cấp quyền thủ công cho từng người.",
        },
        {
          id: "B",
          text: "Dùng máy chủ tệp chuyên dụng với phân quyền nâng cao và giao thức SMB hoặc NFS.",
        },
        {
          id: "C",
          text: "Chia sẻ qua dịch vụ lưu trữ đám mây miễn phí, không kiểm soát quyền chi tiết.",
        },
        {
          id: "D",
          text: "Cho tất cả nhân viên truy cập ổ đĩa mạng chung, không phân quyền.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi nào sau đây thể hiện sự văn minh khi chia sẻ thông tin trên mạng?",
      options: [
        { id: "A", text: "Chia sẻ tất cả thông tin tìm thấy trên mạng." },
        {
          id: "B",
          text: "Đăng tải tin tức chưa rõ nguồn gốc.",
        },
        {
          id: "C",
          text: "Kiểm chứng thông tin trước khi chia sẻ.",
        },
        {
          id: "D",
          text: "Phát tán các hình ảnh chế nhạo người khác.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cần giữ gìn tính nhân văn khi giao tiếp trong không gian mạng vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Tránh bị xử phạt theo quy định của pháp luật về an ninh mạng.",
        },
        {
          id: "B",
          text: "Thể hiện sự thông minh và hiểu biết của bản thân.",
        },
        {
          id: "C",
          text: "Xây dựng môi trường mạng tích cực, tôn trọng và an toàn.",
        },
        {
          id: "D",
          text: "Tạo ấn tượng tốt với người có ảnh hưởng (KOLs) trên mạng xã hội.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan và Minh đang làm việc chung một dự án, nhưng lại sinh sống ở 2 quốc gia khác nhau có sự chênh lệch về múi giờ. Biện pháp giao tiếp nào sau đây phù hợp nhất để duy trì hiệu quả công việc?",
      options: [
        {
          id: "A",
          text: "Gọi video vào bất kỳ lúc nào để đảm bảo trao đổi nhanh chóng.",
        },
        {
          id: "B",
          text: "Gửi tin nhắn thoại cho nhau và chờ người nghe phản hồi lúc có thời gian.",
        },
        {
          id: "C",
          text: "Dùng email hoặc ứng dụng làm việc để trao đổi và hẹn thời gian phù hợp.",
        },
        {
          id: "D",
          text: "Đợi đến khi có thể gặp trực tiếp để tiếp tục công việc.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc nào sau đây thuộc nhóm nghề dịch vụ trong ngành Công nghệ thông tin?",
      options: [
        { id: "A", text: "Viết phần mềm kế toán cho doanh nghiệp." },
        { id: "B", text: "Bảo mật hệ thống mạng cho doanh nghiệp." },
        {
          id: "C",
          text: "Hướng dẫn người dùng xử lí lỗi phần mềm thông dụng.",
        },
        {
          id: "D",
          text: "Thiết kế và triển khai giao diện ứng dụng di động.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm nghề quản trị hệ thống cần có hiểu biết về hệ điều hành và mạng máy tính vì lí do nào sau đây?",
      options: [
        {
          id: "A",
          text: "Họ cần phát triển trò chơi điện tử đưa lên mạng.",
        },
        {
          id: "B",
          text: "Công việc của họ gắn với quản lí, vận hành hệ thống máy tính và mạng.",
        },
        {
          id: "C",
          text: "Họ có nhu cầu thiết kế giao diện phần mềm chạy trên hệ điều hành.",
        },
        {
          id: "D",
          text: "Họ phải thiết kế trang web và tạo nội dung quảng cáo đưa lên mạng.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong quá trình quản trị một hệ thống máy chủ lớn, kỹ thuật viên phát hiện nhiều lỗi bảo mật tiềm ẩn do việc cập nhật phần mềm không đồng bộ giữa các máy chủ. Phương án nào sau đây là cách hiệu quả nhất để xử lí và ngăn ngừa các rủi ro bảo mật phát sinh?",
      options: [
        {
          id: "A",
          text: "Cập nhật thủ công từng máy, không theo lịch, để tránh gián đoạn hoạt động.",
        },
        {
          id: "B",
          text: "Thiết lập cập nhật tự động, đồng bộ theo lịch và giám sát thường xuyên.",
        },
        {
          id: "C",
          text: "Tạm ngưng toàn bộ hệ thống để cập nhật cùng lúc.",
        },
        {
          id: "D",
          text: "Bỏ qua cập nhật vì sợ gây lỗi không tương thích.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây dùng để tạo danh sách định nghĩa (definition list)?",
      options: [
        { id: "A", text: "<dl>." },
        { id: "B", text: "<ul>." },
        { id: "C", text: "<li>." },
        { id: "D", text: "<ol>." },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content: "Mã HTML nào sau đây tạo liên kết tới Trang chủ?",
      options: [
        { id: "A", text: '<a href="index.html">Trang chủ</a>.' },
        { id: "B", text: "<link index.html>Trang chủ</link>." },
        { id: "C", text: '<href="index.html">Trang chủ</href>.' },
        { id: "D", text: '<a src="index.html">Trang chủ</a>.' },
      ],
      correctOptionId: "A",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đúng về vai trò của CSS trong thiết kế web?",
      options: [
        { id: "A", text: "Định dạng và thiết kế giao diện trang web." },
        { id: "B", text: "Viết và soạn thảo nội dung cho trang web." },
        { id: "C", text: "Xây dựng và quản lý cơ sở dữ liệu." },
        { id: "D", text: "Gửi và nhận dữ liệu từ máy chủ web." },
      ],
      correctOptionId: "A",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây căn lề nội dung văn bản trong một phần tử theo chiều ngang?",
      options: [
        { id: "A", text: "color." },
        { id: "B", text: "text-align." },
        { id: "C", text: "padding." },
        { id: "D", text: "margintop." },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ <head> quan trọng và cần có trong tài liệu HTML vì lí do nào sau đây?",
      options: [
        { id: "A", text: "Hiển thị nội dung chính trên trang web." },
        { id: "B", text: "Định dạng giao diện cho toàn bộ trang web." },
        {
          id: "C",
          text: "Cho phép tạo liên kết đến các phần khác trong trang.",
        },
        {
          id: "D",
          text: "Chứa thông tin cấu hình, giúp trình duyệt hiểu và xử lý trang web.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong tài liệu HTML, thẻ <form> có vai trò nào sau đây?",
      options: [
        {
          id: "A",
          text: "Hiển thị các nút và liên kết cho người dùng thao tác.",
        },
        {
          id: "B",
          text: "Định nghĩa bố cục cho nội dung trang web.",
        },
        { id: "C", text: "Thu thập dữ liệu từ người dùng." },
        { id: "D", text: "Tổ chức dữ liệu dưới dạng bảng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan đang thiết kế một trang web và muốn nhóm một số đoạn văn, hình ảnh lại với nhau để dễ dàng áp dụng kiểu CSS. Phương án nào sau đây phù hợp để Lan sử dụng?",
      options: [
        {
          id: "A",
          text: "Dùng thẻ <a> tạo liên kết cho các đoạn văn và hình ảnh.",
        },
        {
          id: "B",
          text: "Dùng thẻ <table> bố trí đoạn văn bản và hình ảnh dạng bảng.",
        },
        {
          id: "C",
          text: "Dùng thẻ <div> tạo vùng chứa nhóm các đoạn văn và hình ảnh.",
        },
        {
          id: "D",
          text: "Dùng thẻ <span> tạo bố cục cho các nhóm đoạn văn và hình ảnh.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi muốn thiết lập hiệu ứng chuyển đổi mượt mà (transition) cho thuộc tính màu nền và kích thước chữ của một nút khi người dùng di chuột vào, đoạn mã CSS nào sau đây thực hiện đúng và hiệu quả nhất?",
      options: [
        {
          id: "A",
          text: "button {\n  transition: background-color 0.3s ease, font-size 0.3s ease;\n}\nbutton:hover {\n  background-color: #3498db;\n  font-size: 18px;\n}",
        },
        {
          id: "B",
          text: "button:hover {\n  transition: background-color 0.3s ease, font-size 0.3s ease;\n  background-color: #3498db;\n  font-size: 18px;\n}",
        },
        {
          id: "C",
          text: "button {\n  transition-property: all;\n  transition-duration: 0.3s;\n}\nbutton:hover {\n  background-color: #3498db;\n  font-size: 18px;\n}",
        },
        {
          id: "D",
          text: "button {\n  transition: background-color;\n  transition-duration: 0.3s;\n}\nbutton:hover {\n  background-color: #3498db;\n  font-size: 18px;\n}",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lan đang tạo biểu mẫu thu thập dữ liệu trên trang web HTML. Khi người dùng chọn vào hộp kiểm, Lan muốn nền của hộp kiểm đổi sang màu xanh (blue). Mã CSS nào sau đây phù hợp để thực hiện điều này?",
      options: [
        {
          id: "A",
          text: 'input[type="checkbox"] {\n  background-color: blue;\n}',
        },
        {
          id: "B",
          text: 'input[type="checkbox"]:checked {\n  accent-color: blue;\n}',
        },
        {
          id: "C",
          text: 'input[type="checkbox"]:hover {\n  accent-color: blue;\n}',
        },
        {
          id: "D",
          text: 'input[type="checkbox"]:checked {\n  background-color: blue;\n}',
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một công ty thiết lập hệ thống mạng LAN gồm nhiều máy tính kết nối qua Switch, đồng thời sử dụng Router để kết nối mạng LAN với Internet. Gần đây, công ty bổ sung thêm Access Point nhằm hỗ trợ nhân viên kết nối Wifi. Tuy nhiên, vào giờ cao điểm, tốc độ truy cập Internet bị chậm lại. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Router định tuyến gói tin từ mạng LAN ra Internet.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Switch truyền dữ liệu không dây tới điện thoại.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Access Point kết nối thiết bị không dây vào mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Tốc độ truy cập mạng chậm do quá tải người dùng, không thể cải thiện.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học lưu trữ thông tin học sinh trong hệ cơ sở dữ liệu (CSDL) quan hệ. Dữ liệu gồm bảng “HocSinh” với các cột như Họ tên, Mã HS, Lớp. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "CSDL quan hệ dùng bảng để tổ chức dữ liệu.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Hệ CSDL quan hệ không cho phép tạo ràng buộc giữa các bảng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Để khai thác dữ liệu học sinh từ hệ CSDL quan hệ có thể dùng ngôn ngữ truy vấn SQL.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Không thể tạo thêm bảng “Diem” vì chỉ được phép có một bảng trong hệ thống.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content: "Cho chương trình sử dụng ngăn xếp. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Ngăn xếp hoạt động theo nguyên tắc LIFO.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Khi thực hiện pop(), phần tử bị loại bỏ là 10.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Độ phức tạp thời gian của push() và pop() là O(1).",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Chương trình trên có kết quả in ra màn hình là 30.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh xây dựng hệ thống phát hiện tin giả bằng học máy. Dữ liệu gồm tiêu đề, nội dung, nguồn tin. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Dữ liệu chất lượng cao giúp mô hình hoạt động tốt hơn.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Bỏ qua tiền xử lí không ảnh hưởng nhiều đến kết quả.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Trích xuất đặc trưng làm mất hoàn toàn thông tin của văn bản.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Cần chia dữ liệu thành tập huấn luyện và kiểm thử.",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
