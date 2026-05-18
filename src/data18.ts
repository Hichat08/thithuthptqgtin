import { Question, QuestionType } from "./types";

export const EXAM_SET_19 = {
  id: 19,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI - CỤM TRƯỜNG THPT SỐ 8 - ĐỀ THI CHÍNH THỨC - KỲ THI TỐT NGHIỆP THPT NĂM 2026 (Đợt 1) MÔN: TIN HỌC",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lựa chọn ngôn ngữ Python hoặc C++ để tìm hiểu đoạn chương trình sau. Giá trị của S được in ra là bao nhiêu?",
      options: [
        { id: "A", text: "9" },
        { id: "B", text: "16" },
        { id: "C", text: "25" },
        { id: "D", text: "Không xác định" },
      ],
      correctOptionId: "D",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã HTML sau: <p><b><i>Nội dung</i></b></p>. Phương án nào dưới đây mô tả đúng định dạng của đoạn văn bản “Nội dung” trên trình duyệt web?",
      options: [
        { id: "A", text: "Chữ đậm." },
        { id: "B", text: "Chữ đậm và nghiêng." },
        { id: "C", text: "Chữ nghiêng." },
        { id: "D", text: "Chữ gạch chân." },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đoạn CSS nào sau đây dùng để thiết lập tiêu đề h1 có màu đỏ?",
      options: [
        { id: "A", text: "<h1 style = \"red\">" },
        { id: "B", text: "h1{color::red;}" },
        { id: "C", text: "<h1 style=\"color: red\">" },
        { id: "D", text: "h1: text-color=red;" },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ nào dùng để tạo liên kết (Hyperlink) trong HTML?",
      options: [
        { id: "A", text: "<href>" },
        { id: "B", text: "<a>" },
        { id: "C", text: "<link>" },
        { id: "D", text: "<url>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, để tạo liên kết nội bộ đến một phần tử có id là \"footer\", cú pháp đúng là gì?",
      options: [
        { id: "A", text: "<a href=\"#footer\">Go to Footer</a>" },
        { id: "B", text: "<a id=\"footer\">Go to Footer</a>" },
        { id: "C", text: "<a href=\"footer\">Go to Footer</a>" },
        { id: "D", text: "<a link=\"footer\">Go to Footer</a>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã HTML sau: <p style=\"color: red;\">Hello <span style=\"color: blue;\">World</span></p>. Phương án nào dưới đây mô tả đúng định dạng của văn bản trên trình duyệt web?",
      options: [
        { id: "A", text: "\"Hello\" màu xanh, \"World\" màu đỏ." },
        { id: "B", text: "Tất cả màu xanh." },
        { id: "C", text: "Tất cả màu đỏ." },
        { id: "D", text: "\"Hello\" màu đỏ, \"World\" màu xanh." },
      ],
      correctOptionId: "D",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một công ty thương mại điện tử sử dụng hệ thống AI để gợi ý sản phẩm dựa trên lịch sử mua sắm và tìm kiếm của khách hàng. Tuy nhiên, đôi khi hệ thống lại gợi ý những sản phẩm không phù hợp cho khách hàng. Phương án nào dưới đây là nguyên nhân của hiện tượng đó?",
      options: [
        { id: "A", text: "AI luôn hoạt động hoàn hảo nên không có sai sót." },
        { id: "B", text: "AI không thể xử lí dữ liệu người dùng." },
        { id: "C", text: "Do người dùng sử dụng Internet quá nhiều." },
        { id: "D", text: "Dữ liệu đầu vào chưa đầy đủ hoặc chưa chính xác." },
      ],
      correctOptionId: "D",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Bạn T thấy bài đăng kêu gọi quyên góp ủng hộ em bé bị bệnh hiểm nghèo, nhưng nghi ngờ lừa đảo vì thông tin tài khoản không rõ ràng. Để thể hiện tính nhân văn một cách thông minh và có trách nhiệm, T cần phải làm gì trong tình huống này?",
      options: [
        { id: "A", text: "Bình luận kêu gọi mọi người không nên quyên góp." },
        { id: "B", text: "Xác minh nguồn thông tin rồi mới hành động." },
        { id: "C", text: "Bỏ qua bài viết vì sợ lừa đảo, tránh rủi ro." },
        { id: "D", text: "Chia sẻ ngay lập tức để kêu gọi mọi người cùng giúp đỡ." },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một nhóm học sinh làm dự án về “ô nhiễm không khí”. Nhóm trưởng tìm kiếm thông tin trên Internet bằng nhiều từ khóa khác nhau và lưu tài liệu về máy. Tuy nhiên, khi tổng hợp, nhóm nhận thấy có nhiều thông tin trùng lặp, một số nguồn không đáng tin cậy và khó xác định nội dung chính xác. Phương án nào sau đây là tối ưu nhất để giải quyết vấn đề?",
      options: [
        {
          id: "A",
          text: "Lọc thông tin theo nguồn tin cậy, chọn nội dung phù hợp và loại bỏ dữ liệu trùng lặp.",
        },
        {
          id: "B",
          text: "Giữ lại tất cả tài liệu đã tìm được để đảm bảo không thiếu thông tin.",
        },
        {
          id: "C",
          text: "Chỉ sử dụng tài liệu tìm thấy đầu tiên để tiết kiệm thời gian hoàn thành.",
        },
        {
          id: "D",
          text: "Sao chép toàn bộ nội dung từ một trang web uy tín để đảm bảo tính thống nhất.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sau khi thực hiện lệnh sau, kết quả hiển thị là gì? Đoạn chương trình viết bằng Python / C++ với s = \"Hà Nội 2026\" và tính tổng các chữ số, sau đó in s[t].",
      options: [
        { id: "A", text: "26." },
        { id: "B", text: "2026." },
        { id: "C", text: "6." },
        { id: "D", text: "Hà Nội." },
      ],
      correctOptionId: "C",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cho đoạn mã lệnh HTML sau: <ul><li>Toán</li><li>Văn<ol><li>Văn học</li><li>Tiếng Việt</li></ol></li><li>Anh</li></ul>. Phương án nào dưới đây mô tả đúng kết quả hiển thị trên trình duyệt web?",
      options: [
        { id: "A", text: "“Văn học” và “Tiếng Việt” là danh sách con của “Văn”." },
        { id: "B", text: "Có 3 danh sách độc lập." },
        { id: "C", text: "Tất cả các mục đều được đánh số." },
        { id: "D", text: "“Văn học” và “Tiếng Việt” là các mục cùng cấp với “Toán”." },
      ],
      correctOptionId: "A",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Chọn đoạn mã đúng để tạo một bảng 1 hàng, mỗi hàng 1 ô, trong ô chứa danh sách có thứ tự (1, 2, 3):",
      options: [
        {
          id: "A",
          text: "<tr><td><ol><li>1</li><li>2</li></ol></td></tr>.",
        },
        {
          id: "B",
          text: "<table><td><ol><li>1</li><li>2</li><li>3</li></ol></td></table>.",
        },
        {
          id: "C",
          text: "<table><tr><td><ol><li>1</li><li>2</li><li>3</li></ol></td></tr></table>.",
        },
        {
          id: "D",
          text: "<table><tr><td><ul><li>1</li><li>2</li><li>3</li></ul></td></tr></table>.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đánh giá đúng về hành động của một người sử dụng phần mềm không có bản quyền?",
      options: [
        { id: "A", text: "Không có ảnh hưởng gì vì để tích kiệm chi phí." },
        { id: "B", text: "Vi phạm pháp luật và đạo đức trong sử dụng CNTT." },
        { id: "C", text: "Bình thường vì ai cũng làm." },
        { id: "D", text: "Giúp phát triển phần mềm." },
      ],
      correctOptionId: "B",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nhiệm vụ chính của người làm nghề này là cài đặt cấu hình, duy trì và khắc phục sự cố cho các máy chủ, hệ điều hành và các phần mềm dịch vụ nhằm đảm bảo hệ thống máy tính của tổ chức hoạt động ổn định. Đây là mô tả công việc của người làm nghề nào dưới đây?",
      options: [
        { id: "A", text: "Bảo mật hệ thống thông tin." },
        { id: "B", text: "Quản trị hệ thống." },
        { id: "C", text: "Quản trị mạng." },
        { id: "D", text: "Sửa chữa và bảo trì máy tính." },
      ],
      correctOptionId: "B",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một học sinh sử dụng ảnh của bạn cùng lớp để đăng lên mạng xã hội kèm theo lời bình luận mang tính trêu chọc, dù không hỏi ý kiến bạn trước đó. Phương án nào mô tả đúng hành vi của học sinh này?",
      options: [
        { id: "A", text: "Bình thường vì chỉ là bạn bè trêu đùa nhau." },
        { id: "B", text: "Không phù hợp vì xâm phạm quyền riêng tư." },
        { id: "C", text: "Không sao nếu bài đăng không bị bạn phát hiện." },
        { id: "D", text: "Đúng vì mạng xã hội là nơi tự do đăng tải." },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một học sinh lớp 12 yêu thích lập trình, có khả năng giao tiếp tốt và yêu thích các công việc làm việc trực tiếp với khách hàng. Học sinh này đã tham gia một dự án, trải nghiệm các công việc: Làm việc trực tiếp với khách hàng để thu thập yêu cầu, phân tích và chuyển đổi yêu cầu thành tài liệu kỹ thuật, phối hợp với lập trình viên để đảm bảo sản phẩm đúng nhu cầu. Lựa chọn nghề nghiệp nào phù hợp nhất với năng lực và trải nghiệm của học sinh này?",
      options: [
        { id: "A", text: "Lập trình viên backend." },
        { id: "B", text: "Kiểm thử phần mềm (Tester)." },
        { id: "C", text: "Kỹ sư trí tuệ nhân tạo (AI Engineer)." },
        { id: "D", text: "Chuyên viên phân tích nghiệp vụ (BA)." },
      ],
      correctOptionId: "D",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cách nhúng CSS nào giúp định dạng cho nhiều trang HTML cùng lúc một cách hiệu quả nhất?",
      options: [
        { id: "A", text: "Inline CSS (Viết trực tiếp trong thẻ)." },
        { id: "B", text: "External CSS (Dùng file .css riêng biệt)." },
        { id: "C", text: "Viết CSS trong thẻ <body>." },
        { id: "D", text: "Internal CSS (Viết trong thẻ <style>)." },
      ],
      correctOptionId: "B",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một giáo viên cần gửi tài liệu học tập dung lượng lớn (khoảng 200MB) cho cả lớp gồm 40 học sinh và muốn đảm bảo tất cả học sinh đều truy cập được dễ dàng, không bị giới hạn bởi thiết bị. Phương án nào sau đây là phù hợp nhất?",
      options: [
        { id: "A", text: "Nén file rồi gửi qua email cho từng học sinh." },
        { id: "B", text: "Sao chép file vào USB và phát cho từng học sinh." },
        { id: "C", text: "Gửi file trực tiếp qua tin nhắn riêng cho học sinh." },
        { id: "D", text: "Đăng file lên một dịch vụ lưu trữ đám mây và chia sẻ liên kết." },
      ],
      correctOptionId: "D",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong phòng máy thực hành Tin học có một bảng hướng dẫn với nội dung: Kết nối máy tính vào mạng phù hợp → Tìm máy in trong mạng → Thêm máy in → Cài đặt driver máy in → Kiểm tra kết nối và in thử. Quy trình trên thực hiện công việc gì sau đây?",
      options: [
        { id: "A", text: "Hướng dẫn kết nối và sử dụng máy in đã chia sẻ." },
        { id: "B", text: "Hướng dẫn cài đặt driver cho máy in trong phòng." },
        { id: "C", text: "Hướng dẫn thiết lập máy in." },
        { id: "D", text: "Hướng dẫn chia sẻ máy in trong mạng LAN." },
      ],
      correctOptionId: "A",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây giải thích ý nghĩa của thuật ngữ \"Wireless Access Point\"?",
      options: [
        { id: "A", text: "Thiết bị để hỗ trợ truy cập không dây vào mạng." },
        { id: "B", text: "Thiết bị thu phát sóng không dây truyền dữ liệu." },
        { id: "C", text: "Cách gọi đối với switch không dùng dây." },
        { id: "D", text: "Cách gọi đối với hub không dùng dây." },
      ],
      correctOptionId: "A",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây nêu đúng chức năng của thiết bị Modem trong hệ thống mạng?",
      options: [
        { id: "A", text: "Định tuyến, chuyển tiếp dữ liệu giữa các mạng." },
        { id: "B", text: "Chuyển đổi tín hiệu số thành tín hiệu tương tự và ngược lại." },
        { id: "C", text: "Kết nối mạng thông minh, truyền dữ liệu đến đích." },
        { id: "D", text: "Kết nối mạng LAN với mạng Internet." },
      ],
      correctOptionId: "B",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Việc truyền dữ liệu trong mạng cục bộ sẽ căn cứ vào địa chỉ nào sau đây?",
      options: [
        { id: "A", text: "Địa chỉ Server." },
        { id: "B", text: "Địa chỉ MAC." },
        { id: "C", text: "Địa chỉ LAN." },
        { id: "D", text: "Địa chỉ IP." },
      ],
      correctOptionId: "B",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một bệnh viện sử dụng hệ thống AI để phân tích ảnh X-quang và hỗ trợ bác sĩ phát hiện bệnh sớm. Phương án nào thể hiện vai trò của AI trong trường hợp này?",
      options: [
        { id: "A", text: "Chỉ lưu trữ thông tin bệnh nhân." },
        { id: "B", text: "Thay thế hoàn toàn bác sĩ." },
        { id: "C", text: "Hỗ trợ phân tích dữ liệu, đưa ra gợi ý chẩn đoán." },
        { id: "D", text: "Không liên quan đến y học." },
      ],
      correctOptionId: "C",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào đúng về khái niệm AI hẹp hoặc AI yếu (Narrow AI)?",
      options: [
        {
          id: "A",
          text: "Là một hệ thống được thiết kế để thực hiện một số nhiệm vụ cụ thể theo những gì đã được học.",
        },
        {
          id: "B",
          text: "Là một hệ thống có khả năng tự tạo ra những ý tưởng và sáng kiến mới mà không cần con người.",
        },
        {
          id: "C",
          text: "Là một hệ thống có khả năng tự học và tự cải thiện qua thời gian, không cần sự hỗ trợ của con người.",
        },
        {
          id: "D",
          text: "Là một hệ thống có khả năng thích nghi và giải quyết được nhiều nhiệm vụ ở các lĩnh vực khác nhau.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Gia đình bạn An sử dụng hệ thống mạng không dây (WiFi) tại nhà, bao gồm một Modem kết nối với nhà cung cấp dịch vụ Internet và một Router-Wifi để phân phối mạng đến các thiết bị như điện thoại, máy tính, tivi. Tại một thời điểm, kết nối Internet từ nhà cung cấp bị gián đoạn (mất Internet), nhưng các thiết bị trong nhà vẫn kết nối được với mạng WiFi nội bộ. Phát biểu nào sau đây là đúng?",
      subQuestions: [
        {
          id: "a",
          text: "Khi mất Internet, các máy trong cùng mạng WiFi vẫn có thể chia sẻ dữ liệu nội bộ.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Router-Wifi không có vai trò gì khi kết nối mạng trong gia đình.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Modem dùng để kết nối mạng gia đình với nhà cung cấp dịch vụ Internet.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Khi mất Internet, mọi hoạt động mạng trong nhà đều dừng lại hoàn toàn.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh thiết kế một CSDL quản lí các thuê bao điện thoại của một công ty viễn thông gồm các bảng LOAI_TB và THUE_BAO. Trong quá trình thiết kế và thảo luận, nhóm học sinh đã đưa ra các ý kiến sau:",
      subQuestions: [
        {
          id: "a",
          text: "Trường Loại TB là khoá chính của 2 bảng LOAI_TB và bảng THUE_BAO.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Kiểu dữ liệu của trường SDT trong bảng THUE_BAO là chuỗi kí tự.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Bảng LOAI_TB liên kết với bảng THUE_BAO thông qua trường LoaiTB.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Trường LoaiTB là khoá chính của bảng LOAI_TB và là khoá ngoài của bảng THUE_BAO.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một học sinh yêu thích chơi đàn Guitar xây dựng website giới thiệu câu lạc bộ gồm ba trang chính Giới thiệu, Hoạt động và Liên hệ. Một số bạn trong câu lạc bộ đã đưa ra các phát biểu dưới đây:",
      subQuestions: [
        {
          id: "a",
          text: "Website sẽ bao gồm 3 tệp tin có phần mở rộng là .html.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Thanh điều hướng có 2 mục có tên Tài liệu và Liên hệ.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Thanh điều hướng luôn phải cố định ở phía góc trên bên phải của phần đầu trang.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Khi thay đổi tên trang Liên hệ thành Thông tin, mục Liên hệ trên thanh điều hướng cũng tự động đổi tên thành Thông tin.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một trường học sử dụng phần mềm quản lí học sinh với cơ sở dữ liệu quan hệ gồm 3 bảng HOCSINH, LOP và KETQUA. Một số bạn học sinh đưa ra nhận xét về khai thác CSDL trên như sau:",
      subQuestions: [
        {
          id: "a",
          text: "MaHs là trường khóa ngoài của bảng HOCSINH.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Trong mô hình quan hệ, mỗi hàng trong bảng HOCSINH thể hiện thông tin của một học sinh.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Để biết tên học sinh và tên lớp học sinh đang theo học, chỉ cần sử dụng bảng LOP và bảng KETQUA.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Sử dụng câu lệnh SQL là: SELECT * FROM KETQUA WHERE MaHs = 10 để đưa ra thông tin học sinh và kết quả học tập của học sinh có MaHs = 10.",
          correctAnswer: false,
        },
      ],
    },
  ],
};
