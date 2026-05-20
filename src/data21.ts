import { Question, QuestionType } from "./types";

export const EXAM_SET_22 = {
  id: 22,
  title:
    "SỞ GIÁO DỤC VÀ ĐÀO TẠO ĐẮK LẮK - CỤM CHUYÊN MÔN SỐ 8 - KỲ THI THỬ TỐT NGHIỆP THPT NĂM 2026 - Môn: TIN HỌC (Mã đề: 0501)",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: `Cho đoạn mã lệnh:\nPython C++\na = 10\nb = 20\na = a + b\nb = a - b\na = a - b\nprint(a, b)\nint a = 10, b = 20;\na = a + b;\nb = a - b;\na = a - b;\ncout << a << " " << b;\nKết quả in ra màn hình của đoạn mã trên là:`,
      options: [
        { id: "A", text: "10 20" },
        { id: "B", text: "20 10" },
        { id: "C", text: "20 30" },
        { id: "D", text: "30 10" },
      ],
      correctOptionId: "B",
    },

    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khai báo nào sau đây là đúng để liên kết với một tệp CSS bên ngoài?",
      options: [
        { id: "A", text: '<script src = "fit.css" value = "stylesheet">' },
        { id: "B", text: '<source href = "fit.css" style = "stylesheet">' },
        { id: "C", text: '<a href = "fit.css" style = "stylesheet">' },
        { id: "D", text: '<link href = "fit.css" rel = "stylesheet">' },
      ],
      correctOptionId: "D",
    },

    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phát biểu nào sau đây KHÔNG phải là ưu điểm của giao tiếp trong thế giới ảo?",
      options: [
        {
          id: "A",
          text: "Giao tiếp trong thế giới ảo giúp thuận tiện trong việc truyền tải cảm xúc.",
        },
        {
          id: "B",
          text: "Giao tiếp trong thế giới ảo có thể diễn ra mọi lúc, mọi nơi.",
        },
        {
          id: "C",
          text: "Giao tiếp trong thế giới ảo giúp tạo điều kiện thuận lợi cho việc lưu trữ thông tin.",
        },
        {
          id: "D",
          text: "Giao tiếp trong thế giới ảo cung cấp nhiều công cụ giao tiếp đa dạng.",
        },
      ],
      correctOptionId: "A",
    },

    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi tham gia mua sắm trực tuyến, phương án nào sau đây có thể là nhược điểm của hình thức này?",
      options: [
        {
          id: "A",
          text: "Không có dịch vụ chăm sóc khách hàng khi mua sắm trực tuyến.",
        },
        {
          id: "B",
          text: "Không được kiểm tra và đánh giá sản phẩm khi nhận hàng.",
        },
        {
          id: "C",
          text: "Nguy cơ bị lừa đảo hoặc mất thông tin cá nhân khi thực hiện thanh toán trực tuyến.",
        },
        {
          id: "D",
          text: "Sự khó khăn trong việc tìm kiếm sản phẩm và so sánh giá cả.",
        },
      ],
      correctOptionId: "C",
    },

    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content: `Cho đoạn mã lệnh:\nPython C++\nC = 0\nfor k in range (1, 10):\n if k % 3 == 0:\n  C = C + k\nprint(C)\nint C = 0;\nfor (int k = 1; k < 10; k++) {\n if (k % 3 == 0) {\n  C = C + k;\n }\n}\ncout << C;\nPhương án nào sau đây nêu đúng giá trị của C sau khi thực hiện đoạn chương trình trên?`,
      options: [
        { id: "A", text: "55" },
        { id: "B", text: "3" },
        { id: "C", text: "45" },
        { id: "D", text: "18" },
      ],
      correctOptionId: "D",
    },

    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cú pháp HTML nào sau đây là đúng để tạo ra một bảng có 2 dòng, mỗi dòng 1 ô?",
      options: [
        { id: "A", text: "<tbl><tr><th></th></tr><tr><td></td></tr></tbl>" },
        { id: "B", text: "<tbl><tr><td></td><td></td></tr></tbl>" },
        {
          id: "C",
          text: "<table><tr><th></th></tr><tr><td></td></tr></table>",
        },
        { id: "D", text: "<table><tr><td></td><td></td></tr></table>" },
      ],
      correctOptionId: "C",
    },

    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ nào sau đây có thể xuất hiện nhiều hơn một lần trong một trang web?",
      options: [
        { id: "A", text: "<body>" },
        { id: "B", text: "<html>" },
        { id: "C", text: "<head>" },
        { id: "D", text: "<p>" },
      ],
      correctOptionId: "D",
    },

    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Ứng dụng nào sau đây KHÔNG là ví dụ của AI hẹp?",
      options: [
        { id: "A", text: "Máy chấm công bằng nhận diện khuôn mặt" },
        { id: "B", text: "Hệ chuyên gia MYCIN tư vấn trong lĩnh vực y tế" },
        { id: "C", text: "Chương trình chơi cờ AlphaGo" },
        { id: "D", text: "Quản lí điểm của học sinh bằng sổ điểm điện tử" },
      ],
      correctOptionId: "D",
    },

    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây cho phép xác định nơi viết các lênh CSS trong nội bộ một trang web?",
      options: [
        { id: "A", text: "<stylesheet>" },
        { id: "B", text: "<style>" },
        { id: "C", text: "<link>" },
        { id: "D", text: "<script>" },
      ],
      correctOptionId: "B",
    },

    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cú pháp CSS nào sau đây là đúng để tất cả các màu nền của thẻ tiêu đề đều có màu xanh?",
      options: [
        { id: "A", text: 'h1 {background-color: "blue";}' },
        { id: "B", text: "h1. * {background-color: blue; }" },
        { id: "C", text: "all.h1 {background-color: blue; }" },
        { id: "D", text: "h1 {background-color: blue; }" },
      ],
      correctOptionId: "D",
    },

    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Lĩnh vực nào sau đây KHÔNG được phát triển mạnh nhờ ứng dụng của Trí tuệ nhân tạo (AI)?",
      options: [
        { id: "A", text: "Sản xuất thiết bị tiện ích thông minh" },
        { id: "B", text: "Điều khiển tự động" },
        { id: "C", text: "Xây dựng nhà, đường, cầu" },
        { id: "D", text: "Tài chính ngân hàng" },
      ],
      correctOptionId: "C",
    },

    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thành phần nào của biểu mẫu cho phép chọn được nhiều giá trị trong số nhiều lựa chọn?",
      options: [
        { id: "A", text: "radio" },
        { id: "B", text: "select" },
        { id: "C", text: "textbox" },
        { id: "D", text: "checkbox" },
      ],
      correctOptionId: "D",
    },

    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây được sử dụng để liệt kê các danh mục trong một danh sách?",
      options: [
        { id: "A", text: "<li>" },
        { id: "B", text: "<item>" },
        { id: "C", text: "<ol>" },
        { id: "D", text: "<ul>" },
      ],
      correctOptionId: "A",
    },

    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là kĩ năng KHÔNG cần thiết đối với nhân lực trong nghề bảo mật hệ thống thông tin?",
      options: [
        {
          id: "A",
          text: "Kĩ năng phát hiện và phòng ngừa các cuộc tấn công mạng.",
        },
        { id: "B", text: "Kĩ năng phân tích và đánh giá các rủi ro bảo bật." },
        {
          id: "C",
          text: "Kĩ năng phân tích dữ liệu và phát hiện lỗ hổng bảo mật.",
        },
        { id: "D", text: "Kĩ năng phân tích và quản trị CSDL." },
      ],
      correctOptionId: "D",
    },

    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây là đúng về giao thức FTP?",
      options: [
        { id: "A", text: "Là giao thức để duyệt web" },
        { id: "B", text: "Là giao thức để gửi email" },
        {
          id: "C",
          text: "Là giao thức để truyền tải tập tin giữa máy tính và máy chủ",
        },
        {
          id: "D",
          text: "Là giao thức để chia sẻ dữ liệu giữa các máy tính trong cùng mạng LAN",
        },
      ],
      correctOptionId: "C",
    },

    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Mệnh đề nào sau đây là SAI khi nói về việc kết nối máy tính và Access Point?",
      options: [
        { id: "A", text: "Tất cả Access Point khi truy cập đều cần mật khẩu." },
        {
          id: "B",
          text: "Access Point có thể cung cấp kết nối Internet cho nhiều máy tính cùng lúc.",
        },
        {
          id: "C",
          text: "Máy tính có thể kết nối với Access Point bằng cáp Ethernet hoặc Wi-fi.",
        },
        {
          id: "D",
          text: "Access Point cần được kết nối với Router hoặc Modem để cung cấp truy cập Internet.",
        },
      ],
      correctOptionId: "A",
    },

    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính nào sau đây được sử dụng để hiện thị các nút điều khiển start, stop và tăng giảm âm lượng cho một video?",
      options: [
        { id: "A", text: "start, stop và control" },
        { id: "B", text: "controls" },
        { id: "C", text: "start và volume" },
        { id: "D", text: "start, stop và volume" },
      ],
      correctOptionId: "B",
    },

    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây có chức năng cung cấp kết nối không dây cho các thành phần trong một mạng?",
      options: [
        { id: "A", text: "Hub" },
        { id: "B", text: "Switch" },
        { id: "C", text: "Access Point" },
        { id: "D", text: "Router" },
      ],
      correctOptionId: "C",
    },

    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Đối với nhóm nghề Sửa chữa và bảo trì máy tính, yêu cầu cần có kiến thức và kĩ năng gì?",
      options: [
        {
          id: "A",
          text: "Hiểu biết về lập trình máy tính và thành thạo một ngôn ngưc lập trình.",
        },
        { id: "B", text: "Nắm vững về quản lí dự án công nghệ thông tin." },
        {
          id: "C",
          text: "Kĩ năng sửa chữa và thay thế linh kiện phần cứng máy tính.",
        },
        { id: "D", text: "Kiến thức về phân tích dữ liệu." },
      ],
      correctOptionId: "C",
    },

    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong một cuộc họp trực tuyến, bạn Sơn nhận ra rằng một số người tham gia đang bị gián đoạn bởi tiếng ồn từ môi trường xung quanh. Phương án nào sau đây là hành động phù hợp để gìn giữ tính nhân văn và tôn trọng người khác?",
      options: [
        { id: "A", text: "Gửi một email sau cuộc họp nhắc nhở về vấn đề này." },
        {
          id: "B",
          text: "Phản ứng bằng cách nâng giọng lên để yêu cầu mọi người lắng nghe.",
        },
        {
          id: "C",
          text: "Gửi tin nhắn riêng đề nghị họ tắt mic trong lúc không phát biểu.",
        },
        {
          id: "D",
          text: "Gửi tin nhắn công khai nhắc nhở tất cả mọi người về vấn đề này.",
        },
      ],
      correctOptionId: "C",
    },

    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nhiệm vụ nào sau đây là công việc chính của một kĩ sư quản trị mạng?",
      options: [
        {
          id: "A",
          text: "Xây dựng các hệ thống quản lí CSDL trên mạng để lưu trữ thông tin quan trọng của doanh nghiệp.",
        },
        { id: "B", text: "Cài đặt phần cứng và phần mềm cho hệ thống mạng." },
        {
          id: "C",
          text: "Phát triển và triển khai các biện pháp bảo mật mạng để ngăn chặn các cuộc tấn công từ hacker.",
        },
        {
          id: "D",
          text: "Phân tích và xác định nhu cầu về hệ thống thông tin của tổ chức.",
        },
      ],
      correctOptionId: "B",
    },

    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cổng nào trên một thiết bị máy tính được dùng để cắm trực tiếp dây cáp mạng có đầu RJ45?",
      options: [
        { id: "A", text: "Cổng USB" },
        { id: "B", text: "Cổng Ethernet" },
        { id: "C", text: "Cổng HDMI" },
        { id: "D", text: "Cổng nguồn" },
      ],
      correctOptionId: "B",
    },

    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Có một tệp ảnh kích thước 600x800. Đoạn lệnh sau đây sẽ hiển thị ảnh có kích thước là bao nhiêu trên trình duyệt? <image src = "hnue.jpeg" alt "hnue" width = "300"/>',
      options: [
        { id: "A", text: "400x300" },
        { id: "B", text: "300x400" },
        { id: "C", text: "300x600" },
        { id: "D", text: "600x800" },
      ],
      correctOptionId: "B",
    },

    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây không là ứng dụng của AI?",
      options: [
        { id: "A", text: "Onedrive của Microsoft" },
        { id: "B", text: "Siri của Apple" },
        { id: "C", text: "ChatGPT." },
        { id: "D", text: "Google Assistant của Google" },
      ],
      correctOptionId: "A",
    },

    // TRUE/FALSE groups: Part II selected groups 1,2,5,6
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Gia đình bạn Kiên cần lắp đặt hệ thống mạng Internet để các thành viên trong nhà (diện tích 70 m2) có nhu cầu sử dụng bao gồm 03 máy tính để bàn và một số điện thoại thông minh. Ngoài ra, 03 máy tính này cần được kết nối với nhau để có thể truyền dữ liệu ngay cả khi không có Internet. Sau đây là một số nhận xét của bạn Kiên sau khi hệ thống đã được lắp đặt.",
      subQuestions: [
        {
          id: "a",
          text: "Có thể sử dụng cáp xoắn đôi để kết nối các máy tính thành một mạng LAN.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Có thể sử dụng một Access Point để cho phép truy cập Internet không dây.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Sử dụng mạng không dây sẽ có tốc độ nhanh hơn sử dụng cáp xoắn đôi khi thực hiện chia sẻ các tệp trong trường hợp không có Internet.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Có thể sử dụng một Switch để kết nối giữa các máy tính với nhau và giữa các máy tính với Internet.",
          correctAnswer: true,
        },
      ],
    },

    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh sử dụng phần mềm hệ quản trị CSDL để tạo lập một CSDL bán hàng bao gồm bảng CHI_TIẾT_HÓA_ĐƠN lưu thông tin chi tiết về các mặt hàng và số lượng được mua trong các đơn hàng. Trong đó, trường Ma_hoa_don là khóa chính của bảng HÓA_ĐƠN (lưu thông tin chung của hóa đơn). Trường Ma_mat_hang là khóa chính của bảng MẶT_HÀNG (lưu thông tin về các mặt hàng). Trong một hóa đơn có thể có nhiều mặt hàng được mua, một mặt hàng có thể được mua trong nhiều đơn hàng.",
      subQuestions: [
        {
          id: "a",
          text: "Định nghĩa trường Ma_hoa_don và trường Ma_mat_hang với tên là ma_hoa_don, Ma_mat_hang và kiểu dữ liệu là chuỗi kí tự.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Do hai trường Ma_hoa_don và Ma_mat_hang là khóa chính của các bảng khác nên chọn hai trường này và thiết đặt làm khóa chính cho bảng.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Bảng này lưu trữ thông tin về đơn hàng nên chọn trường Ma_hoa_don và thiết đặt làm khóa chính cho bảng.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Chọn hai trường Ma_hoa_don, Ma_mat_hang và thiết đặt chúng thành khóa của bảng.",
          correctAnswer: true,
        },
      ],
    },

    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh sử dụng phần mềm hệ quản trị CSDL để tạo lập một CSDL quản lí nhân viên trong một công ty bao gồm bảng NHAN_VIEN lưu thông tin về các nhân viên. Trong đó, mỗi nhân viên có một mã nhân viên khác nhau theo quy định riêng của công ty. Mỗi nhân viên có một số thẻ căn cước công dân duy nhất.",
      subQuestions: [
        {
          id: "a",
          text: "Mỗi nhân viên có một mã nhân viên duy nhất và có số căn cước công dân riêng nên hai trường Ma_nhan_vien và Can_cuoc_cong_dan phải là khóa chính của bảng NHAN_VIEN.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Trường Can_cuoc_cong_dan có thể chọn làm khóa chính của bảng NHAN_VIEN vì mỗi nhân viên có số thẻ căn cước công dân khác nhau.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Định nghĩa trường Can_cuoc_cong_dan và So_dien_thoai với tên là Can_cuoc_cong_dan, So_dien_thoai và kiểu dữ liệu là số nguyên.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Định nghĩa trường Ma_nhan_vien với tên Ma_nhan_vien, có kiểu dữ liệu là kiểu kí tự có độ dài cố định và thiết đặt làm khóa chính cho bảng.",
          correctAnswer: true,
        },
      ],
    },

    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Lớp em có dự án bán hàng trực tuyến một số sản phẩm thủ công để có kinh phí giúp trẻ em ở một huyện vùng cao có bữa ăn đủ dinh dưỡng. Nhóm phụ trách xây dựng website đã thực hiện tham khảo từ Internet và đưa ra một số báo cáo trong buổi họp nhóm như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Các phần mềm tạo website miễn phí không cho phép tạo website để bán hàng trực tuyến.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Tại đầu trang của trang chủ bắt buộc phải có logo, tên của website và kèm theo khẩu hiệu của dự án.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Tại trang chủ, nhóm xây dựng website muốn hiển thị nhiều hình ảnh minh họa và kèm chú thích tình hình bữa ăn không đảm bảo dinh dưỡng của các em. Có từ 7 đến 10 hình ảnh tự động luân phiên thanh đổi sau mỗi khoảng 3 giây. Nhóm xây dựng website có thể sử dụng đối tượng thanh trượt hình ảnh trong phần mềm tạo website để thực hiện yêu cầu này.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Tại trang nhận đơn hàng, sử dụng biểu mẫu để khách điền thông tin họ tên, địa chỉ nhận hàng, số điện thoại liên hệ, các sản phẩm cần mua và số lượng. Sử dụng đối tượng ô đánh dấu để cho khách hàng lựa chọn “Không cần gọi điền xác nhận đơn hàng”.",
          correctAnswer: true,
        },
      ],
    },
  ],
};

export default EXAM_SET_22;
