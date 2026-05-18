import { Question, QuestionType } from "./types";

export const EXAM_SET_10 = {
  id: 10,
  title:
    "ĐỀ THI THỬ SỐ 6 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho mẫu định dạng CSS sau: <style> h1 {color: red; font-style: italic;} h1 {color: blue;} </style> Phương án nào dưới đây nêu đúng kết quả định dạng của mẫu định dạng trên các phần tử h1?",
      options: [
        { id: "A", text: "Các phần tử h1 có chữ màu đỏ, in nghiêng." },
        { id: "B", text: "Các phần tử h1 có chữ màu xanh, in đậm." },
        {
          id: "C",
          text: "Các phần tử h1 có chữ màu xanh, in nghiêng, không in đậm.",
        },
        {
          id: "D",
          text: "Các phần tử h1 có chữ màu xanh, in nghiêng, in đậm.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Câu lệnh sau có kết quả hiển thị trên màn hình là gì? for i in range(10): if i%2 == 0: print(i,end = " ") for ( int i = 0; i < 10; i++) if ( i%2 == 0 ) cout << i << " " ;',
      options: [
        { id: "A", text: "0 2 4 6 8 10" },
        { id: "B", text: "0 2 4 6 8" },
        { id: "C", text: "1 3 5 7 9" },
        { id: "D", text: "0 1 2 3 4 5 6 7 8 9 10" },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Trong HTML, khi tạo biểu mẫu sự khác biệt giữa type="password" và type="text" của thẻ <input> là gì?',
      options: [
        {
          id: "A",
          text: 'type="password" tự động mã hóa dữ liệu khi gửi đi; type="text" không mã hoá dữ liệu.',
        },
        {
          id: "B",
          text: 'type="password" chỉ có thể sử dụng trong trình duyệt Google Chrome.',
        },
        {
          id: "C",
          text: 'type="password" chỉ để nhập số; type="text" chỉ để nhập chữ cái.',
        },
        {
          id: "D",
          text: 'type="password" hiển thị kí tự nhập vào dưới dạng dấu chấm hoặc dấu sao; type="text" hiển thị nội dung nhập vào bình thường.',
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi tham gia giao tiếp trên không gian mạng, em nên tránh những hành vi nào sau đây?",
      options: [
        {
          id: "A",
          text: "Tôn trọng sự khác biệt trong quan điểm của mỗi người.",
        },
        {
          id: "B",
          text: "Lan tỏa những hình ảnh đẹp về quê hương, đất nước.",
        },
        { id: "C", text: "Chia sẻ những tin đồn chưa có kiểm chứng." },
        {
          id: "D",
          text: "Thảo luận về các vấn đề trong xã hội một cách có văn hóa.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau: def f(a,b): return a**b T = f(2,4) + f(5,3) print(T) int f(int a, int b) {return std::pow(a, b); } int main() { int T = f(2, 4) + f(5, 3); std::cout << T; return 0; } Phương án nào dưới đây là giá trị của biến T?",
      options: [
        { id: "A", text: "23" },
        { id: "B", text: "251" },
        { id: "C", text: "141" },
        { id: "D", text: "259" },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content: "Trong CSS, thuộc tính nào sau đây để thiết lập màu sắc chữ?",
      options: [
        { id: "A", text: "color" },
        { id: "B", text: "font" },
        { id: "C", text: "font-color" },
        { id: "D", text: "background-color" },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Mô tả nào sau đây là đúng về chức năng của thiết bị Router?",
      options: [
        {
          id: "A",
          text: "Chuyển tiếp dữ liệu giữa các mạng LAN khác nhau và định tuyến gói tin đến đúng đích.",
        },
        {
          id: "B",
          text: "Kết nối các thiết bị trong cùng một LAN nhưng không thể kết nối với mạng Internet.",
        },
        {
          id: "C",
          text: "Lưu trữ dữ liệu tạm thời và cung cấp quyền truy cập từ xa vào mạng nội bộ.",
        },
        {
          id: "D",
          text: "Mã hóa dữ liệu để bảo mật thông tin khi truyền trên mạng.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, những thẻ nào sau đây dùng để định dạng văn bản in đậm?",
      options: [
        { id: "A", text: "<i> và <u>" },
        { id: "B", text: "<b> và <strong>" },
        { id: "C", text: "<b> và <u>" },
        { id: "D", text: "<strong> và <em>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây mô tả sự khác biệt chính giữa giao thức TCP và IP?",
      options: [
        {
          id: "A",
          text: "TCP chịu trách nhiệm chia nhỏ dữ liệu thành các gói tin, trong khi IP định tuyến các gói tin đến đúng đích.",
        },
        {
          id: "B",
          text: "IP chịu trách nhiệm chia nhỏ dữ liệu thành các gói tin đánh dấu địa chỉ cho chúng, trong khi TCP định tuyến các gói tin đến đúng đích.",
        },
        {
          id: "C",
          text: "IP đảm bảo dữ liệu được truyền nguyên vẹn, còn TCP chỉ định địa chỉ cho thiết bị đích.",
        },
        {
          id: "D",
          text: "TCP xác định địa chỉ IP của thiết bị trong mạng, còn IP kiểm soát tốc độ truyền dữ liệu.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Biến a trong câu lệnh sau có kiểu dữ liệu gì? Viết bằng NNLT Python và C++: a = int(8.6) int a int(8.6);",
      options: [
        { id: "A", text: "Kiểu số nguyên" },
        { id: "B", text: "Kiểu kí tự" },
        { id: "C", text: "Kiểu logic" },
        { id: "D", text: "Kiểu số thực" },
      ],
      correctOptionId: "A",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content: "Đoạn mã HTML nào dưới đây cho kết quả hiển thị như hình ảnh?",
      options: [
        {
          id: "A",
          text: '<form action="login">\n<label for="password">Mật khẩu:</label>\n<input type="text">\n</form>',
        },
        {
          id: "B",
          text: '<form action="login">\n<label for="password" Mật khẩu:>\n<input type="pasword">\n</form>',
        },
        {
          id: "C",
          text: '<form action="login">\n<label for="password">Mật khẩu:</label>\n<input type="password">\n</form>',
        },
        {
          id: "D",
          text: '<form>\n<label for="password" Mật khẩu:>\n<input type="text">\n</form>',
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây là kết quả của phép toán 17 % 2?",
      options: [
        { id: "A", text: "15" },
        { id: "B", text: "1" },
        { id: "C", text: "8" },
        { id: "D", text: "8.5" },
      ],
      correctOptionId: "B",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây mô tả đúng sự thay đổi của lĩnh vực giao thông vận tải dựa trên thành tựu của AI ở Việt Nam hiện nay?",
      options: [
        {
          id: "A",
          text: "AI chỉ được sử dụng trong các hệ thống giao thông công cộng, không ảnh hưởng đến phương tiện cá nhân.",
        },
        {
          id: "B",
          text: "AI thay thế hoàn toàn con người trong việc lái xe, loại bỏ mọi tai nạn giao thông.",
        },
        {
          id: "C",
          text: "AI không có vai trò quan trọng trong giao thông vì con người vẫn là yếu tố quyết định chính.",
        },
        {
          id: "D",
          text: "AI giúp con người lái xe an toàn hơn bằng cách cung cấp thông tin giao thông theo thời gian thực.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo đường viền màu xanh, nét liền, dày 1px và cỡ chữ 13px cho toàn bộ nội dung văn bản, cách khai báo mẫu định dạng CSS nào sau đây là chính xác?",
      options: [
        {
          id: "A",
          text: "body {border: 1px solid blue; font-size: 13px}",
        },
        {
          id: "B",
          text: "body {border solid, blue, 1px; font-weight: 13px}",
        },
        {
          id: "C",
          text: "body {border 1px solid blue; font-size: 13px}",
        },
        {
          id: "D",
          text: "body {border: 1px dashed blue; font-size: 13px}",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một trường đại học muốn nâng cao hiệu quả của hệ thống quản lí dữ liệu sinh viên. Họ nên thuê chuyên viên nào để tối ưu hoá hệ thống dữ liệu?",
      options: [
        { id: "A", text: "Nhân viên hỗ trợ kĩ thuật sửa chữa máy tính." },
        { id: "B", text: "Chuyên viên quản trị cơ sở dữ liệu." },
        { id: "C", text: "Lập trình đồ hoạ máy tính." },
        {
          id: "D",
          text: "Chuyên gia an ninh mạng tập trung vào bảo vệ hệ thống khỏi hacker.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một lớp học cần cung cấp dịch vụ Internet không dây (WLAN) cho học sinh và giáo viên sử dụng. Để đảm bảo mạng hoạt động được, thiết bị mạng nào sau đây là cần thiết nhất?",
      options: [
        {
          id: "A",
          text: "Bộ lặp tín hiệu (Repeater), máy in và bộ lưu điện (UPS).",
        },
        { id: "B", text: "Máy tính, cáp truyền thông và webcam." },
        {
          id: "C",
          text: "Bộ chia tín hiệu (Hub), máy chủ và cáp truyền thông.",
        },
        {
          id: "D",
          text: "Bộ định tuyến (Router), điểm truy cập không dây (Access Point) và cáp truyền thông.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào dưới đây thể hiện tính nhân văn khi kêu gọi bạn bè tham gia bình chọn cho cá nhân trong một cuộc thi hùng biện trực tuyến?",
      options: [
        { id: "A", text: "Bình luận tiêu cực vào bài thi của đối thủ." },
        {
          id: "B",
          text: "Đăng bài viết lên mạng xã hội, chia sẻ link bình chọn để bạn bè tự nguyện ủng hộ.",
        },
        {
          id: "C",
          text: "Nhắn tin nhiều lần cho mọi người nhờ bình chọn.",
        },
        {
          id: "D",
          text: "Tạo nhiều tài khoản ảo để tự bình chọn cho bản thân.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đâu là hành vi ứng xử chưa thể hiện tính nhân văn khi giao tiếp trong không gian mạng?",
      options: [
        { id: "A", text: "Chê bai, công kích việc làm của người khác." },
        {
          id: "B",
          text: "Bình tĩnh lắng nghe và thấu hiểu những khó khăn mà đối phương đang gặp phải.",
        },
        {
          id: "C",
          text: "Tôn trọng quyền riêng tư và quan điểm cá nhân của người khác.",
        },
        { id: "D", text: "Sử dụng ngôn từ đúng mực trong giao tiếp." },
      ],
      correctOptionId: "A",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ nào sau đây được sử dụng để tạo danh sách không có thứ tự trong HTML?",
      options: [
        { id: "A", text: "<ol>" },
        { id: "B", text: "<li>" },
        { id: "C", text: "<dl>" },
        { id: "D", text: "<ul>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây nêu đúng về Trí tuệ nhân tạo (AI)?",
      options: [
        {
          id: "A",
          text: "Một loại máy tính thông minh có thể thực hiện các nhiệm vụ giống như con người.",
        },
        {
          id: "B",
          text: "Một loại thuật toán thông minh cho phép máy tính tư duy như con người.",
        },
        {
          id: "C",
          text: "Một loại phần mềm giúp máy tính có thể thực hiện các hành vi thông minh.",
        },
        {
          id: "D",
          text: "Khả năng của máy tính có thể làm những công việc mang tính trí tuệ của con người.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, phương án nào sau đây để tạo liên kết đến trang web của Sở Giáo dục và Đào tạo Hà Nội có địa chỉ https://hanoi.edu.vn?",
      options: [
        {
          id: "A",
          text: '<a href = "https://hanoi.edu.vn">Sở Giáo dục và Đào tạo Hà Nội</a>',
        },
        {
          id: "B",
          text: '<a url = "https://hanoi.edu.vn">Sở Giáo dục và Đào tạo Hà Nội</a>',
        },
        {
          id: "C",
          text: '<a link = "https://hanoi.edu.vn">Sở Giáo dục và Đào tạo Hà Nội</a>',
        },
        {
          id: "D",
          text: '<a src = "https://hanoi.edu.vn">Sở Giáo dục và Đào tạo Hà Nội</a>',
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một vị trí việc làm yêu cầu: biết thiết kế, lắp đặt và quản trị được hệ thống mạng máy tính và đảm bảo hệ thống làm việc hiệu quả, bảo mật và an toàn. Vị trí việc làm này thuộc nhóm ngành nghề nào sau đây?",
      options: [
        { id: "A", text: "Lập trình viên." },
        { id: "B", text: "Nghề sửa chữa bảo trì máy tính." },
        { id: "C", text: "Phân tích và thiết kế." },
        { id: "D", text: "Quản trị và bảo trì hệ thống." },
      ],
      correctOptionId: "D",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mạng xã hội hiện nay sử dụng công nghệ AI để đề xuất những sản phẩm theo nhu cầu của người dùng. Khi sử dụng mạng xã hội đó, người dùng có nguy cơ gì?",
      options: [
        { id: "A", text: "Không mua được sản phẩm theo ý muốn." },
        { id: "B", text: "Ảnh hưởng quyền riêng tư." },
        { id: "C", text: "Áp lực thất nghiệp." },
        { id: "D", text: "Không có bất kì rủi ro." },
      ],
      correctOptionId: "B",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người làm việc trong nhóm nghề quản trị trong ngành công nghệ thông tin cần phải có những kiến thức nào?",
      options: [
        {
          id: "A",
          text: "Kiến thức về thiết kế đồ họa, sáng tạo nội dung số.",
        },
        {
          id: "B",
          text: "Kiến thức về mạng máy tính, bảo mật thông tin, quản lí hệ thống, kiến thức về pháp luật.",
        },
        {
          id: "C",
          text: "Kiến thức về lập trình ứng dụng và lập trình cơ sở dữ liệu.",
        },
        {
          id: "D",
          text: "Kiến thức về ngôn ngữ lập trình, quản trị nhân lực.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Phòng Tin học của một trường THPT có 40 máy tính, 1 máy in được kết nối bằng các thiết bị mạng và cáp truyền thông thành một mạng LAN chưa có mạng Internet. Một số học sinh đưa ra các nhận xét sau:",
      subQuestions: [
        {
          id: "a",
          text: "Cần sử dụng thiết bị Hub hoặc thiết bị Switch để kết nối.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Địa chỉ MAC của mỗi máy tính không thể thay đổi được.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Muốn kết nối Internet, chỉ cần trong mạng có thiết bị có chức năng chuyển đổi tín hiệu số sang tương tự và ngược lại.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Không chia sẻ được các tập tin giữa các máy vì không kết nối Internet.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Nhóm học sinh có kế hoạch xây dựng Website giới thiệu Câu lạc bộ Coding - Robotic, gồm: Trang index.html (Trang chủ): Giới thiệu chung về câu lạc bộ và chứa liên kết tới các trang còn lại. Trang coding.html (Trang Coding): Chia sẻ về lập trình với Python, C ++, ... Trang robotic.html (Trang Robotic): Thông tin về các dự án robot của câu lạc bộ. Tệp styles.css: chứa các mẫu định dạng chung cho các trang web.",
      subQuestions: [
        {
          id: "a",
          text: "Bổ sung câu lệnh ul{font:italic} vào tệp CSS thì các nội dung trong danh sách CHỦ ĐỀ CODING sẽ in nghiêng.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: 'Để áp dụng các mẫu định dạng trong tệp styles.css vào trang coding.html cần sử dụng câu lệnh @import "styles.css"; đặt trong phần tử <style>.',
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Sử dụng thẻ <ul> để tạo danh sách CHỦ ĐỀ CODING.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: 'Sử dụng thẻ <link href="URL"> để tạo liên kết từ trang index.hml tới hai trang coding.html và robotic.html (với URL là địa chỉ trang web cần liên kết).',
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh muốn tạo một trang web giới thiệu một cuộc thi, trong đó cho phép học sinh đăng kí tham gia. Sau khi thảo luận, các thành viên của nhóm đã đưa ra một số nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Các phần mềm hỗ trợ tạo trang web đều cho phép chèn ảnh, video làm sinh động nội dung.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Phần thông tin liên hệ có thể được đặt ở cuối trang hoặc đầu trang web.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Trang web trên cần có biểu mẫu để thu thập thông tin học sinh đăng kí tham gia.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Không thể sửa chữa cấu trúc trang web sau khi xuất bản (publish).",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để quản lí Tour du lịch, công ty đã triển khai xây dựng một phần mềm hỗ trợ có khai thác cơ sở dữ liệu quan hệ gồm các bảng DIADANH và TOUR. Sau khi tìm hiểu dữ liệu của phần mềm, một nhân viên đã đưa ra các nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Để lấy danh sách tên các địa danh có giá tour dưới 5 triệu đồng, cần phải liên kết hai bảng trên thông qua trường idDiadanh.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Trường giatour của bảng TOUR có kiểu dữ liệu là kiểu số.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Trường idDiadanh của bảng TOUR có thể là khóa chính của bảng TOUR.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Khi nhập một địa danh vào cơ sở dữ liệu, dữ liệu về địa danh này sẽ được lưu vào bảng DIADANH.",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
