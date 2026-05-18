import { Question, QuestionType } from "./types";

export const EXAM_SET_9 = {
  id: 9,
  title:
    "ĐỀ THI THỬ SỐ 5 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công việc nào dưới đây thuộc nhóm ngành phân tích và xử lý dữ liệu?",
      options: [
        { id: "A", text: "Quản lý và cấu hình hệ thống mạng nội bộ." },
        { id: "B", text: "Cài đặt phần mềm bảo mật cho hệ thống máy tính." },
        {
          id: "C",
          text: "Phân tích dữ liệu bán hàng để hỗ trợ ra quyết định kinh doanh.",
        },
        { id: "D", text: "Sửa chữa phần cứng máy tính bị hỏng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Kỹ năng nào dưới đây KHÔNG thuộc phạm vi công việc của chuyên viên quản trị hệ thống mạng?",
      options: [
        {
          id: "A",
          text: "Cấu hình và giám sát hoạt động của hệ thống mạng.",
        },
        { id: "B", text: "Thiết kế giao diện đồ họa cho website." },
        {
          id: "C",
          text: "Cập nhật phần mềm bảo mật hệ thống định kỳ.",
        },
        {
          id: "D",
          text: "Phân tích và xử lý sự cố kết nối mạng.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo một danh sách không có thứ tự trong HTML với các mục được hiển thị bằng hình vuông đặc (▪). Đoạn mã nào sau đây là đúng?",
      options: [
        { id: "A", text: '<ul start="square">' },
        { id: "B", text: '<ol start="square">' },
        { id: "C", text: '<ul type="square">' },
        { id: "D", text: '<ol type="square">' },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Nhúng một hình ảnh vào trang web bằng thẻ <img>, để hiển thị đoạn văn bản "Logo công ty" thay thế cho hình ảnh bị lỗi. Thuộc tính trong thẻ <img> nào dưới đây là đúng?',
      options: [
        { id: "A", text: "src" },
        { id: "B", text: "title" },
        { id: "C", text: "alt" },
        { id: "D", text: "href" },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào dưới đây đúng về kết quả áp dụng CSS, khi một trang web đồng thời sử dụng tệp CSS ngoài (liên kết bằng thẻ <link>) và thẻ <style> nội bộ, với cùng một thuộc tính được áp dụng cho một phần tử?",
      options: [
        {
          id: "A",
          text: "Trang web sẽ không hiển thị đúng cách do xung đột CSS.",
        },
        {
          id: "B",
          text: "Trình duyệt sẽ ngẫu nhiên chọn một trong hai thuộc tính để áp dụng.",
        },
        {
          id: "C",
          text: "Giá trị các thuộc tính trong thẻ <style> nội bộ sẽ được ưu tiên áp dụng.",
        },
        {
          id: "D",
          text: "Các thuộc tính trong tệp CSS ngoài sẽ được ưu tiên áp dụng.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Ứng dụng nào sau đây là ví dụ điển hình của trí tuệ nhân tạo (AI) trong chẩn đoán bệnh?",
      options: [
        {
          id: "A",
          text: "Phần mềm sử dụng học máy để phân tích hình ảnh y khoa và phát hiện dấu hiệu bệnh lý.",
        },
        {
          id: "B",
          text: "Ứng dụng nhắc lịch uống thuốc và ghi nhận phản hồi của bệnh nhân theo thời gian thực.",
        },
        {
          id: "C",
          text: "Nền tảng phân tích thống kê hồ sơ bệnh án nhằm đưa ra các báo cáo sức khỏe tổng quát.",
        },
        {
          id: "D",
          text: "Hệ thống hỗ trợ theo dõi tình trạng bệnh nhân và cảnh báo khi có chỉ số bất thường.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Hành vi nào sau đây được xem là vi phạm Luật Sở hữu trí tuệ?",
      options: [
        {
          id: "A",
          text: "Tự sáng tác một bài hát và chia sẻ công khai trên mạng xã hội.",
        },
        {
          id: "B",
          text: "Chia sẻ đường link bài báo trên trang web chính thức của tòa soạn.",
        },
        {
          id: "C",
          text: "Tải và sử dụng phần mềm có bản quyền mà không mua giấy phép.",
        },
        {
          id: "D",
          text: "Sử dụng phần mềm miễn phí theo đúng điều khoản của nhà cung cấp.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây là đúng khi nói về vai trò của Modem ?",
      options: [
        {
          id: "A",
          text: "Chuyển đổi tín hiệu giữa dạng số và dạng tương tự khi truyền dữ liệu.",
        },
        {
          id: "B",
          text: "Phát tín hiệu không dây và cấp địa chỉ IP cho các thiết bị trong mạng.",
        },
        {
          id: "C",
          text: "Lưu trữ tạm thời dữ liệu mạng và thực hiện phân phối gói tin đến đích.",
        },
        {
          id: "D",
          text: "Kết nối các máy tính trong mạng cục bộ thông qua cáp mạng chuyên dụng.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi nào sau đây bị xem là vi phạm pháp luật trên không gian mạng?",
      options: [
        {
          id: "A",
          text: "Tạo nhóm trò chuyện riêng để thảo luận học tập cùng bạn bè.",
        },
        {
          id: "B",
          text: "Bình luận thể hiện ý kiến cá nhân về một bộ phim đang chiếu.",
        },
        {
          id: "C",
          text: "Phát tán phần mềm độc hại gây ảnh hưởng đến dữ liệu của người khác.",
        },
        {
          id: "D",
          text: "Sử dụng biệt danh thay cho tên thật khi đăng ký tài khoản.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để tạo một trang web có một đoạn văn bản quan trọng được đánh dấu bằng màu đỏ và chữ in đậm, đoạn văn bản này được bao quanh bởi thẻ <p>. Sử dụng bộ chọn CSS nào dưới đây để định dạng đoạn văn bản này?",
      options: [
        { id: "A", text: "mark { color: red; font-weight: bold; }" },
        { id: "B", text: "#p { color: red; font-weight: bold; }" },
        { id: "C", text: ".p { color: red; font-weight: bold; }" },
        { id: "D", text: "p { color: red; font-weight: bold; }" },
      ],
      correctOptionId: "D",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:\n\nPython:\ns = 0\nfor i in range(1,6):\n  s += (i*i - 2*i)\nprint(s)\n\nC++:\nint s = 0;\nfor (int i = 1; i < 6; i++)\n  s += (i*i - 2*i);\ncout << s;\n\nPhương án nào dưới đây nêu đúng giá trị của s sau khi thực hiện đoạn chương trình trên?",
      options: [
        { id: "A", text: "49" },
        { id: "B", text: "20" },
        { id: "C", text: "10" },
        { id: "D", text: "25" },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Đoạn mã HTML nào sau đây là đúng để tạo ra một bảng đơn giản có một hàng chứa hai ô dữ liệu riêng biệt với nội dung lần lượt là "Tên" và "Nguyễn Văn A"?',
      options: [
        {
          id: "A",
          text: "<table><tr><td>Tên Nguyễn Văn A</td></tr></table>",
        },
        {
          id: "B",
          text: "<table><tr><td>Tên</td><td>Nguyễn Văn A</td></tr></table>",
        },
        {
          id: "C",
          text: "<table><tr><td>Tên</td></tr><tr><td>Nguyễn Văn A</td></tr></table>",
        },
        {
          id: "D",
          text: "<table><tr>Tên</tr><tr>Nguyễn Văn A</tr></table>",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là một nguy cơ rủi ro về an ninh, an toàn khi sử dụng AI?",
      options: [
        { id: "A", text: "AI dễ bị lỗi nếu không cập nhật phần mềm." },
        {
          id: "B",
          text: "AI có thể đưa ra dự đoán sai nếu thiếu dữ liệu học tập.",
        },
        {
          id: "C",
          text: "AI có thể bị lợi dụng để đưa ra quyết định tấn công hoặc gây hại.",
        },
        { id: "D", text: "AI không thể tương tác bằng ngôn ngữ tự nhiên." },
      ],
      correctOptionId: "C",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành vi nào dưới đây là biểu hiện của ứng xử nhân văn trên không gian mạng?",
      options: [
        {
          id: "A",
          text: "Lợi dụng mạng xã hội để trêu chọc, chế giễu người có hoàn cảnh đặc biệt.",
        },
        {
          id: "B",
          text: "Gửi tin nhắn mang tính xúc phạm khi không đồng tình với quan điểm người khác.",
        },
        {
          id: "C",
          text: "Bình luận tích cực, động viên người gặp khó khăn trên mạng xã hội.",
        },
        {
          id: "D",
          text: "Chia sẻ hình ảnh của người khác mà chưa có sự đồng ý.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content: "Giao thức TCP trong bộ TCP/IP đảm nhận chức năng nào sau đây?",
      options: [
        {
          id: "A",
          text: "Mã hóa dữ liệu trước khi tiến hành truyền qua mạng.",
        },
        {
          id: "B",
          text: "Phân giải tên miền để tìm địa chỉ IP tương ứng.",
        },
        {
          id: "C",
          text: "Cấp phát địa chỉ IP cho các thiết bị trong hệ thống mạng.",
        },
        {
          id: "D",
          text: "Đảm bảo dữ liệu được truyền chính xác, đúng thứ tự.",
        },
      ],
      correctOptionId: "D",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ HTML nào sau đây được sử dụng để tạo một hàng trong bảng?",
      options: [
        { id: "A", text: "<th>" },
        { id: "B", text: "<table>" },
        { id: "C", text: "<tr>" },
        { id: "D", text: "<td>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Để kết nối 20 máy tính trong phòng máy thành một mạng LAN sao cho đảm bảo hiệu quả và tối ưu, phương án nào dưới đây là phù hợp nhất?",
      options: [
        { id: "A", text: "2 switch 10 cổng." },
        { id: "B", text: "3 switch 8 cổng." },
        { id: "C", text: "1 switch 24 cổng." },
        { id: "D", text: "4 switch 5 cổng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là nguyên nhân mà các thiết bị trong mạng có thể trao đổi dữ liệu với nhau khi sử dụng cùng một giao thức mạng?",
      options: [
        {
          id: "A",
          text: "Vì dữ liệu được mã hóa bằng cùng một phương pháp bảo mật đặc biệt.",
        },
        {
          id: "B",
          text: "Do dữ liệu được đóng gói và truyền theo một quy tắc chung đã được thỏa thuận.",
        },
        {
          id: "C",
          text: "Nhờ khả năng nhận dạng địa chỉ vật lý (MAC) giữa các thiết bị.",
        },
        {
          id: "D",
          text: "Bởi mạng sẽ cung cấp tốc độ truy cập Internet ổn định cho mọi thiết bị.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Phương án nào dưới đây mô tả đúng chức năng của đoạn mã HTML sau?\nMật khẩu: <input type= "password" name= "Matkhau">',
      options: [
        {
          id: "A",
          text: "Hiển thị dòng có nhãn Mật khẩu và ô password để người dùng nhập mật khẩu.",
        },
        {
          id: "B",
          text: "Hiển thị dòng có nhãn password và ô Matkhau để người dùng nhập mật khẩu.",
        },
        {
          id: "C",
          text: "Hiển thị dòng có nhãn password và ô Mật khẩu để người dùng nhập mật khẩu.",
        },
        {
          id: "D",
          text: "Hiển thị dòng có nhãn Matkhau và ô password để người dùng nhập mật khẩu.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong cuộc hội thảo với chủ đề “Nhân lực CNTT: Cơ hội và Thách thức”, một khách mời đã chia sẻ: “Trong thời đại hiện nay, có rất nhiều mối đe doạ từ tấn công mạng ngày càng tinh vi. Nhiệm vụ của các chuyên viên trong ngành này là phải đảm bảo dữ liệu và hệ thống khỏi các mối đe doạ đó”. Em hãy cho biết vị khách mời đang nhắc đến nhóm công việc nào dưới đây?",
      options: [
        { id: "A", text: "Phân tích, xử lí dữ liệu." },
        { id: "B", text: "Bảo mật hệ thống thông tin." },
        { id: "C", text: "Quản trị mạng." },
        { id: "D", text: "Sửa chữa và bảo trì máy tính." },
      ],
      correctOptionId: "B",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây thường được dùng để tạo một vùng nhập liệu cho người dùng nhập văn bản nhiều dòng trong một biểu mẫu (form)?",
      options: [
        { id: "A", text: '<input type="text">' },
        { id: "B", text: "<button>" },
        { id: "C", text: '<input type="password">' },
        { id: "D", text: "<textarea></textarea>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây về liên kết trong trang web là đúng?",
      options: [
        {
          id: "A",
          text: "Nếu trong trang Web có sử dụng liên kết ngoài thì nên sử dụng đường dẫn tương đối.",
        },
        {
          id: "B",
          text: "Nếu trong trang web có sử dụng liên kết trong thì nên sử dụng đường dẫn tuyệt đối.",
        },
        {
          id: "C",
          text: "Hai phần trên cùng một trang web có thể được liên kết với nhau bởi một siêu liên kết.",
        },
        {
          id: "D",
          text: "Nên sử dụng đường dẫn trực tiếp vì luôn đảm bảo có thể truy cập từ bất cứ đâu.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ thống nào sau đây thể hiện AI có khả năng học và suy luận dựa trên tri thức đã thu thập?",
      options: [
        {
          id: "A",
          text: "Ứng dụng gợi ý video ngày càng chính xác nhờ phân tích thói quen xem của người dùng.",
        },
        {
          id: "B",
          text: "Thiết bị báo thức thay đổi giờ chuông dựa trên lịch sử ngủ, theo các quy tắc cài đặt sẵn.",
        },
        {
          id: "C",
          text: "Trang web bán hàng trực tuyến luôn hiển thị danh mục sản phẩm giống nhau cho mọi người dùng.",
        },
        {
          id: "D",
          text: "Máy bán hàng tự động hoàn tiền nếu người dùng không nhận được sản phẩm sau khi thanh toán.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây thể hiện khả năng cảm nhận và hiểu biết môi trường xung quanh của AI?",
      options: [
        { id: "A", text: "Khả năng học." },
        { id: "B", text: "Khả năng nhận thức." },
        { id: "C", text: "Khả năng suy luận." },
        { id: "D", text: "Khả năng hiểu ngôn ngữ." },
      ],
      correctOptionId: "B",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để quản lý hoạt động mượn sách thư viện trong trường THPT, một cơ sở dữ liệu quan hệ được xây dựng với 3 bảng như sau: SACH (Masach, Tensach, Tacgia); NGUOIDOC (Mathe, HotenHS, Lop); MUONSACH (Mathe, Masach, Ngaymuon, Ngaytra). Một học sinh có thể mượn nhiều sách và mỗi sách có thể được nhiều học sinh mượn vào những thời điểm khác nhau. Khi tìm hiểu về cơ sở dữ liệu trên, một số bạn học sinh đưa ra các nhận xét sau:",
      subQuestions: [
        {
          id: "a",
          text: "Câu lệnh SQL sau đây liệt kê họ tên học sinh và ngày mượn sách của những cuốn sách có mã sách là 1: SELECT NGUOIDOC.HotenHS, MUONSACH.Ngaymuon FROM MUONSACH INNER JOIN NGUOIDOC ON MUONSACH.Mathe = NGUOIDOC.Mathe WHERE SACH.Masach = 1;",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Trường Mathe là khoá ngoài của bảng NGUOIDOC.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Để liệt kê tên và lớp của các học sinh thuộc lớp 12B2, có thể dùng câu lệnh SQL SELECT HotenHS, Lop FROM NGUOIDOC WHERE Lop = '12B2';",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Lop là một trường tương ứng với một cột của bảng NGUOIDOC.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một công ty nhỏ đã có Internet và đang sử dụng hệ thống mạng LAN với kết nối có dây giữa các máy tính thông qua Switch. Công ty muốn mở rộng mạng không dây kết nối vào Switch đã có cho một phòng họp, cho phép khách trong phòng họp truy cập Internet của công ty thông qua máy tính xách tay hoặc các thiết bị di động. Người quản trị mạng đã đưa ra một số giải pháp sau:",
      subQuestions: [
        {
          id: "a",
          text: "Tất cả các thiết bị trong mạng, kể cả có dây và không dây, phải kết nối trực tiếp với Modem mới có thể truy cập Internet.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Việc công ty muốn chia sẻ tài liệu đến khách hàng cần phải sử dụng dịch vụ lưu trữ đám mây từ bên ngoài.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Thiết lập mạng Wi-Fi cho khách sẽ không ảnh hưởng đến bảo mật của mạng LAN nội bộ.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Lắp đặt một Access Point và kết nối nó với Switch đã có để cung cấp mạng Wi-Fi riêng cho phòng họp và khách.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Để hỗ trợ quản lý hoạt động bán hàng online, một cơ sở dữ liệu quan hệ được xây dựng với 4 bảng: SANPHAM, KHACHHANG, DONHANG, CHITIETDONHANG. Một số bạn học sinh đưa ra các ý kiến về việc khai thác cơ sở dữ liệu trên như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Khi một đơn hàng được đặt thành công, ít nhất 3 bảng cần được cập nhật là: DONHANG, CHITIETDONHANG và SANPHAM.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Có thể có nhiều đơn hàng (DONHANG) khác nhau cùng có một idKhachhang.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Câu lệnh SQL SELECT SANPHAM.tenSanpham, CHITIETDONHANG.soLuongmua FROM CHITIETDONHANG INNER JOIN SANPHAM ON CHITIETDONHANG.idSanpham = SANPHAM.idSanpham; liệt kê tên sản phẩm và số lượng mua trong các đơn hàng.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Bảng CHITIETDONHANG có thể chứa thông tin về một sản phẩm chưa có trong bảng SANPHAM.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Bình đang thực hiện một bài tập nhóm cùng một số học sinh khác trong lớp. Các bạn đã thực hiện họp trao đổi tại nhà của Bình và thực hiện kết nối máy tính xách tay với ti vi thông minh (được trang bị đầy đủ các chuẩn kết nối) để cả nhóm cùng trao đổi dễ dàng hơn. Sau đây là một số nhận xét về việc kết nối giữa hai thiết bị của các học sinh trong nhóm:",
      subQuestions: [
        {
          id: "a",
          text: "Sau khi kết nối, âm thanh trên máy tính sẽ chỉ có thể phát ra từ ti vi thông minh.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Có thể thực hiện kết nối với ti vi thông minh mà không cần dùng dây kết nối.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Có thể thực hiện kết nối thông qua cổng USB trên ti vi thông minh.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Nếu hai thiết bị được kết nối thông qua Wi-fi từ Access Point, hình ảnh chiếu ở trên màn hình máy tính sẽ có hiện tượng đứng hình nếu tốc độ Wi-fi chậm.",
          correctAnswer: true,
        },
      ],
    },
  ] as Question[],
};
