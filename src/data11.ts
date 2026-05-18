import { Question, QuestionType } from "./types";

export const EXAM_SET_12 = {
  id: 12,
  title:
    "ĐỀ THI THỬ SỐ 9 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: "MYCIN là hệ chuyên gia trong lĩnh vực nào?",
      options: [
        { id: "A", text: "Y tế." },
        { id: "B", text: "Giáo dục." },
        { id: "C", text: "Nghiên cứu khoa học." },
        { id: "D", text: "Kinh doanh." },
      ],
      correctOptionId: "A",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hệ chuyên gia nào sau đây được thiết kế để phân tích hóa học nhằm dự đoán cấu trúc phân tử?",
      options: [
        { id: "A", text: "MYCIN." },
        { id: "B", text: "DENDRAL." },
        { id: "C", text: "PXDE." },
        { id: "D", text: "CaDet." },
      ],
      correctOptionId: "B",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng công cụ AI phân tích dữ liệu người dùng trên các sàn thương mại điện tử có thể gây ra rủi ro nào sau đây?",
      options: [
        { id: "A", text: "Giảm tính cá nhân hóa khi sử dụng các dịch vụ." },
        { id: "B", text: "Vi phạm quyền riêng tư của người dùng." },
        { id: "C", text: "Tăng số lượng quảng cáo không phù hợp nhu cầu." },
        {
          id: "D",
          text: "Gây khó khăn cho người dùng khi ra quyết định mua hàng.",
        },
      ],
      correctOptionId: "B",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một công ty thương mại điện tử muốn cải thiện trải nghiệm người dùng bằng cách ứng dụng công cụ trí tuệ nhân tạo (AI). Công ty nên lựa chọn ứng dụng AI vào hoạt động nào sau đây?",
      options: [
        {
          id: "A",
          text: "Hiển thị quảng cáo cho tất cả người dùng theo cách ngẫu nhiên.",
        },
        {
          id: "B",
          text: "Gợi ý sản phẩm cho người dùng dựa trên hành vi và lịch sử mua sắm.",
        },
        { id: "C", text: "Duy trì phương thức giao hàng truyền thống." },
        { id: "D", text: "Thanh toán bằng tiền mặt tại điểm nhận hàng." },
      ],
      correctOptionId: "B",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho chương trình sau:\nPython:\ns = "Hello123"\ncount = 0\nfor c in s:\n  if c.isdigit():\n    count += 1\nprint(count)\n\nC++:\n#include <iostream>\n#include <cctype>\nusing namespace std;\nint main() {\n  string s = "Hello123";\n  int count = 0;\n  for (char c : s) {\n    if (isdigit(c))\n      count++;\n  }\n  cout << count;\n  return 0;\n}\n\nĐáp án nào sau đây là kết quả xuất ra màn hình của chương trình trên?',
      options: [
        { id: "A", text: "3" },
        { id: "B", text: "5" },
        { id: "C", text: "0" },
        { id: "D", text: "2" },
      ],
      correctOptionId: "A",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây là chức năng chính của Modem trong hệ thống mạng?",
      options: [
        { id: "A", text: "Cấp phát địa chỉ IP." },
        { id: "B", text: "Kết nối mạng nội bộ với mạng Internet." },
        { id: "C", text: "Lưu trữ dữ liệu." },
        { id: "D", text: "Phát tín hiệu không dây." },
      ],
      correctOptionId: "B",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thiết bị nào sau đây kết nối có dây nhiều máy tính trong phòng thành mạng LAN, đảm bảo hiệu suất truyền dữ liệu cao?",
      options: [
        { id: "A", text: "Modem." },
        { id: "B", text: "Access point." },
        { id: "C", text: "Switch." },
        { id: "D", text: "Hub." },
      ],
      correctOptionId: "C",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây đúng khi nói đến băng thông trong mạng máy tính?",
      options: [
        { id: "A", text: "Số lượng thiết bị có thể kết nối." },
        {
          id: "B",
          text: "Lượng dữ liệu truyền đi trong một đơn vị thời gian.",
        },
        { id: "C", text: "Tốc độ xử lí của máy chủ trung tâm." },
        { id: "D", text: "Dung lượng ổ cứng của máy chủ." },
      ],
      correctOptionId: "B",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong mạng LAN, Long muốn chia sẻ một thư mục để các máy khác chỉ xem nội dung mà không được chỉnh sửa hoặc xóa. Long cần thiết lập quyền nào sau đây khi thực hiện chia sẻ thư mục?",
      options: [
        { id: "A", text: "Full Control." },
        { id: "B", text: "Read." },
        { id: "C", text: "Change." },
        { id: "D", text: "Write." },
      ],
      correctOptionId: "B",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Phương án nào sau đây không phải là một hạn chế khi giao tiếp trong không gian mạng?",
      options: [
        { id: "A", text: "Thiếu sự trung thực và độ tin cậy." },
        { id: "B", text: "Mở rộng khả năng tương tác." },
        { id: "C", text: "Thiếu tập trung." },
        { id: "D", text: "Đối mặt với các vấn đề bảo mật." },
      ],
      correctOptionId: "B",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Hành động nào sau đây cần thực hiện ngay lập tức khi vô tình chia sẻ thông tin sai lệch?",
      options: [
        { id: "A", text: "Xóa bài và không nói gì thêm." },
        { id: "B", text: "Đổ lỗi cho người khác." },
        { id: "C", text: "Chỉnh sửa lại bài đăng và xin lỗi." },
        { id: "D", text: "Ẩn bình luận của người góp ý." },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Sử dụng tên thật, hình đại diện rõ ràng và chia sẻ thông tin xác thực trên mạng thể hiện điều nào sau đây?",
      options: [
        { id: "A", text: "Mất an toàn dữ liệu cá nhân." },
        { id: "B", text: "Xây dựng hình ảnh cá nhân có trách nhiệm." },
        { id: "C", text: "Muốn trở thành người nổi tiếng." },
        { id: "D", text: "Muốn nhận được nhiều lượt theo dõi." },
      ],
      correctOptionId: "B",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nghề nào sau đây không thuộc nhóm nghề dịch vụ và quản trị CNTT?",
      options: [
        { id: "A", text: "Kỹ thuật viên phần cứng máy tính." },
        { id: "B", text: "Quản trị mạng." },
        { id: "C", text: "Bảo mật hệ thống thông tin." },
        { id: "D", text: "Lập trình viên phần mềm." },
      ],
      correctOptionId: "D",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Nghề bảo mật hệ thống thông tin đang có nhu cầu nguồn nhân lực cao trong thời đại số vì lí do nào sau đây?",
      options: [
        { id: "A", text: "Công việc đơn giản, không cần chuyên môn cao." },
        { id: "B", text: "Hầu hết các hệ thống dữ liệu đều tự động bảo mật." },
        {
          id: "C",
          text: "Dữ liệu số trở nên quan trọng, các mối đe dọa an ninh mạng phức tạp.",
        },
        {
          id: "D",
          text: "Mọi lĩnh vực sản xuất, đời sống đều cần người làm nghề bảo mật hệ thống.",
        },
      ],
      correctOptionId: "C",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Công ty X vừa bị mất toàn bộ dữ liệu do sự cố phần cứng, gây ảnh hưởng nghiêm trọng đến hoạt động kinh doanh. Để phòng tránh rủi ro tương tự, quản trị viên hệ thống CNTT cần trang bị kỹ năng nào sau đây?",
      options: [
        { id: "A", text: "Sửa chữa phần cứng, cài đặt phần mềm." },
        { id: "B", text: "Sao lưu và phục hồi dữ liệu." },
        { id: "C", text: "Kiến thức về mạng và hệ điều hành." },
        { id: "D", text: "Phân tích thiết kế hệ thống." },
      ],
      correctOptionId: "B",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ HTML nào sau đây dùng để nhúng video vào trang web?",
      options: [
        { id: "A", text: "<media>" },
        { id: "B", text: "<movie>" },
        { id: "C", text: "<video>" },
        { id: "D", text: "<embed>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính nào sau đây có thể được dùng với thẻ <table> để tạo đường viền cho bảng trong HTML?",
      options: [
        { id: "A", text: "border" },
        { id: "B", text: "align" },
        { id: "C", text: "href" },
        { id: "D", text: "cell" },
      ],
      correctOptionId: "A",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phần tử HTML nào sau đây có đủ thẻ mở và thẻ đóng?",
      options: [
        { id: "A", text: "<img>" },
        { id: "B", text: "<br>" },
        { id: "C", text: "<input>" },
        { id: "D", text: "<strong>" },
      ],
      correctOptionId: "D",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây định kiểu độ trong suốt của màu nền?",
      options: [
        { id: "A", text: "opacity" },
        { id: "B", text: "background-opacity" },
        { id: "C", text: "background-image" },
        { id: "D", text: "transparency" },
      ],
      correctOptionId: "A",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thành phần điều khiển trong biểu mẫu nào sau đây cho phép người dùng chọn một mục duy nhất trong danh sách các lựa chọn?",
      options: [
        { id: "A", text: "Checkbox" },
        { id: "B", text: "Textarea" },
        { id: "C", text: "Radio button" },
        { id: "D", text: "Text field" },
      ],
      correctOptionId: "C",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Lan viết mã HTML: <input type="email" name="email" placeholder="Nhập địa chỉ email"> để thu thập địa chỉ mail người dùng. Lan cần thêm thuộc tính nào sau đây vào lệnh trên để đảm bảo người dùng phải nhập địa chỉ email mới được phép gửi biểu mẫu?',
      options: [
        { id: "A", text: "style" },
        { id: "B", text: "type" },
        { id: "C", text: "hidden" },
        { id: "D", text: "required" },
      ],
      correctOptionId: "D",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Tâm muốn làm nổi bật các đoạn văn có class "highlight" bằng màu chữ đỏ. Mã CSS nào sau đây phù hợp?',
      options: [
        { id: "A", text: "#highlight { color: red; }" },
        { id: "B", text: ".highlight { color: red; }" },
        { id: "C", text: "highlight { color: red; }" },
        { id: "D", text: "*highlight { color: red; }" },
      ],
      correctOptionId: "B",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Minh muốn làm nổi bật các dòng chẵn trong bảng dữ liệu để dễ đọc hơn. Cậu cần sử dụng mã lệnh CSS nào sau đây?",
      options: [
        { id: "A", text: "tr:nth-child(even){ background-color: #e6f2ff }" },
        { id: "B", text: "td:even{ background-color: #e6f2ff }" },
        { id: "C", text: "table:even {background-color: #e6f2ff }" },
        { id: "D", text: "th:nth-line(even){ background-color: #e6f2ff }" },
      ],
      correctOptionId: "A",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Khi thiết kế nút gửi biểu mẫu, An cần sử dụng thuộc tính CSS nào sau đây cùng với :hover để tạo hiệu ứng màu nền chuyển đổi mượt mà khi người dùng rê chuột vào nút?",
      options: [
        { id: "A", text: "transition" },
        { id: "B", text: "display" },
        { id: "C", text: "overflow" },
        { id: "D", text: "align" },
      ],
      correctOptionId: "A",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Trường Trung học X triển khai hệ thống mạng có dây cho phòng máy tính với 20 thiết bị. Một số máy không thể truy cập Internet, trong khi các máy còn lại truy cập bình thường. Kĩ thuật viên kiểm tra dây mạng và thiết bị mạng nhưng vẫn chưa phát hiện lỗi. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Mạng có dây luôn đảm bảo tốc độ cao hơn mạng không dây trong mọi trường hợp.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Một số cổng trên bộ chia mạng (switch) bị lỗi có thể gây mất kết nối cho các thiết bị tương ứng.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Cần kiểm tra xem địa chỉ IP của các máy bị lỗi có bị trùng nhau hay không.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Kĩ thuật viên nên tắt modem và mở lại để tất cả các máy khôi phục được kết nối.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Lan được giao quản lý danh sách mượn sách của lớp. Ban đầu Lan dùng Word để lưu dữ liệu nhưng gặp khó khăn khi muốn lọc học sinh mượn quá hạn. Một người bạn gợi ý nên sử dụng hệ quản trị cơ sở dữ liệu để thực hiện việc quản lí mượn sách hiệu quả hơn. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Word là phần mềm soạn thảo văn bản nên không phù hợp lưu trữ dữ liệu lớn.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Các hệ quản trị cơ sở dữ liệu giúp kiểm soát thông tin theo bảng và quan hệ giữa dữ liệu.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Lan nghĩ rằng các hệ quản trị cơ sở dữ liệu luôn đòi hỏi phải biết lập trình nên không sử dụng.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Trong hệ quản trị cơ sở dữ liệu, Lan có thể tạo bảng MuonSach với các trường như Họ tên, Tên sách, Ngày mượn, Ngày trả để dễ dàng tra cứu học sinh mượn quá hạn.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Lớp của Hương được yêu cầu xây dựng một trang web giới thiệu trường học. Cô giáo yêu cầu phải có thanh điều hướng, nội dung chính, hình ảnh và phần chân trang. Một số nhóm chưa phân chia bố cục rõ ràng khiến trang khó theo dõi được cô giáo hỗ trợ cải thiện. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Trang web nên chia bố cục thành phần đầu, nội dung chính và chân trang.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Thanh điều hướng giúp người dùng truy cập nhanh đến các phần nội dung.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Khi tạo trang web bằng phần mềm trực tuyến, không cần quan tâm đến bố cục vì trình duyệt tự điều chỉnh.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Hương đề xuất thanh điều hướng nên đặt ở phần chân trang để người xem dễ theo dõi.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Bảng HoaDon chứa thông tin về các hóa đơn của khách hàng, gồm các trường chính: MaHD, MaKH, NgayLap, TongTien. Bạn Minh muốn lấy danh sách khách hàng có ít nhất một hóa đơn trong tháng 5 năm 2025. Một số ý kiến như sau:",
      subQuestions: [
        {
          id: "a",
          text: "Hàm DISTINCT loại bỏ các mã khách hàng trùng lặp trong kết quả.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Hàm MONTH và YEAR trích xuất tháng và năm từ trường ngày lập hóa đơn.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Câu lệnh có thể dùng được trên tất cả các hệ quản trị cơ sở dữ liệu mà không chỉnh sửa.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Để tìm mã khách hàng (MaKH) có hóa đơn với tổng tiền cao nhất, dùng lệnh: SELECT MaKH FROM HoaDon WHERE TongTien = (SELECT MAX(TongTien) FROM HoaDon);",
          correctAnswer: true,
        },
      ],
    },
  ],
};
