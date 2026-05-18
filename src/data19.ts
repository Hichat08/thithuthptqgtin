import { Question, QuestionType } from "./types";

export const EXAM_SET_20 = {
  id: 20,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO HẢI PHÒNG - ĐỀ CHÍNH THỨC - ĐỀ THI THỬ TỐT NGHIỆP THPT (Đợt 2) Môn thi: TIN HỌC",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Em muốn trở thành người sửa chữa và bảo trì máy tính, nên lựa chọn ngành học nào sau đây ở bậc học tiếp theo?",
      options: [
        { id: "A", text: "Bảo mật hệ thống thông tin." },
        { id: "B", text: "Công nghệ kỹ thuật phần cứng." },
        { id: "C", text: "Mạng máy tính và truyền thông." },
        { id: "D", text: "Thiết kế đồ họa." },
      ],
      correctOptionId: "B",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn mã HTML nào tạo liên kết đến website https://www.google.com với văn bản hiển thị là “Google”?",
      options: [
        {
          id: "A",
          text: '<a href="https://www.google.com">Google</a>',
        },
        {
          id: "B",
          text: '<link href="https://www.google.com">Google</link>',
        },
        {
          id: "C",
          text: '<a name="https://www.google.com"> $n">Goog~le</a>$',
        },
        {
          id: "D",
          text: '<a url="https://www.google.com"> $zom">Google</a>$',
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thẻ nào dùng để tạo một liên kết đến trang web khác?",
      options: [
        { id: "A", text: "<link>" },
        { id: "B", text: "<img>" },
        { id: "C", text: "<a>" },
        { id: "D", text: "<ul>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây mô tả chính xác nhất về giao thức IP?",
      options: [
        {
          id: "A",
          text: "Giao thức IP thay đổi liên tục, không có khả năng định tuyến và có thể hoạt động không cần môi trường mạng.",
        },
        {
          id: "B",
          text: "Đảm bảo việc truyền dữ liệu, chia nhỏ gói dữ liệu theo từng ứng dụng một cách chính xác, tin cậy và hiệu quả.",
        },
        {
          id: "C",
          text: "Quy định cách thiết lập địa chỉ cho các thiết bị tham gia mạng và cách dẫn đường các gói dữ liệu theo địa chỉ từ thiết bị gửi đến thiết bị nhận.",
        },
        {
          id: "D",
          text: "Cho phép gửi một yêu cầu đến một máy tính, một thiết bị mạng hoặc một ứng dụng trên mạng để lấy thông tin phản hồi.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content: "Hoạt động nào dưới đây không có sự tác động của AI?",
      options: [
        { id: "A", text: "Dự đoán nhu cầu tiêu dùng sản phẩm." },
        { id: "B", text: "An ninh và nhận diện khuôn mặt." },
        { id: "C", text: "Trợ lý ảo và quản lý thông minh." },
        { id: "D", text: "Sắp xếp các sản phẩm theo mức giá." },
      ],
      correctOptionId: "D",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính nào dưới đây được sử dụng để chỉ định URL của nguồn nội dung sẽ được nhúng trong một <iframe>?",
      options: [
        { id: "A", text: "href" },
        { id: "B", text: "src" },
        { id: "C", text: "link" },
        { id: "D", text: "url" },
      ],
      correctOptionId: "B",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Viết một trang web có tệp iframe.html để chèn vào đó một khung nội tuyến có kích thước 600 × 400 pixel. Trong khung nội tuyến ta hiển thị nội dung của trang web CLB.html. Đoạn mã để thực hiện việc này trong tệp iframe.html là: ",
      options: [
        {
          id: "A",
          text: '<iframe url="CLB.html"$vidth="600"$ height ="400"></ iframe>',
        },
        {
          id: "B",
          text: '<iframe src="iframe.html"$width="600"$ height="400"></iframe>',
        },
        {
          id: "C",
          text: '<iframe src="CLB.html"$width="400"$ $ight="600"></i~frame>$',
        },
        {
          id: "D",
          text: '<iframe src="CLB.html"width $n="600"$ height ="400"> </ iframe>',
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Tính năng nào dưới đây không phải của Trợ lí ảo?",
      options: [
        { id: "A", text: "Khả năng nhận diện giọng nói." },
        { id: "B", text: "Hỗ trợ nhiều tính năng thông minh." },
        { id: "C", text: "Tư duy độc lập, sáng tạo ý tưởng mới lạ." },
        { id: "D", text: "Học hỏi từ người dùng thiết bị." },
      ],
      correctOptionId: "C",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ và cho biết kết quả của đoạn chương trình sau: n = 4, y = 1, for i in range (1,n+1): y *= i. Giá trị của y sau vòng lặp là: ",
      options: [
        { id: "A", text: "16" },
        { id: "B", text: "4" },
        { id: "C", text: "12" },
        { id: "D", text: "24" },
      ],
      correctOptionId: "D",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào dưới đây có chức năng chuyển đổi tín hiệu số thành tín hiệu tương tự và ngược lại?",
      options: [
        { id: "A", text: "Modem." },
        { id: "B", text: "Switch." },
        { id: "C", text: "Hub." },
        { id: "D", text: "Router." },
      ],
      correctOptionId: "A",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ <br> được sử dụng để làm gì?",
      options: [
        { id: "A", text: "In nghiêng văn bản." },
        { id: "B", text: "Gạch chân văn bản." },
        { id: "C", text: "Ngắt dòng trong văn bản." },
        { id: "D", text: "In đậm văn bản." },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chương trình đào tạo ngành CNTT thường gồm những môn học nào sau đây?",
      options: [
        { id: "A", text: "Lập trình, Cấu trúc dữ liệu, Hệ thống thông tin." },
        {
          id: "B",
          text: "Tin học văn phòng, Thiết kế chế bản, Quản lí dự án.",
        },
        {
          id: "C",
          text: "Kế toán, Quản trị doanh nghiệp, Quảng cáo trực tuyến.",
        },
        { id: "D", text: "Văn học, Lịch sử, Địa lí, Phân tích dữ liệu." },
      ],
      correctOptionId: "A",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho câu lệnh HTML: <p style="color: red"> <em> Chuc em dat ket qua cao. </em></p>. Sau khi thực hiện câu lệnh cho kết quả nào dưới đây?',
      options: [
        {
          id: "A",
          text: "Chữ màu đỏ và in đậm cho văn bản: Chuc em dat ket qua cao.",
        },
        {
          id: "B",
          text: "Chữ màu đỏ và gạch chân cho văn bản: Chuc em dat ket qua cao.",
        },
        {
          id: "C",
          text: "Chữ có bóng đổ và màu đỏ cho văn bản: Chuc em dat ket qua cao.",
        },
        {
          id: "D",
          text: "Chữ màu đỏ và in nghiêng cho văn bản: Chuc em dat ket qua cao.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Ngành học nào sau đây không liên quan tới nhóm nghề quản trị trong lĩnh vực công nghệ thông tin?",
      options: [
        { id: "A", text: "Hệ thống thông tin." },
        { id: "B", text: "Công nghệ phần mềm." },
        { id: "C", text: "An ninh mạng." },
        { id: "D", text: "Mạng máy tính." },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content: "Địa chỉ URL nào dưới đây là đúng?",
      options: [
        { id: "A", text: "htt://hust.edu.vn" },
        { id: "B", text: "Html://hust.edu.vn" },
        { id: "C", text: "htp://hust.edu.vn" },
        { id: "D", text: "https://hust.edu.vn" },
      ],
      correctOptionId: "D",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "“Hệ thống chẩn đoán y tế dựa trên AI có thể dựa vào tri thức về các triệu chứng và bệnh lí để đưa ra chẩn đoán về tình trạng sức khỏe của người bệnh” thuộc khả năng nào dưới đây của AI?",
      options: [
        { id: "A", text: "Khả năng học." },
        { id: "B", text: "Khả năng giải quyết vấn đề." },
        { id: "C", text: "Khả năng nhận thức." },
        { id: "D", text: "Khả năng suy luận." },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Phương án nào dưới đây nêu đúng kết quả của đoạn lệnh HTML sau: <ol type="1"><li>Toán</li><li>Lý</li><li>Tin</li></ol>',
      options: [
        { id: "A", text: "a. Toán b. Lý c. Tin" },
        { id: "B", text: "1. Toán 2. Lí 3. Tin" },
        { id: "C", text: "I. Toán II. Lý III. Tin" },
        { id: "D", text: "1. Toán 2. Lý 3. Tin" },
      ],
      correctOptionId: "D",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây nêu đúng khái niệm trí tuệ nhân tạo?",
      options: [
        {
          id: "A",
          text: "Trí tuệ nhân tạo luôn chính xác và có thể thay thế hoàn toàn con người.",
        },
        {
          id: "B",
          text: "Hoạt động máy tính giao tiếp được với con người bằng ngôn ngữ tự nhiên.",
        },
        {
          id: "C",
          text: "Khả năng của máy tính có thể làm những công việc mang tính trí tuệ của con người.",
        },
        {
          id: "D",
          text: "AI có thể suy nghĩ, cảm nhận, có đạo đức hoặc tự nhận thức như con người.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi hệ thống máy tính bị tấn công DdoS (Distributed Denial of Service – tấn công từ chối dịch vụ phân tán), một quản trị viên mạng sẽ phải làm gì sau đây?",
      options: [
        {
          id: "A",
          text: "Cập nhật thường xuyên trạng thái hoạt động cá nhân trên mạng xã hội.",
        },
        {
          id: "B",
          text: "Triển khai các biện pháp bảo mật và khôi phục dịch vụ của hệ thống.",
        },
        {
          id: "C",
          text: "Tắt toàn bộ hệ thống để ngăn chặn các cuộc tấn công từ DdoS.",
        },
        {
          id: "D",
          text: "Thay đổi mật khẩu của tất cả người dùng trong hệ thống máy tính.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bạn An lên thiết kế phòng mạng có 50 máy tính, muốn kết nối các máy tính đó thành mạng LAN, An nên dùng thiết bị nào sau đây?",
      options: [
        { id: "A", text: "Modem." },
        { id: "B", text: "Accsess point." },
        { id: "C", text: "Router." },
        { id: "D", text: "Switch." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content: "CSS là viết tắt của cụm từ nào dưới đây?",
      options: [
        { id: "A", text: "Creative Style Sheets." },
        { id: "B", text: "Computer Style Sheets." },
        { id: "C", text: "Cascading Style Sheets." },
        { id: "D", text: "Colorful Style Sheets." },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trường hợp nào dưới đây không thể hiện việc ứng xử nhân văn trong không gian mạng?",
      options: [
        {
          id: "A",
          text: "Sử dụng ngôn từ khiếm nhã khi tham gia bình luận, phê phán bạn trên mạng xã hội.",
        },
        {
          id: "B",
          text: "Chia sẻ thông tin chính xác và đáng tin cậy, tránh lan truyền thông tin sai lệch.",
        },
        {
          id: "C",
          text: "Không phát tán thông tin riêng tư của người khác mà không có sự cho phép của họ.",
        },
        {
          id: "D",
          text: "Không gửi các nội dung thư rác không liên quan đến nội dung chính của cuộc trò chuyện.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, khi thiết lập bảng thẻ nào dưới đây dùng để khai báo hàng?",
      options: [
        { id: "A", text: "<td></td>" },
        { id: "B", text: "<table></table>" },
        { id: "C", text: "<th></th>" },
        { id: "D", text: "<tr></tr>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ nào dưới đây là định dạng tiêu đề bé nhất trong một trang html?",
      options: [
        { id: "A", text: "h1" },
        { id: "B", text: "h6" },
        { id: "C", text: "head" },
        { id: "D", text: "html" },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để giúp học sinh tham gia khảo sát diện rộng của Bộ giáo dục tại một trường THPT XYZ, nhà trường có trang bị cho phòng Tin học gồm một số máy tính bàn, Modem, router và switch để học sinh kết nối mạng internet tham gia khảo sát có thể bằng máy tính bàn của trường hoặc có thể dùng máy tính laptop cá nhân mang đến.",
      subQuestions: [
        {
          id: "a",
          text: "Học sinh tham gia khảo sát kết nối máy tính qua switch để dùng chung Internet, mạng trên được gọi là mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Bạn An dùng máy tính cá nhân cắm cáp Ethernet vào modem và truy cập Internet ổn định, máy của An đang thuộc mạng LAN.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Một số học sinh phát hiện máy tính (laptop) của mình khi kết nối vào Internet ở trường có địa chỉ MAC không trùng (khác) với địa chỉ MAC khi kết nối vào Internet ở nhà.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Máy tính trong mạng LAN có IP khác nhau nhưng vẫn cùng mạng nếu chúng thuộc cùng dải mạng (phù hợp subnet mask).",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để phục vụ công tác tuyển sinh vào lớp 10, Sở Giáo dục và Đào tạo quản lý dữ liệu thông qua hệ thống đăng ký nguyện vọng trực tuyến. Cơ sở dữ liệu của hệ thống được tổ chức gồm 3 bảng TRUONG, HOC SINH và DANG KY.",
      subQuestions: [
        {
          id: "a",
          text: "Trường maTruong là khóa chính của bảng TRUONG, đồng thời đóng vai trò là khóa ngoài trong bảng DANG KY để tạo liên kết giữa hai bảng này.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để đảm bảo mỗi học sinh có thể đăng ký nhiều nguyện vọng vào các trường khác nhau, bảng DANG KY chỉ cần thiết lập duy nhất trường maHS làm khóa chính.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Để thống kê tổng số nguyện vọng đã đăng ký vào từng trường, người quản trị chỉ cần khai thác dữ liệu duy nhất từ bảng TRUONG là đủ thông tin.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để kết xuất báo cáo gồm tenTruong, chiTieu và số lượng nguyện vọng 1 của trường đó, cần thực hiện các bước: chọn TRUONG.tenTruong, TRUONG.chiTieu, DANG KY.thuTuNV; liên kết TRUONG với DANG KY qua maTruong; chọn DANG KY.thuTuNV = 1.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong dự án xây dựng một hệ thống website 'Hướng nghiệp' 4.0 dành cho học sinh cuối cấp, một nhóm học sinh thảo luận về các thao tác kỹ thuật và đưa ra ý kiến sau:",
      subQuestions: [
        {
          id: "a",
          text: "Phần mềm tạo trang web cung cấp sẵn các mẫu bố cục giúp người dùng nhanh chóng thiết lập cấu trúc khung cho các trang thành phần trong hệ thống website.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để thay đổi nội dung hình ảnh trên trang 'Danh mục nghề nghiệp', người dùng bắt buộc phải xóa bỏ trang cũ và tạo lại một trang mới hoàn toàn để cập nhật ảnh.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Tại trang 'Bản đồ số các trường đại học', việc sử dụng mã nhúng từ dịch vụ bản đồ trực tuyến giúp trang web có khả năng tương tác thời gian thực mà không cần lưu trữ toàn bộ dữ liệu bản đồ trên máy chủ của website.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi thực hiện kiểm thử trên các giao diện thiết bị khác nhau, nếu nội dung văn bản bị văng khỏi khung hình trên điện thoại di động, người dùng chỉ cần điều chỉnh phông chữ ở chế độ xem máy tính là nội dung trên điện thoại sẽ tự động cân đối mà không cần kiểm tra lại.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong nỗ lực hiện thực hóa chuyển đổi số an sinh xã hội, chính quyền địa phương xây dựng hệ thống quản lý việc cấp phát các gói hỗ trợ. Cơ sở dữ liệu được thiết lập gồm 3 bảng CONG DAN, GOI HO TRO và CAP PHAT.",
      subQuestions: [
        {
          id: "a",
          text: "Việc sử dụng trường maDD làm khóa chính cho bảng CONG DAN giúp hệ thống liên thông dữ liệu dễ dàng với các cơ sở dữ liệu quốc gia về dân cư mà không sợ bị trùng lặp.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để tối ưu dung lượng lưu trữ, trong bảng CAP PHAT chỉ nên lưu trường maDD và maGoi làm các khóa ngoài, không cần thiết phải lưu thêm trường hoTen hay tenGoi.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Trong bảng CAP PHAT, nếu chỉ thiết lập một mình trường maDD làm khóa chính thì hệ thống vẫn cho phép một người dân có thể nhận được nhiều gói hỗ trợ khác nhau tại các thời điểm khác nhau.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để đưa ra thông tin gồm họ tên công dân, tên gói hỗ trợ và giá trị gói mà người đó đã nhận, có thể thực hiện truy vấn SQL sau: SELECT CONG DAN.hoTen, GOI HO TRO.tenGoi, GOI HO TRO.giaTri FROM (CONG DAN INNER JOIN CAP PHAT ON CONG DAN.maDD CAP PHAT.maDD) INNER JOIN GOI HO TRO ON CONG DAN.maDD GOI HO TRO.maGoi.",
          correctAnswer: false,
        },
      ],
    },
  ],
};
