import { Question, QuestionType } from "./types";

export const EXAM_SET_17 = {
  id: 17,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO NGHỆ AN - ĐỀ THI CHÍNH THỨC KỲ THI THỬ TỐT NGHIỆP THPT NĂM 2026 (Đợt 3) Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi nào sau đây là trái quy định pháp luật khi sử dụng Internet?",
      options: [
        {
          id: "A",
          text: "Xâm nhập trái phép vào tài khoản của người khác để lấy thông tin.",
        },
        {
          id: "B",
          text: "Tìm hiểu và tuân thủ các quy định về an toàn thông tin.",
        },
        {
          id: "C",
          text: "Báo cáo các nội dung xấu, độc hại với cơ quan chức năng.",
        },
        {
          id: "D",
          text: "Sử dụng mạng xã hội để học tập và trao đổi thông tin.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Việc làm nào sau đây góp phần xây dựng tính tích cực trong không gian mạng?",
      options: [
        {
          id: "A",
          text: "Báo cáo nội dung xấu, độc hại cho nền tảng quản lý.",
        },
        { id: "B", text: "Bỏ qua các hành vi bắt nạt trên mạng." },
        {
          id: "C",
          text: "Tham gia tranh cãi bằng lời lẽ công kích cá nhân.",
        },
        {
          id: "D",
          text: "Chia sẻ thông tin sai lệch để thu hút sự chú ý.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Các sàn thương mại điện tử lớn thường xuyên sử dụng công nghệ để tăng trải nghiệm người dùng. Ứng dụng nào sau đây thuộc về trí tuệ nhân tạo?",
      options: [
        {
          id: "A",
          text: "Hệ thống hiển thị danh sách các sản phẩm đang được giảm giá nhiều nhất trong ngày.",
        },
        {
          id: "B",
          text: "Phần mềm quản lý kho hàng tự động cập nhật số lượng sản phẩm sau mỗi đơn hàng.",
        },
        {
          id: "C",
          text: "Hệ thống tự động gợi ý sản phẩm dựa trên sở thích và hành vi tìm kiếm của người dùng.",
        },
        {
          id: "D",
          text: "Chức năng bộ lọc cho phép khách hàng tìm kiếm sản phẩm theo mức giá và khu vực.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thiết bị nào sau đây không phải là thiết bị mạng?",
      options: [
        { id: "A", text: "Router." },
        { id: "B", text: "Webcam." },
        { id: "C", text: "Repeater." },
        { id: "D", text: "Modem." },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong thẻ <link>, khai báo nào sau đây dùng để xác định tệp tin được liên kết đóng vai trò là một tệp định kiểu (CSS)?",
      options: [
        { id: "A", text: 'href="style.css"' },
        { id: "B", text: 'type="text/css"' },
        { id: "C", text: 'rel="stylesheet"' },
        { id: "D", text: 'name="stylesheet"' },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi máy tính kết nối Wi-Fi nhưng không vào được Internet, phương án nào sau đây không phải là bước xử lí ban đầu của kĩ thuật viên Công nghệ thông tin?",
      options: [
        { id: "A", text: "Kiểm tra cấu hình DNS/IP." },
        { id: "B", text: "Khởi động lại bộ phát Wi-Fi." },
        { id: "C", text: "Cài lại hệ điều hành." },
        {
          id: "D",
          text: "Kiểm tra trạng thái kết nối mạng và tín hiệu Wi-Fi.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Điểm khác biệt cơ bản về cơ chế truyền tin giữa Switch và Hub trong mạng LAN là gì?",
      options: [
        {
          id: "A",
          text: "Hub chuyển dữ liệu tới tất cả các cổng, Switch chỉ chuyển tới cổng đích.",
        },
        {
          id: "B",
          text: "Switch dựa vào địa chỉ IP để gửi tin, Hub chuyển tin dựa vào tên thiết bị.",
        },
        {
          id: "C",
          text: "Hub dựa vào địa chỉ MAC để gửi tin, Switch chuyển tin không cần địa chỉ.",
        },
        {
          id: "D",
          text: "Switch chuyển dữ liệu tới tất cả các cổng, Hub chỉ chuyển tới cổng đích.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong khi truyền một tệp tin lớn qua mạng bằng giao thức TCP, nếu bên nhận thông báo rằng một gói tin bị lỗi trong quá trình kiểm tra mã sửa lỗi, để đảm bảo tệp tin không bị hỏng hệ thống sẽ xử lí theo phương án nào sau đây?",
      options: [
        {
          id: "A",
          text: "Bên nhận tự động bỏ qua gói tin lỗi và tiếp tục nhận các gói tiếp theo.",
        },
        {
          id: "B",
          text: "Bên gửi sẽ truyền lại các gói tin bị lỗi hoặc chưa được xác nhận.",
        },
        {
          id: "C",
          text: "Giao thức IP can thiệp để thay đổi lộ trình của tất cả các gói tin còn lại.",
        },
        {
          id: "D",
          text: "Bên gửi tự động dừng toàn bộ quá trình truyền và phát báo lỗi kết nối.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong biểu mẫu HTML, giá trị nào của thuộc tính type sau đây được sử dụng để tạo ô chọn cho phép người dùng chọn nhiều phương án?",
      options: [
        { id: "A", text: '<input type="submit">' },
        { id: "B", text: '<input type="checkbox">' },
        { id: "C", text: '<input type="radio">' },
        { id: "D", text: '<input type="button">' },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong lịch sử phát triển của trí tuệ nhân tạo, hệ thống nào sau đây được coi là một hệ chuyên gia điển hình trong lĩnh vực y tế?",
      options: [
        { id: "A", text: "Người máy Asimo." },
        { id: "B", text: "Hệ chuyên gia MYCIN." },
        { id: "C", text: "Phần mềm AlphaGo." },
        { id: "D", text: "Hệ thống ChatGPT." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giả sử một phần tử đã có đường viền, khai báo nào sau đây được sử dụng để chỉ thay đổi màu sắc của đường viền đó?",
      options: [
        { id: "A", text: "border-color" },
        { id: "B", text: "color" },
        { id: "C", text: "outline-color" },
        { id: "D", text: "background-color" },
      ],
      correctOptionId: "A",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho phần tử HTML: <h1 id="title" class="header active">Chào mừng bạn!</h1> Trong CSS, giả sử không sử dụng từ khóa !important, bộ chọn nào sau đây có độ ưu tiên cao nhất đối với phần tử trên?',
      options: [
        { id: "A", text: ".header" },
        { id: "B", text: "h1" },
        { id: "C", text: ".active" },
        { id: "D", text: "#title" },
      ],
      correctOptionId: "D",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một trường học triển khai hệ thống mạng nội bộ phục vụ quản lí và dạy học, phương án nào dưới đây là lựa chọn phù hợp nhất để đảm bảo hệ thống hoạt động an toàn và hiệu quả?",
      options: [
        {
          id: "A",
          text: "Chỉ đầu tư thiết bị mạng hiện đại mà không cần chú trọng công tác quản lí.",
        },
        {
          id: "B",
          text: "Giao cho từng giáo viên tự quản lí hệ thống mạng trong phạm vi lớp học.",
        },
        {
          id: "C",
          text: "Bố trí nhân sự quản trị để cấu hình, giám sát và đảm bảo an toàn hệ thống mạng.",
        },
        {
          id: "D",
          text: "Thuê dịch vụ quản lí mạng từ bên ngoài nhưng không có cơ chế giám sát và phối hợp với nhà trường.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giả sử trang web có 4 phần tử <section> và muốn chúng hiển thị như 4 cột bằng nhau trên cùng một hàng. Để thực hiện điều này mà vẫn có thể điều chỉnh khoảng cách (padding) và chiều cao của từng cột, cách khai báo CSS nào sau đây là chính xác nhất?",
      options: [
        { id: "A", text: "section { width: 25%; display: inline-block; }" },
        { id: "B", text: "section { width: 25%; display: block; }" },
        { id: "C", text: "section { width: 25%; display: list-item; }" },
        { id: "D", text: "section { width: 25%; display: inline; }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một học sinh nhận được tin nhắn chứa đường link lạ yêu cầu đăng nhập tài khoản học tập để 'cập nhật hệ thống'. Trong tình huống này, hành động nào sau đây là không an toàn trên không gian mạng?",
      options: [
        {
          id: "A",
          text: "Kiểm tra thông báo từ nhà trường qua kênh chính thức.",
        },
        { id: "B", text: "Hỏi ý kiến giáo viên trước khi thực hiện." },
        {
          id: "C",
          text: "Nhấp vào liên kết và đăng nhập tài khoản theo yêu cầu.",
        },
        { id: "D", text: "Không nhấp vào liên kết và xóa tin nhắn." },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây không phải là nguy cơ tiềm ẩn của trí tuệ nhân tạo đối với sự phát triển và ổn định của xã hội?",
      options: [
        {
          id: "A",
          text: "Làm gia tăng khoảng cách về trình độ phát triển công nghệ giữa các quốc gia và các tầng lớp dân cư.",
        },
        {
          id: "B",
          text: "Tăng cường khả năng xử lý và phân tích các tập dữ liệu lớn nhằm hỗ trợ con người ra quyết định chính xác.",
        },
        {
          id: "C",
          text: "Thu thập dữ liệu người dùng trái phép làm ảnh hưởng đến quyền tự do cá nhân và bảo mật thông tin.",
        },
        {
          id: "D",
          text: "Lan truyền thông tin sai lệch hoặc nội dung giả mạo thông qua các công nghệ mô phỏng hình ảnh, giọng nói.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây không phải là một địa chỉ IPv4 hợp lệ về mặt cú pháp?",
      options: [
        { id: "A", text: "172.16.254.1" },
        { id: "B", text: "127.0.0.1" },
        { id: "C", text: "10.0.0.255" },
        { id: "D", text: "192.168.1.256" },
      ],
      correctOptionId: "D",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho hàm f(x) với x = "abbaabba". Khi x = "abbaabba" thì giá trị của hàm f(x) trả về giá trị nào sau đây?',
      options: [
        { id: "A", text: "5" },
        { id: "B", text: "4" },
        { id: "C", text: "7" },
        { id: "D", text: "8" },
      ],
      correctOptionId: "B",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho khai báo CSS: div { border-width: 5px; border-color: red; }. Khi áp dụng đoạn CSS trên cho một phần tử <div>, kết quả hiển thị sẽ là:",
      options: [
        { id: "A", text: "Không hiển thị viền." },
        { id: "B", text: "Hiển thị viền nhưng không có màu." },
        { id: "C", text: "Hiển thị viền đỏ dày 5px." },
        { id: "D", text: "Tự động hiển thị viền dạng solid." },
      ],
      correctOptionId: "C",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong biểu mẫu HTML, mục đích chính của việc sử dụng thuộc tính for trong thẻ <label> là phương án nào sau đây?",
      options: [
        { id: "A", text: "Xác định kiểu dữ liệu của ô nhập trong biểu mẫu." },
        {
          id: "B",
          text: "Thay đổi giao diện hiển thị của phần tử nhập trong biểu mẫu.",
        },
        {
          id: "C",
          text: "Liên kết nhãn với phần tử nhập liệu có id tương ứng.",
        },
        { id: "D", text: "Kiểm tra tính hợp lệ của dữ liệu nhập." },
      ],
      correctOptionId: "C",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đặc trưng nào sau đây của trí tuệ nhân tạo thể hiện hệ thống có khả năng nắm bắt thông tin/tính chất từ dữ liệu đầu vào để rút ra tri thức và điều chỉnh hành vi thực hiện công việc?",
      options: [
        { id: "A", text: "Khả năng học." },
        { id: "B", text: "Khả năng hiểu ngôn ngữ." },
        { id: "C", text: "Khả năng nhận thức." },
        { id: "D", text: "Khả năng suy luận." },
      ],
      correctOptionId: "A",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn chương trình sau: hops = 2, ttl = 15; if hops < 5: while ttl > hops: ttl -= 4; hops += 1. Sau khi thực hiện đoạn chương trình trên, giá trị của biến hops được in ra màn hình là:",
      options: [
        { id: "A", text: "4" },
        { id: "B", text: "2" },
        { id: "C", text: "5" },
        { id: "D", text: "3" },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong buổi tham quan doanh nghiệp công nghệ dành cho học sinh THPT, phương án nào dưới đây là mục tiêu chính của học sinh khi tham gia hoạt động này?",
      options: [
        {
          id: "A",
          text: "Tìm kiếm cơ hội làm thêm bán thời gian tại doanh nghiệp trong buổi tham quan.",
        },
        {
          id: "B",
          text: "Tham gia các hoạt động vui chơi giải trí do doanh nghiệp tổ chức.",
        },
        {
          id: "C",
          text: "Tìm hiểu môi trường làm việc và yêu cầu nghề nghiệp trong lĩnh vực CNTT.",
        },
        {
          id: "D",
          text: "Thu thập các sản phẩm công nghệ miễn phí từ doanh nghiệp tổ chức.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn mã HTML nào sau đây đúng cú pháp để nhúng một trang web vào khung có kích thước 600 × 450 pixel?",
      options: [
        {
          id: "A",
          text: '<iframe href="https://maps.google.com"width="600px"height="450px"></iframe>',
        },
        {
          id: "B",
          text: '<iframe src="https://maps.google.com"width="600"height="450"></iframe>',
        },
        {
          id: "C",
          text: '<iframe href="https://maps.google.com"width="600"height="450"></iframe>',
        },
        {
          id: "D",
          text: '<iframe src="https://maps.google.com"width="600"height="450">',
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trang trại thông minh triển khai hệ thống IoT gồm nhiều cảm biến độ ẩm đất phân bố trên các khu vực khác nhau. Các cảm biến truyền dữ liệu không dây về một bộ định tuyến trung tâm thông qua các Access Point (AP) sử dụng mạng WLAN. Dữ liệu sau đó được gửi tới máy chủ nội bộ hoặc máy chủ đám mây để phân tích. Hệ thống van tưới có thể nhận lệnh điều khiển từ xa thông qua ứng dụng trên điện thoại của người quản lý. Một số nhân viên kỹ thuật của trang trại đưa ra các nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Việc sử dụng địa chỉ IPv6 giúp mọi thiết bị IoT có thể giao tiếp trực tiếp với nhau qua Internet mà không cần bất kỳ cơ chế trung gian nào.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Access Point (AP) đóng vai trò cầu nối, cho phép các thiết bị không dây kết nối vào mạng LAN có dây và truyền dữ liệu giữa hai môi trường này.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Nếu các van tưới chỉ hỗ trợ kết nối Bluetooth, thì để điều khiển từ xa qua Internet cần có thiết bị trung gian chuyển đổi giữa Bluetooth và mạng IP.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi người quản lý điều khiển van tưới từ điện thoại qua Internet, gói tin điều khiển sẽ đi qua nhiều router của các mạng khác nhau; trong quá trình này, để đảm bảo định tuyến phù hợp với từng mạng trung gian, địa chỉ IP đích của gói tin có thể bị thay đổi nhiều lần trước khi đến được thiết bị đích.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Dữ liệu về học sinh tham gia các câu lạc bộ trong trường năm học 2025-2026 được thu thập nhằm phục vụ công tác quản lý và khen thưởng của Đoàn trường. Để lưu trữ và khai thác dữ liệu, hệ thống cơ sở dữ liệu được thiết kế gồm các bảng sau: HOCSINH (MaHS, HoTen, GioiTinh, NgaySinh), CLB (MaCLB, TenCLB, NgayTL), THAMGIA (MaCLB, MaHS, VaiTro, NgayTG). Một học sinh khi tìm hiểu về cơ sở dữ liệu trên đưa ra các nhận định sau:",
      subQuestions: [
        {
          id: "a",
          text: "Trường MaCLB là khóa chính của bảng CLB.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Chỉ cần liên kết hai bảng CLB và THAMGIA theo khoá MaCLB là có thể kết xuất được thông tin gồm: Tên câu lạc bộ, Vai trò, Ngày tham gia.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Để đưa ra được thông tin gồm: Họ tên, Tên câu lạc bộ, Vai trò, Ngày tham gia của học sinh có Vai trò là Thành viên, có thể thực hiện truy vấn với các thành phần được chọn và liên kết qua MaHS, điều kiện THAMGIA.VaiTro = 'Thành viên'.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Trường MaHS đóng vai trò là khoá ngoài của bảng THAMGIA tham chiếu đến trường MaHS của bảng HOCSINH.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh lớp 12 được giao nhiệm vụ sử dụng phần mềm tạo trang web để xây dựng website giới thiệu 'Câu lạc bộ Sách' của trường. Website dự kiến có cấu trúc như sau: Trang chủ giới thiệu chung; Thanh điều hướng gồm các mục Giới thiệu, Danh mục sách, Sự kiện và Liên hệ. Trong mục Danh mục sách có liên kết tới các trang con giới thiệu chi tiết từng cuốn sách. Trong quá trình thực hiện, các thành viên đưa ra các nhận xét sau:",
      subQuestions: [
        {
          id: "a",
          text: "Người dùng có thể chỉnh sửa bố cục, màu sắc và font chữ của website thông qua các mẫu giao diện có sẵn.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Phần mềm tạo trang web hiện nay thường có giao diện kéo-thả, giúp người dùng dễ dàng thêm nội dung mà không cần biết lập trình.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Các liên kết đến trang chi tiết của từng cuốn sách chỉ có thể đặt trong thanh điều hướng chính, không thể đặt trong nội dung trang.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Có thể nhúng biểu mẫu đăng ký trực tiếp vào website mà không cần tự xây dựng hệ thống cơ sở dữ liệu riêng.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Dữ liệu về kết quả học tập các môn đánh giá bằng điểm số của học sinh trong 3 năm được nhà trường thu thập nhằm phục vụ công tác quản lí và đánh giá chất lượng giáo dục. Để lưu trữ và khai thác dữ liệu, cần tạo cơ sở dữ liệu với các bảng HOCSINH (MaHS, HoTen, Lop), MONHOC (MaMH, TenMH), KETQUA (MaHS, MaMH, Nam, DiemTB). Sau khi tìm hiểu các phần mềm để quản trị cơ sở dữ liệu, một số bạn học sinh đưa ra các ý kiến sau:",
      subQuestions: [
        {
          id: "a",
          text: "Khi tạo bảng HOCSINH trong phần mềm quản trị cơ sở dữ liệu, chọn trường MaHS rồi thiết lập trường này làm khóa chính của bảng.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Trong phần mềm quản trị cơ sở dữ liệu, cần chọn nhóm 3 trường MaHS, MaMH, Nam làm khoá chính cho bảng KETQUA.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Để đưa ra thông tin gồm Họ tên, Tên môn học, Năm và Điểm trung bình của những học sinh có Mã môn học là MH03 trong năm 2024 có thể thực hiện truy vấn với INNER JOIN giữa KETQUA, HOCSINH và MONHOC và điều kiện KETQUA.MaMH = 'MH03'.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi lưu trữ vào một bảng tính trong Excel gồm các cột: MaHS, HoTen, Lop, MaMH, TenMH, Nam, DiemTB dữ liệu vẫn đảm bảo tính nhất quán.",
          correctAnswer: false,
        },
      ],
    },
  ],
};
