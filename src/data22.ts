import { Question, QuestionType } from "./types";

export const EXAM_SET_23 = {
  id: 23,
  title:
    "SỞ GD&ĐT SƠN LA - ĐỀ CHÍNH THỨC KỲ THI THỬ TỐT NGHIỆP THPT LẦN THỨ BA NĂM HỌC 2025 - 2026 - MÔN: TIN HỌC (Mã đề: 0501)",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cần chọn thẻ nào sau đây để tạo một danh sách trong đó các mục được đánh số thứ tự bắt đầu bằng chữ cái A?",
      options: [
        { id: "A", text: '<li type="A">' },
        { id: "B", text: '<ul type="A">' },
        { id: "C", text: '<dl type="A">' },
        { id: "D", text: '<ol type="A">' },
      ],
      correctOptionId: "D",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây được sử dụng để tạo khoảng cách giữa nội dung và viền của một phần tử?",
      options: [
        { id: "A", text: "border." },
        { id: "B", text: "padding." },
        { id: "C", text: "margin." },
        { id: "D", text: "spacing." },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content: "Lĩnh vực nào sau đây thuộc ứng dụng của trí tuệ nhân tạo?",
      options: [
        {
          id: "A",
          text: "Gửi thư điện tử qua hệ thống mạng nội bộ đơn giản.",
        },
        {
          id: "B",
          text: "Lưu trữ dữ liệu trên thiết bị USB cá nhân thông thường.",
        },
        {
          id: "C",
          text: "Soạn thảo văn bản bằng phần mềm xử lí văn bản cơ bản.",
        },
        {
          id: "D",
          text: "Nhận dạng khuôn mặt trong hệ thống an ninh thông minh.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ <iframe> trong HTML được sử dụng để làm công việc nào dưới đây?",
      options: [
        {
          id: "A",
          text: "Tạo một vùng nhập liệu cho người dùng trên trang.",
        },
        {
          id: "B",
          text: "Tạo một khung để hiển thị hình ảnh trong trang web.",
        },
        {
          id: "C",
          text: "Chèn một đoạn video trực tiếp từ máy tính cá nhân.",
        },
        {
          id: "D",
          text: "Nhúng nội dung từ trang web khác vào trang hiện tại.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một doanh nghiệp bị tấn công mạng làm gián đoạn hệ thống. Sau khi khắc phục tạm thời, công ty cần: Phân tích nguyên nhân và lỗ hổng bảo mật; kiểm tra, cấu hình lại hệ thống mạng để hoạt động ổn định; hỗ trợ nhân viên xử lí các lỗi phát sinh trên máy tính cá nhân. Công việc này cần sự phối hợp của nhóm nào?",
      options: [
        {
          id: "A",
          text: "Kỹ sư an toàn thông tin, quản trị mạng và kỹ thuật viên CNTT cùng phối hợp xử lí.",
        },
        {
          id: "B",
          text: "Chỉ cần kỹ thuật viên CNTT vì chủ yếu xử lí các sự cố phát sinh trên thiết bị cá nhân.",
        },
        {
          id: "C",
          text: "Cần kỹ sư an toàn thông tin vì tập trung xử lí các vấn đề tấn công và bảo mật.",
        },
        {
          id: "D",
          text: "Chỉ cần quản trị mạng vì có thể đảm nhiệm hầu hết các công việc liên quan trong hệ thống.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi truy cập một trang web, người dùng thấy xuất hiện biểu tượng ổ khóa trên thanh địa chỉ của trình duyệt và được yêu cầu đăng nhập. Điều này cho thấy điều gì?",
      options: [
        {
          id: "A",
          text: "Trang web chỉ cho phép truy cập từ mạng nội bộ.",
        },
        {
          id: "B",
          text: "Dữ liệu không được truyền qua Internet công cộng.",
        },
        {
          id: "C",
          text: "Trình duyệt đang sử dụng giao thức FTP để tải dữ liệu.",
        },
        {
          id: "D",
          text: "Kết nối đang sử dụng HTTPS với cơ chế mã hóa bảo mật.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Vai trò của con người trong việc phát triển AI là gì?",
      options: [
        {
          id: "A",
          text: "Loại bỏ hoàn toàn dữ liệu khỏi quá trình xử lý của hệ thống AI.",
        },
        {
          id: "B",
          text: "Chỉ sử dụng hệ thống AI mà không cần tham gia giám sát quá trình vận hành.",
        },
        {
          id: "C",
          text: "Thiết kế, huấn luyện và kiểm soát hệ thống để đảm bảo hoạt động hiệu quả và an toàn.",
        },
        {
          id: "D",
          text: "Thay thế toàn bộ hệ thống máy tính truyền thống bằng các mô hình AI mới.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao thức nào được dùng để gửi thư điện tử?",
      options: [
        { id: "A", text: "HTTP." },
        { id: "B", text: "FTP." },
        { id: "C", text: "HTTPS." },
        { id: "D", text: "SMTP." },
      ],
      correctOptionId: "D",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cần sử dụng CSS để tạo ra một khung/hộp chứa các phần tử với các đặc điểm sau: Hộp có kích thước cố định với chiều rộng 300px và chiều cao 200px; đường viền của hộp là đường nét đứt (dotted), màu đen (#000000) và độ rộng là 2px; nội dung bên trong có khoảng cách với đường viền là 20px. Đoạn mã CSS nào sau đây thực hiện được yêu cầu trên?",
      options: [
        {
          id: "A",
          text: ".box{width: 300px; height: 200px; border: 2px margin: 20px;}",
        },
        {
          id: "B",
          text: ".box{width: 200px; height: 300px; border-color: dotted #000000; padding: 20px;}",
        },
        {
          id: "C",
          text: ".box{width: 300px; height: 200px; border: 2px dotted #000000; padding: 20px;}",
        },
        {
          id: "D",
          text: ".box{width: 200px; height: 300px; border-style: 2px dotted #000000; padding: 20px;}",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một người đảm nhiệm việc kiểm tra, bảo trì thiết bị và hỗ trợ người dùng trong công ty. Công việc này thuộc nghề nào?",
      options: [
        {
          id: "A",
          text: "Quản trị mạng chịu trách nhiệm thiết kế và vận hành hệ thống mạng.",
        },
        {
          id: "B",
          text: "Kỹ thuật viên CNTT phụ trách hỗ trợ và xử lí các vấn đề kỹ thuật cơ bản.",
        },
        {
          id: "C",
          text: "Lập trình viên chuyên phát triển và kiểm thử phần mềm ứng dụng.",
        },
        {
          id: "D",
          text: "Kỹ sư an toàn thông tin chuyên nghiên cứu và phát hiện lỗ hổng bảo mật.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một cuộc tranh luận trực tuyến, một người liên tục dùng lời lẽ công kích cá nhân thay vì trao đổi nội dung. Nếu tiếp tục tham gia, em nên xử lí như thế nào?",
      options: [
        {
          id: "A",
          text: "Công khai thông tin cá nhân của người đó để phản đối hành vi không phù hợp.",
        },
        {
          id: "B",
          text: "Giữ thái độ bình tĩnh, tập trung vào nội dung và tránh đáp trả bằng lời lẽ tiêu cực.",
        },
        {
          id: "C",
          text: "Phản ứng lại bằng cách sử dụng ngôn từ tương tự để bảo vệ quan điểm cá nhân.",
        },
        {
          id: "D",
          text: "Đăng bài chỉ trích người đó trên trang cá nhân để thu hút sự chú ý.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong giờ hướng nghiệp, giáo viên mô tả một công việc: theo dõi hệ thống để phát hiện tấn công mạng, phân tích nguy cơ rò rỉ dữ liệu và đề xuất biện pháp bảo vệ. Công việc này gắn với nghề nào?",
      options: [
        {
          id: "A",
          text: "Quản trị mạng phụ trách cài đặt và duy trì hoạt động của hệ thống.",
        },
        {
          id: "B",
          text: "Kỹ thuật viên CNTT hỗ trợ sửa chữa thiết bị và phần mềm cơ bản.",
        },
        {
          id: "C",
          text: "Kỹ sư an toàn thông tin chuyên phát hiện và xử lí các nguy cơ bảo mật.",
        },
        {
          id: "D",
          text: "Nhân viên nhập liệu thực hiện việc cập nhật thông tin vào hệ thống.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi nào sau đây thể hiện tính nhân văn khi giao tiếp trên mạng?",
      options: [
        {
          id: "A",
          text: "Đăng tải thông tin chưa kiểm chứng để thu hút sự chú ý của cộng đồng.",
        },
        {
          id: "B",
          text: "Sử dụng lời lẽ công kích khi không đồng ý với quan điểm của người khác.",
        },
        {
          id: "C",
          text: "Chia sẻ thông tin cá nhân của người khác mà chưa được sự đồng ý.",
        },
        {
          id: "D",
          text: "Tôn trọng ý kiến người khác và sử dụng ngôn ngữ lịch sự khi trao đổi.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một hệ thống AI nhận diện giọng nói được huấn luyện và kiểm thử, cho kết quả chính xác cao với người lớn nhưng giảm đáng kể khi áp dụng cho trẻ em trong thực tế. Nguyên nhân cốt lõi nào dưới đây là hợp lí nhất cho nhận định trên?",
      options: [
        {
          id: "A",
          text: "Tập dữ liệu huấn luyện chưa phản ánh đầy đủ đặc điểm giọng nói của trẻ em.",
        },
        {
          id: "B",
          text: "Thuật toán học máy không phù hợp với các bài toán nhận dạng tiếng nói.",
        },
        {
          id: "C",
          text: "Khả năng xử lí của thiết bị chưa đáp ứng được yêu cầu phân tích âm thanh.",
        },
        {
          id: "D",
          text: "Điều kiện kết nối mạng làm ảnh hưởng đến chất lượng tín hiệu đầu vào.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã HTML sau tạo danh sách một số điểm du lịch phổ biến của Sơn La. Cho biết biểu tượng hoặc chữ số nào dưới đây gắn với mục có dòng chữ 'Mộc Châu'?",
      options: [
        { id: "A", text: "Chữ số 4." },
        { id: "B", text: "Ô vuông màu đen." },
        { id: "C", text: "Chữ số 3." },
        { id: "D", text: "Dấu chấm tròn màu đen." },
      ],
      correctOptionId: "A",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content: "Dữ liệu đóng vai trò như thế nào trong hệ thống AI?",
      options: [
        {
          id: "A",
          text: "Là cơ sở để huấn luyện và giúp mô hình đưa ra dự đoán chính xác.",
        },
        {
          id: "B",
          text: "Là thành phần không cần thiết trong quá trình xây dựng hệ thống.",
        },
        {
          id: "C",
          text: "Chỉ dùng để lưu trữ mà không ảnh hưởng đến kết quả xử lí.",
        },
        {
          id: "D",
          text: "Chỉ hỗ trợ hiển thị thông tin mà không liên quan đến học máy.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ thống DNS (Domain Name System) đóng vai trò quan trọng khi truy cập Internet, vì:",
      options: [
        {
          id: "A",
          text: "thực hiện việc chuyển đổi tên miền dễ nhớ sang địa chỉ IP để thiết bị kết nối.",
        },
        {
          id: "B",
          text: "phụ trách truyền nội dung trang web từ máy chủ đến trình duyệt người dùng.",
        },
        {
          id: "C",
          text: "đảm nhiệm chức năng mã hóa dữ liệu nhằm tăng mức độ an toàn khi truyền tải.",
        },
        {
          id: "D",
          text: "hỗ trợ gửi và nhận thư điện tử giữa các thiết bị trong hệ thống mạng.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Câu lệnh CSS nào sau đây thực hiện định dạng tiêu đề lớn nhất <h1> là phông chữ Arial và có màu xanh dương?",
      options: [
        { id: "A", text: "h1 {font-family: Arial; color : blue; }" },
        { id: "B", text: "h1 {font: Arial; color : blue; }" },
        { id: "C", text: "h1 {font-family: Arial; font-color : blue; }" },
        { id: "D", text: "h1 {font-family: Arial; text-color : blue; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một học sinh nhận được tin nhắn từ tài khoản có tên giống với dịch vụ quen thuộc, yêu cầu cung cấp mã xác thực để 'tránh bị khóa tài khoản'. Tin nhắn có giọng điệu khẩn cấp và đe dọa mất quyền truy cập. Nếu gặp tình huống này, cách xử lí nào thể hiện hiểu biết đầy đủ?",
      options: [
        {
          id: "A",
          text: "Gửi mã cho bạn bè để hỏi ý kiến rồi mới quyết định có nên cung cấp hay không.",
        },
        {
          id: "B",
          text: "Không cung cấp mã, kiểm tra lại qua kênh chính thức và cảnh giác với dấu hiệu giả mạo.",
        },
        {
          id: "C",
          text: "Đăng nội dung tin nhắn lên mạng xã hội để tham khảo ý kiến từ nhiều người.",
        },
        {
          id: "D",
          text: "Cung cấp mã theo yêu cầu để tránh nguy cơ bị khóa tài khoản như nội dung cảnh báo.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã lệnh CSS sau: p{ color : red ; font – size : 14px } p{ color : yellow ; font – size : 13px }. Phương án nào nêu đúng kết quả hiển thị văn bản ở dòng 8 khi chạy đoạn mã trên?",
      options: [
        { id: "A", text: "Chữ có màu đỏ và kích thước hiển thị là 13px." },
        {
          id: "B",
          text: "Nội dung có màu vàng và kích thước hiển thị là 13px.",
        },
        {
          id: "C",
          text: "Nội dung có màu vàng và kích thước hiển thị là 14px.",
        },
        { id: "D", text: "Chữ có màu đỏ và kích thước hiển thị là 14px." },
      ],
      correctOptionId: "B",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giao thức nào sau đây được sử dụng để nhận thư điện tử từ máy chủ về thiết bị người dùng?",
      options: [
        { id: "A", text: "FTP." },
        { id: "B", text: "POP3." },
        { id: "C", text: "IP." },
        { id: "D", text: "HTTP." },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo form cho học sinh đăng kí thi học sinh giỏi, cô giáo đã sử dụng ngôn ngữ HTML để viết, với quy định 'mỗi học sinh chỉ được chọn một môn thi duy nhất trong ba môn Toán học, Tin học và ngoại ngữ'. Đoạn mã lệnh nào sau đây thực hiện công việc này?",
      options: [
        {
          id: "A",
          text: '<input type="radio" name="toan" >Toán học<br><input type="radio" name="tin" >Tin học<br><input type="radio" name="nn" >Ngoại ngữ<br>',
        },
        {
          id: "B",
          text: '<input type="checkbox" name="monthi" value="toan"> Toán học<br><input type="checkbox" name="monthi" value="tin"> Tin học<br><input type="checkbox" name="monthi" value="nn"> Ngoại ngữ<br>',
        },
        {
          id: "C",
          text: '<input type="radio" name="monthi" value="toan"> Toán học<br><input type="radio" name="monthi" value="tin"> Tin học<br><input type="radio" name="monthi" value="nn"> Ngoại ngữ<br>',
        },
        {
          id: "D",
          text: '<input type="radio" name="Toan" value="toan"> Toán học<br><input type="radio" name="Tinhoc" value="tin"> Tin học<br><input type="radio" name="nn" value="nn"> Ngoại ngữ<br>',
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Xét đoạn chương trình sau và cho biết kết quả in ra màn hình sau khi chạy chương trình: a = [1, 4, 7, 8, 10, 15, 18, 19, 20]; s = 0; for i in a: if i%2==0: s+=i; print(s).",
      options: [
        { id: "A", text: "70." },
        { id: "B", text: "105." },
        { id: "C", text: "60." },
        { id: "D", text: "42." },
      ],
      correctOptionId: "C",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Kí tự nào sau đây được dùng để hiển thị cho một thẻ đóng trong HTML?",
      options: [
        { id: "A", text: "^" },
        { id: "B", text: "\\" },
        { id: "C", text: "/" },
        { id: "D", text: "*" },
      ],
      correctOptionId: "C",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong một dự án học tập, nhóm học sinh lớp 10 sử dụng mạng máy tính để tìm kiếm tài liệu, làm việc nhóm qua các nền tảng trực tuyến và nộp bài qua hệ thống học tập. Nhờ đó, tiến độ công việc được cải thiện rõ rệt. Tuy nhiên, một số thành viên lại phụ thuộc hoàn toàn vào tài liệu trên mạng, ít kiểm chứng nguồn tin, thậm chí sao chép nội dung và dành nhiều thời gian truy cập các trang giải trí không liên quan.",
      subQuestions: [
        {
          id: "a",
          text: "Mạng máy tính giúp nâng cao hiệu quả học tập, nhưng chỉ khi người dùng biết chọn lọc và sử dụng thông tin một cách có trách nhiệm.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Vì mạng máy tính giúp cải thiện tiến độ làm việc nên mọi cách sử dụng mạng trong học tập đều mang lại lợi ích.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Việc phụ thuộc hoàn toàn vào tài liệu trên mạng có thể làm giảm khả năng tư duy độc lập và đánh giá thông tin.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Nếu sử dụng mạng máy tính trong môi trường học tập thì không cần quan tâm đến độ tin cậy của nguồn thông tin.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học xây dựng hệ thống quản lý học sinh bằng cơ sở dữ liệu để phục vụ việc lưu trữ thông tin, theo dõi kết quả học tập và quản lý lớp học. Mỗi học sinh chỉ thuộc một lớp, nhưng mỗi lớp có thể có nhiều học sinh.",
      subQuestions: [
        {
          id: "a",
          text: "Mỗi học sinh cần có mã học sinh duy nhất để phân biệt với các học sinh khác.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Việc lưu lặp lại thông tin lớp học trong bảng học sinh không gây ảnh hưởng gì đến tính toàn vẹn dữ liệu.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Quan hệ giữa lớp học và học sinh là quan hệ một – nhiều.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Không cần sử dụng khóa ngoại vẫn có thể đảm bảo mối liên hệ chính xác giữa các bảng trong cơ sở dữ liệu.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh được giao nhiệm vụ thiết kế website giới thiệu câu lạc bộ của trường. Website dự kiến gồm các trang như: trang chủ, giới thiệu, hoạt động và liên hệ. Trong quá trình thực hiện, nhóm mong muốn website có giao diện rõ ràng, dễ sử dụng và hiển thị tốt trên nhiều thiết bị khác nhau như máy tính và điện thoại.",
      subQuestions: [
        {
          id: "a",
          text: "Website cần có bố cục rõ ràng, dễ nhìn để người dùng thuận tiện khi truy cập và tìm kiếm thông tin.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Chỉ cần thiết kế website hiển thị tốt trên máy tính, không cần quan tâm đến các thiết bị khác.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Việc sử dụng CSS giúp định dạng giao diện và làm cho website trở nên đẹp hơn.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Không cần tối ưu hình ảnh vì sử dụng hình ảnh chất lượng cao luôn tốt hơn cho website.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trung tâm đào tạo xây dựng cơ sở dữ liệu để quản lí thông tin học viên, khóa học và kết quả học tập. Cơ sở dữ liệu gồm các bảng sau: hocvien(idHocvien, hoten, namsinh, lop) khoahoc(idKhoahoc, tenkhoa) ketqua(idHocvien, idKhoahoc, lanthi, diem) Trung tâm muốn khai thác dữ liệu để xem kết quả học tập và tính điểm trung bình của từng học viên. Trong quá trình thảo luận, một số bạn học sinh đưa ra các nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Cần sử dụng phép JOIN giữa bảng hocvien và ketqua theo idHocvien để hiển thị họ tên học viên kèm điểm.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để tính điểm trung bình của mỗi học viên có thể sử dụng câu lệnh: SELECT hocvien.hoten, AVG(ketqua.diem) AS diemTB FROM hocvien INNER JOIN ketqua ON hocvien.idHocvien = ketqua.idHocvien GROUP BY hocvien.idHocvien, hocvien.hoten;",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Để tính điểm trung bình và xếp hạng học viên từ cao xuống thấp sử dụng: SELECT hocvien.hoten, AVG(ketqua.diem) AS diemTB FROM hocvien INNER JOIN ketqua ON hocvien.idHocvien = ketqua.idHocvien GROUP BY hocvien.hoten ORDER BY diemTB DESC;",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Chỉ cần sử dụng bảng khoahoc là có thể tính được điểm trung bình của học viên.",
          correctAnswer: false,
        },
      ],
    },
  ],
};

export default EXAM_SET_23;
