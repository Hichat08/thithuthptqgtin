import { Question, QuestionType } from "./types";

export const EXAM_SET_18 = {
  id: 18,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO KHÁNH HÒA - THPT HOÀNG VĂN THỤ - ĐỀ THI CHÍNH THỨC KỲ THI TỐT NGHIỆP THPT NĂM 2026 (Đợt 1) Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để hiển thị nội dung đoạn văn bản được định dạng như sau, cú pháp CSS nào là phù hợp nhất? Bánh mì đứng đầu trong bảng xếp hạng 100 món bánh mì kẹp ngon nhất thế giới của chuyên trang ẩm thực Taste Atlas. (Khung viền có màu xanh dương)",
      options: [
        {
          id: "A",
          text: "h1 {color: grey;} p {text-indent: 10px; border: 1px solid blue;}",
        },
        {
          id: "B",
          text: "h1 {color: grey;} p {text-align: 10px; border: 1px dashed blue;}",
        },
        {
          id: "C",
          text: "h1 {font-color: grey;} p {border: 1px solid blue;}",
        },
        {
          id: "D",
          text: "h1 {font-color: red;} p {text-left: 10px; border: 1px dashed blue;}",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây là tên thường gọi của mạng Wi-Fi?",
      options: [
        { id: "A", text: "Mạng WLAN." },
        { id: "B", text: "Mạng không dây." },
        { id: "C", text: "Mạng Internet." },
        { id: "D", text: "Mạng cục bộ." },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi đọc được một bài viết hoặc thông tin có thể là tin đồn hoặc tin giả trên mạng xã hội, hành động nào sau đây nên thực hiện để phản ánh tính nhân văn?",
      options: [
        {
          id: "A",
          text: "Lan truyền thông tin mà không cần xác nhận tính chính xác.",
        },
        { id: "B", text: "Phản bác và chỉ trích tác giả của bài viết." },
        {
          id: "C",
          text: "Kiểm tra và xác minh thông tin trước khi chia sẻ.",
        },
        {
          id: "D",
          text: "Phản ứng mạnh mẽ và kêu gọi mọi người cùng phản bác.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content: "Cơ sở dữ liệu (CSDL) là gì?",
      options: [
        {
          id: "A",
          text: "Một tập hợp dữ liệu có liên quan, được lưu trữ có tổ chức trên máy tính.",
        },
        { id: "B", text: "Một bộ sưu tập hình ảnh và video." },
        { id: "C", text: "Một tập hợp các tệp văn bản trong máy tính." },
        { id: "D", text: "Một tập hợp các bảng tính trong Excel." },
      ],
      correctOptionId: "A",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi nói về đặc điểm quan trọng nhất của ngành Trí tuệ nhân tạo, thì phương án nào sau đây là chính xác nhất?",
      options: [
        {
          id: "A",
          text: "Giúp máy tính thực hiện được nhiều phần mềm một lúc.",
        },
        {
          id: "B",
          text: "Giúp máy tính tính toán có thể thực hiện nhanh các phép toán như con người.",
        },
        {
          id: "C",
          text: "Giúp máy tính tự động xử lí khối lượng lớn dữ liệu rất nhanh và chính xác.",
        },
        {
          id: "D",
          text: "Giúp máy tính có thể làm những công việc mang tính trí tuệ con người.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo ra một đoạn văn bản hiển thị trên trang web như minh hoạ, đoạn mã lệnh HTML nào là đúng? Tối ưu hoá database là một vấn đề khó và không có một quy tắc.",
      options: [
        {
          id: "A",
          text: "Tối ưu hoá <b>database</b> là một <i>vấn đề khó và không có một quy tắc</i>.",
        },
        {
          id: "B",
          text: "Tối ưu hoá <i><b>database</b> là một vấn đề khó và không có một quy tắc</i>.",
        },
        {
          id: "C",
          text: "Tối ưu hóa <b>database</b> là một <i>vấn đề khó</i> và <i>không có một quy tắc</i>.",
        },
        {
          id: "D",
          text: "Tối ưu hoá <strong><i>database</i></strong> là một <i>vấn đề khó</i> và không có một quy tắc</i>.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thiết bị nào sau đây được tích hợp trợ lí ảo?",
      options: [
        { id: "A", text: "Điện thoại cảm ứng." },
        { id: "B", text: "Chuông báo cháy." },
        { id: "C", text: "Máy tính cầm tay." },
        { id: "D", text: "Máy quét mã vạch." },
      ],
      correctOptionId: "A",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho bảng NGƯỜI ĐỌC trong CSDL thư viện của một trường học. Câu lệnh truy vấn SQL nào sau đây biểu diễn đúng cho yêu cầu: 'Đưa ra họ tên, lớp của người đọc có số thẻ thư viện là HS-010.'?",
      options: [
        {
          id: "A",
          text: 'SELECT NGUOI_DOC FROM WHERE ma_the="HS-010"',
        },
        {
          id: "B",
          text: 'SELECT ho_ten, lop FROM NGUOI_DOC WHERE ma_the="HS-010"',
        },
        {
          id: "C",
          text: 'SELECT ho_ten, lop FROM SACH WHERE ma_the="HS-010"',
        },
        { id: "D", text: "SELECT FROM NGUOI_DOC" },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây dùng để xác định tiêu đề sẽ được hiển thị trên thanh tiêu đề của một trang web trên trình duyệt?",
      options: [
        { id: "A", text: "<body>" },
        { id: "B", text: "<title>" },
        { id: "C", text: "<meta>" },
        { id: "D", text: "<head>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây sai khi nói về việc kết nối PC với mạng Wi-Fi thông qua các thiết bị kết nối mạng?",
      options: [
        {
          id: "A",
          text: "Cả máy tính để bàn (Desktop PC) lẫn máy tính xách tay (Laptop) đều có thể kết nối vào mạng Wi-Fi nếu được trang bị đầy đủ về phần cứng thiết bị.",
        },
        {
          id: "B",
          text: "Hiện nay, máy tính để bàn (Desktop PC) cần được lắp thêm Card mạng (NIC) không dây thì mới kết nối được vào mạng Wi-Fi.",
        },
        {
          id: "C",
          text: "Hiện nay, mọi Laptop và điện thoại thông minh thông thường đều được trang bị sẵn Card mạng (NIC) không dây để kết nối vào mạng Wi-Fi.",
        },
        {
          id: "D",
          text: "Hiện nay, các máy tính để bàn (Desktop PC) thông thường đều được trang bị sẵn Card mạng (NIC) không dây để kết nối vào mạng Wi-Fi.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một cuộc thảo luận trực tuyến, bạn Khuyên nhận thấy một người tham gia đang bị quấy rối và bị gián đoạn trong việc diễn đạt ý kiến của mình. Phương án nào sau đây là hành động phù hợp để hỗ trợ người đó và gìn giữ tính nhân văn?",
      options: [
        {
          id: "A",
          text: "Khuyến khích người bị quấy rối rời khỏi cuộc thảo luận.",
        },
        { id: "B", text: "Yêu cầu người gây rối ngừng hành động đó." },
        { id: "C", text: "Bày tỏ sự phẫn nộ với người gây rối." },
        {
          id: "D",
          text: "Nhắc nhở nhóm về quy tắc văn hóa và tôn trọng.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao tiếp trong không gian mạng không có ưu điểm nào sau đây?",
      options: [
        {
          id: "A",
          text: "Mở rộng kết nối xã hội và khả năng tương tác.",
        },
        { id: "B", text: "Luôn giúp cải thiện kĩ năng giao tiếp." },
        { id: "C", text: "Tiết kiệm thời gian, công sức hoặc chi phí." },
        { id: "D", text: "Thực hiện ở mọi lúc, mọi nơi." },
      ],
      correctOptionId: "B",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi tham gia một diễn đàn trực tuyến để thảo luận về vấn đề xã hội, bạn Chính muốn chia sẻ quan điểm của mình. Phương án nào sau đây là ưu điểm khi chia sẻ quan điểm trên diễn đàn?",
      options: [
        { id: "A", text: "Tốn thời gian và chi phí tham gia." },
        {
          id: "B",
          text: "Tạo ra sự đa dạng quan điểm và ý kiến từ các thành viên khác.",
        },
        { id: "C", text: "Rủi ro bị đánh cắp thông tin cá nhân." },
        { id: "D", text: "Khả năng mất đi các mối quan hệ mới." },
      ],
      correctOptionId: "B",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây cho phép xác định nơi viết các lệnh CSS trong nội bộ một trang web?",
      options: [
        { id: "A", text: "<link>" },
        { id: "B", text: "<style>" },
        { id: "C", text: "<script>" },
        { id: "D", text: "<stylesheet>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Những công việc chính mà một chuyên gia trong lĩnh vực Sửa chữa và Bảo trì máy tính thường phải thực hiện là gì?",
      options: [
        { id: "A", text: "Thiết kế giao diện người dùng." },
        { id: "B", text: "Lắp ráp máy tính từ các thành phần." },
        {
          id: "C",
          text: "Bảo đảm hệ thống thông tin hoạt động ổn định.",
        },
        { id: "D", text: "Phân tích các lỗi phần cứng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Em cùng gia đình đi du lịch. Tại đó, em cần kết nối điện thoại thông minh của mình với Access Point của khách sạn để có thể truy cập vào mạng Internet. Quy trình nào sau đây em cần làm để thực hiện công việc trên?",
      options: [
        {
          id: "A",
          text: "Bật Bluetooth trên điện thoại → Tìm và chọn thiết bị → Nhập mã PIN (nếu có) → Nhấn chọn kết nối.",
        },
        {
          id: "B",
          text: "Bật NFC → Đặt điện thoại gần với thiết bị → Xác nhận việc kết nối và chờ kết nối.",
        },
        {
          id: "C",
          text: "Bật Wi-Fi trên điện thoại → Tìm và chọn mạng Wi-Fi tương ứng với Access Point → Nhập mật khẩu (nếu có) → Nhấn chọn kết nối.",
        },
        {
          id: "D",
          text: "Bật 3G/4G trên điện thoại → Tìm và chọn mạng di động → Nhập mật khẩu (nếu có) → Kích hoạt dịch vụ.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo một bảng trong HTML, người dùng sử dụng thẻ nào dưới đây?",
      options: [
        { id: "A", text: "<grid>" },
        { id: "B", text: "<block>" },
        { id: "C", text: "<table>" },
        { id: "D", text: "<list>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một nhóm các bạn tạo một tập san với chủ đề 'Những việc xấu cần phê phán, phản đối trên không gian mạng'. Các bạn đã mắc phải sai lầm nào sau đây khi đưa vào tập san tất cả các thông tin đã tìm được trên Internet về chủ đề?",
      options: [
        { id: "A", text: "Phán tán thông tin không rõ nguồn gốc." },
        {
          id: "B",
          text: "Tiếp tay cho việc bắt nạt, quấy rối trên không gian mạng.",
        },
        { id: "C", text: "Sử dụng thông tin chưa được kiểm chứng." },
        { id: "D", text: "Phân biệt đối xử sắc tộc, giới tính, tôn giáo." },
      ],
      correctOptionId: "C",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lĩnh vực nào sau đây không thuộc lĩnh vực nghiên cứu phát triển AI?",
      options: [
        { id: "A", text: "Xử lý ngôn ngữ tự nhiên." },
        { id: "B", text: "Hệ thống nhúng." },
        { id: "C", text: "Học máy." },
        { id: "D", text: "Thị giác máy tính." },
      ],
      correctOptionId: "B",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content: "Đâu là vai trò quan trọng nhất của giao thức IP?",
      options: [
        { id: "A", text: "Chuyển tiếp gói dữ liệu qua mạng." },
        { id: "B", text: "Quản lý kết nối mạng." },
        { id: "C", text: "Bảo mật dữ liệu trên Internet." },
        { id: "D", text: "Định danh và địa chỉ hóa các thiết bị trên mạng." },
      ],
      correctOptionId: "D",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây không phải là ích của việc chia sẻ thư mục trong mạng LAN?",
      options: [
        {
          id: "A",
          text: "Tiết kiệm không gian lưu trữ bằng cách chia sẻ tài nguyên lưu trữ trên các máy tính khác.",
        },
        {
          id: "B",
          text: "Tăng tính bảo mật bằng cách kiểm soát quyền truy cập vào các tệp và thư mục được chia sẻ.",
        },
        {
          id: "C",
          text: "Giảm chi phí cài đặt hạ tầng mạng bằng cách loại bỏ việc mua các thiết bị lưu trữ mạng.",
        },
        {
          id: "D",
          text: "Giúp các người dùng trong mạng LAN truy cập và chia sẻ tài liệu, dữ liệu dễ dàng.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Đoạn mã HTML sau nhằm tạo ra một khung (nội tuyến) để những video có id là VIDEO_ID trên trang web. Phương án nào sau đây nêu đúng kết quả thực hiện đoạn mã? <iframe src="https://www.youtube.com/watch?v=VIDEO_ID"width="640"height="360"></iframe>',
      options: [
        {
          id: "A",
          text: "Xảy ra lỗi vì thuộc tính width và height của khung được thiết lập đúng cách.",
        },
        { id: "B", text: "Xảy ra lỗi và URL không hợp lệ." },
        { id: "C", text: "Không có lỗi, video từ YouTube sẽ được hiển thị." },
        {
          id: "D",
          text: "Không có lỗi nhưng hiển thị một khung (nội tuyến) rỗng.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khả năng tự học của ChatGPT được thể hiện rõ nhất trong tình huống nào sau đây?",
      options: [
        { id: "A", text: "Có thể trả lời các câu hỏi bằng ngôn ngữ tự nhiên." },
        {
          id: "B",
          text: "Có thể được sử dụng ở bất cứ nơi nào và bởi nhiều người dùng khác nhau.",
        },
        {
          id: "C",
          text: "Có thể nhanh chóng đưa ra câu trả lời ở bất cứ thời gian nào.",
        },
        {
          id: "D",
          text: "Có thể điều chỉnh câu trả lời phù hợp với mong muốn của người dùng.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho đoạn mã HTML sau: <video alt="File not found"width="300"height="300"><source src="mattroinhobe.mp4"><source src="mattroinhobe.webm"></video>. Phương án nào sau đây là kết quả hiển thị của đoạn mã lệnh trên trình duyệt?',
      options: [
        { id: "A", text: "Video thứ nhất." },
        { id: "B", text: "Video đầu tiên mà trình duyệt có thể nhận dạng." },
        { id: "C", text: "Một danh sách có hai video." },
        { id: "D", text: "Video thứ hai." },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để quản lý điểm thi Tốt nghiệp THPT của học sinh trong toàn quốc, Bộ Giáo dục và đào tạo thiết kế CSDL quan hệ gồm 2 bảng và lưu trữ tại máy chủ của Bộ. Bảng HOSO gồm các trường: Số báo danh, Họ và tên, Ngày sinh, Nơi sinh, Số điện thoại, Căn cước công dân. Bảng DIEM gồm các trường: Số báo danh, Điểm môn 1, Điểm môn 2, Điểm môn 3, Điểm môn 4. Một số bạn học sinh đưa ra các phát biểu sau:",
      subQuestions: [
        {
          id: "a",
          text: "Dữ liệu thuộc mô hình CSDL tập trung.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Có thể chọn một trong ba trường Số báo danh, Số điện thoại hoặc Căn cước công dân để làm khóa chính cho bảng HOSO.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Dữ liệu có thể tổ chức lưu trữ trong một bảng để tăng tốc độ xử lý.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để thông báo kết quả thi đến các thí sinh, cần sử dụng dữ liệu của cả hai bảng HOSO và DIEM.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trong một phòng máy ở trường học có 30 máy tính được kết nối với nhau bằng Switch tạo thành một mạng LAN và chỉ có duy nhất một máy in. Giáo viên thực hiện kết nối máy in và máy tính của giáo viên để có thể cung cấp dịch vụ in cho các máy tính khác trong phòng máy. Sau đây là một số nhận xét về hệ thống mạng trên:",
      subQuestions: [
        {
          id: "a",
          text: "Không thể chia sẻ máy in qua mạng LAN.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Nếu tắt máy giáo viên, các máy khác vẫn có thể sử dụng máy in.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Có thể thực hiện chia sẻ máy in qua mạng Wifi.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi chia sẻ máy in, lệnh in từ các máy tính được chia sẻ ưu tiên theo số thứ tự máy ở trong phòng máy.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh cần tìm hiểu về các hành tinh trong hệ Mặt Trời để làm báo cáo trong môn Địa lí. Phần mềm mô phỏng hệ Mặt Trời cho phép tùy chỉnh góc nhìn, tốc độ dịch chuyển, hiển thị hoặc ẩn thông tin các hành tinh bằng cách kích chuột vào các nút lệnh tương ứng. Sau đây là một số ý kiến nêu ra trong quá trình làm báo cáo:",
      subQuestions: [
        {
          id: "a",
          text: "Phần mềm mô phỏng này có lợi ích khi sử dụng trong lĩnh vực giáo dục.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Để sử dụng được phần mềm này, cần có sự hỗ trợ của chuyên gia công nghệ thông tin và máy tính có cấu hình đủ mạnh.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Sử dụng phần mềm trên có ưu điểm là không mất phí và giúp giải thích được hiện tượng nhật thực và nguyệt thực.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Tất cả các phần mềm mô phỏng hệ Mặt Trời đều cần phải cài đặt để sử dụng.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để quản lý chi tiêu cá nhân bằng Python, các ý kiến bao gồm: chia nhỏ bài toán thành các hàm, sử dụng biến kiểu string để lưu thông tin, chia thành nhiều hàm để xử lý các công việc khác nhau và sử dụng hàm với ds là tham số danh sách ngày và số tiền. Các bạn nhận xét sau đây đúng hay sai?",
      subQuestions: [
        {
          id: "a",
          text: "Việc chia nhỏ bài toán thành các hàm sẽ giúp cho việc viết chương trình ngắn gọn hơn.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Sử dụng biến kiểu string để lưu thông tin cho mỗi lần nhập.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Bài toán này có thể chia thành nhiều hàm để xử lý các công việc khác nhau: Hàm nhập dữ liệu cho từng lần thu/chi và hàm tính tiền cho một ngày cụ thể nào đó.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Để tính tiền cho một ngày nào đó, sử dụng hàm sau với ds là tham số lưu danh sách ngày và số tiền, di là biến lưu ngày cần tính.",
          correctAnswer: true,
        },
      ],
    },
  ],
};
