import { Question, QuestionType } from "./types";

export const EXAM_SET_13 = {
  id: 13,
  title:
    "ĐỀ THI THỬ SỐ 10 - TẶNG CÁC ĐỘC GIẢ CỦA CUỐN SÁCH Giải mã kiến thức thi TN THPT Môn Tin Học",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      content: "Đặc điểm nào sau đây của trí tuệ nhân tạo là hạn chế?",
      options: [
        { id: "A", text: "Không bao giờ mắc phải lỗi sai sót." },
        { id: "B", text: "Tự hiểu mọi ngôn ngữ mà không học." },
        { id: "C", text: "Phụ thuộc chất lượng dữ liệu huấn luyện." },
        { id: "D", text: "Thể hiện cảm xúc như người." },
      ],
      correctOptionId: "C",
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây phản ánh đúng ưu điểm của AI?",
      options: [
        { id: "A", text: "Thực hiện công việc lặp lại rất nhanh." },
        { id: "B", text: "Luôn luôn hoạt động mà không sai sót." },
        { id: "C", text: "Thay thế con người hoàn toàn trong mọi việc?" },
        { id: "D", text: "Chỉ có thể sử dụng khi có mạng Internet." },
      ],
      correctOptionId: "A",
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phát biểu nào sau đây đúng về hệ thống nhận diện khuôn mặt?",
      options: [
        { id: "A", text: "Chỉ hoạt động với người đeo khẩu trang." },
        { id: "B", text: "Không thể phân biệt các khuôn mặt khác." },
        { id: "C", text: "Có thể nhận diện trong nhiều điều kiện." },
        { id: "D", text: "Chỉ nhận diện khi người đứng yên yên." },
      ],
      correctOptionId: "C",
    },
    {
      id: 4,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "AI trong trợ lí ảo như Siri hay Google Assistant có chức năng nào?",
      options: [
        { id: "A", text: "Tính toán tốc độ kết nối mạng Internet." },
        { id: "B", text: "Chỉ phát nhạc theo danh sách có sẵn." },
        { id: "C", text: "Hiểu và trả lời câu hỏi bằng giọng nói." },
        { id: "D", text: "Thay thế chức năng của camera điện thoại." },
      ],
      correctOptionId: "C",
    },
    {
      id: 5,
      type: QuestionType.SINGLE_CHOICE,
      content:
        'Cho chương trình sau:\nPython:\na = [1, 2, 3, 4, 5]\na.reverse()\nfor x in a:\n  print(x,end=" ")\n\nC++:\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n int a[] = {1, 2, 3, 4, 5};\n reverse(a, a + 5);\n for (int i = 0; i < 5; i++)\n cout << a[i] << " ";\n return 0;\n}\n\nĐáp án nào sau đây là kết quả xuất ra màn hình của chương trình trên?',
      options: [
        { id: "A", text: "12345" },
        { id: "B", text: "[5,4,3,2,1]" },
        { id: "C", text: "5 4 3 2 1" },
        { id: "D", text: "[1,2,3,4,5]" },
      ],
      correctOptionId: "C",
    },
    {
      id: 6,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Một học sinh kết nối máy tính với mạng LAN bằng cáp mạng nhưng không truy cập được Internet. Nguyên nhân nào dưới đây hợp lí nhất?",
      options: [
        { id: "A", text: "Cáp mạng bị đứt hoàn toàn." },
        { id: "B", text: "Thiết bị chưa cấp quyền truy cập mạng Wi-Fi." },
        { id: "C", text: "Máy tính chưa được cấp địa chỉ IP hợp lệ." },
        { id: "D", text: "Trình duyệt bị lỗi." },
      ],
      correctOptionId: "C",
    },
    {
      id: 7,
      type: QuestionType.SINGLE_CHOICE,
      content: "Nguyên nhân nào sau đây có thể khiến tín hiệu Wi-Fi yếu đi?",
      options: [
        { id: "A", text: "Sử dụng cáp mạng đạt chuẩn." },
        { id: "B", text: "Có nhiều vật cản giữa thiết bị và Modem." },
        { id: "C", text: "Sử dụng mật khẩu quá dài." },
        { id: "D", text: "Bật chế độ máy bay." },
      ],
      correctOptionId: "B",
    },
    {
      id: 8,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây là ưu điểm của mạng không dây?",
      options: [
        { id: "A", text: "Dễ dàng giữ kết nối khi di chuyển thiết bị." },
        { id: "B", text: "Tốc độ truyền tải cao hơn mạng có dây." },
        { id: "C", text: "Không cần dùng đến router." },
        { id: "D", text: "Không cần bảo mật mạng." },
      ],
      correctOptionId: "A",
    },
    {
      id: 9,
      type: QuestionType.SINGLE_CHOICE,
      content: "Phương án nào sau đây mô tả đúng chức năng của Mobile Hotspot?",
      options: [
        { id: "A", text: "Phát nhạc và video không dây." },
        { id: "B", text: "Mở khóa thiết bị từ xa qua mạng." },
        { id: "C", text: "Tạo điểm truy cập Internet cho thiết bị khác." },
        { id: "D", text: "Lưu trữ dữ liệu đám mây cá nhân." },
      ],
      correctOptionId: "C",
    },
    {
      id: 10,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giao tiếp có tính nhân văn trong không gian mạng không bao gồm hành vi nào sau đây?",
      options: [
        { id: "A", text: "Tôn trọng sự khác biệt." },
        { id: "B", text: "Đồng cảm với người gặp khó khăn." },
        { id: "C", text: "Kích động thù ghét giữa các nhóm." },
        { id: "D", text: "Khuyến khích hỗ trợ cộng đồng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thể hiện nào sau đây đúng trách nhiệm của cá nhân khi tham gia diễn đàn học tập trực tuyến?",
      options: [
        { id: "A", text: "Thể hiện quan điểm cá nhân bằng mọi cách." },
        {
          id: "B",
          text: "Bình luận bằng các biểu tượng để giảm thời gian gõ.",
        },
        { id: "C", text: "Trả lời có lí lẽ, tôn trọng bạn học và giáo viên." },
        { id: "D", text: "Tránh tranh luận với người không cùng quan điểm." },
      ],
      correctOptionId: "C",
    },
    {
      id: 12,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Người có trách nhiệm ứng xử nhân văn khi giao tiếp trên mạng cần thể hiện điều nào sau đây?",
      options: [
        { id: "A", text: "Đáp trả lại lời xúc phạm ngay lập tức." },
        {
          id: "B",
          text: "Chỉ chia sẻ điều mình thích mà không cần quan tâm người khác.",
        },
        { id: "C", text: "Biết lắng nghe, thấu hiểu và ứng xử đúng mực." },
        { id: "D", text: "Tránh tất cả các cuộc trò chuyện mạng." },
      ],
      correctOptionId: "C",
    },
    {
      id: 13,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong nhóm nghề CNTT, kỹ thuật viên phần cứng có nhiệm vụ nào sau đây?",
      options: [
        { id: "A", text: "Lắp ráp, sửa chữa các thiết bị máy tính." },
        {
          id: "B",
          text: "Thiết kế giao diện website và trải nghiệm người dùng (UI/UX).",
        },
        { id: "C", text: "Soạn thảo hợp đồng và quản lý hồ sơ hành chính." },
        {
          id: "D",
          text: "Hỗ trợ người dùng cài đặt phần mềm văn phòng qua điện thoại.",
        },
      ],
      correctOptionId: "A",
    },
    {
      id: 14,
      type: QuestionType.SINGLE_CHOICE,
      content: "Nghề nào sau đây thuộc nhóm nghề quản trị trong CNTT?",
      options: [
        { id: "A", text: "Quản lý dự án CNTT." },
        { id: "B", text: "Kỹ thuật viên lắp ráp máy tính." },
        { id: "C", text: "Lập trình viên phát triển ứng dụng di động." },
        { id: "D", text: "Nhân viên nhập liệu văn phòng." },
      ],
      correctOptionId: "A",
    },
    {
      id: 15,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Kỹ năng nào sau đây cần thiết cho người làm nghề dịch vụ và quản trị CNTT?",
      options: [
        { id: "A", text: "Quản lý và giao tiếp hiệu quả." },
        { id: "B", text: "Làm vườn và chăm sóc động vật." },
        { id: "C", text: "Cắt may và thiết kế thời trang." },
        { id: "D", text: "Nấu ăn và pha chế đồ uống." },
      ],
      correctOptionId: "A",
    },
    {
      id: 16,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Cặp thẻ nào sau đây được dùng để tạo bảng trong thiết kế trang Web?",
      options: [
        { id: "A", text: "<table>…</table>" },
        { id: "B", text: "<ol>…</ol>" },
        { id: "C", text: "<tr>…</tr>" },
        { id: "D", text: "<ul>…</ul>" },
      ],
      correctOptionId: "A",
    },
    {
      id: 17,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Trong HTML, thẻ nào sau đây được sử dụng để đánh dấu xóa bằng nét gạch giữa chữ?",
      options: [
        { id: "A", text: "<strong>" },
        { id: "B", text: "<u>" },
        { id: "C", text: "<del>" },
        { id: "D", text: "<mark>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 18,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ HTML nào sau đây được dùng để định nghĩa tiêu đề của cột trong bảng?",
      options: [
        { id: "A", text: "<td>" },
        { id: "B", text: "<th>" },
        { id: "C", text: "<tr>" },
        { id: "D", text: "<title>" },
      ],
      correctOptionId: "B",
    },
    {
      id: 19,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thẻ nào sau đây được sử dụng để chia nội dung trang web thành các khung (frames)?",
      options: [
        { id: "A", text: "<section>" },
        { id: "B", text: "<div>" },
        { id: "C", text: "<frameset>" },
        { id: "D", text: "<main>" },
      ],
      correctOptionId: "C",
    },
    {
      id: 20,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Loại điều khiển nào sau đây phù hợp để người dùng chọn nhiều mục trong danh sách?",
      options: [
        { id: "A", text: '<input type="radio">' },
        { id: "B", text: "<select multiple>" },
        { id: "C", text: "<textarea>" },
        { id: "D", text: '<input type="text">' },
      ],
      correctOptionId: "B",
    },
    {
      id: 21,
      type: QuestionType.SINGLE_CHOICE,
      content: "Thẻ <legend> trong biểu mẫu có vai trò nào sau đây?",
      options: [
        {
          id: "A",
          text: "Xác định mô tả cho nhóm điều khiển được bao bởi <fieldset>.",
        },
        { id: "B", text: "Hiển thị nội dung thay thế khi biểu mẫu lỗi." },
        { id: "C", text: "Chỉ định tiêu đề của toàn trang." },
        { id: "D", text: "Tạo liên kết đến biểu mẫu khác." },
      ],
      correctOptionId: "A",
    },
    {
      id: 22,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Thuộc tính CSS nào sau đây xác định cách hiển thị các phần tử trong biểu mẫu?",
      options: [
        { id: "A", text: "visibility" },
        { id: "B", text: "display" },
        { id: "C", text: "position" },
        { id: "D", text: "float" },
      ],
      correctOptionId: "B",
    },
    {
      id: 23,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Câu lệnh CSS nào sau đây làm cho danh sách không hiển thị ký hiệu đầu dòng?",
      options: [
        { id: "A", text: "list-decoration: none;" },
        { id: "B", text: "text-decoration: none;" },
        { id: "C", text: "list-style-type: none;" },
        { id: "D", text: "bullet: none;" },
      ],
      correctOptionId: "C",
    },
    {
      id: 24,
      type: QuestionType.SINGLE_CHOICE,
      content:
        "Giả sử bạn muốn biểu mẫu có các khung nhập liệu cách đều nhau theo chiều dọc, thuộc tính nào nên sử dụng?",
      options: [
        { id: "A", text: "line-height" },
        { id: "B", text: "padding" },
        { id: "C", text: "margin-bottom" },
        { id: "D", text: "vertical-align" },
      ],
      correctOptionId: "C",
    },
    {
      id: 25,
      type: QuestionType.TRUE_FALSE,
      content:
        "Một nhóm học sinh tổ chức hoạt động chia sẻ dữ liệu giữa các máy tính trong cùng một lớp học thông qua kết nối mạng LAN nội bộ. Tuy nhiên, một vài máy không thể truy cập vào thư mục chia sẻ của các máy khác. Các bạn cần xác định nguyên nhân và cách khắc phục.",
      subQuestions: [
        {
          id: "a",
          text: "Mạng LAN chỉ hoạt động nếu có kết nối Internet.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Có thể một số máy đã tắt chức năng chia sẻ trong cài đặt mạng.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Cần kiểm tra nhóm mạng (Workgroup) hoặc địa chỉ IP của các máy.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Giải pháp đầu tiên nên làm là cài lại hệ điều hành cho các máy bị lỗi để khắc phục.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 26,
      type: QuestionType.TRUE_FALSE,
      content:
        "Tổ học sinh A muốn lưu trữ thông tin khảo sát sở thích học tập bằng Google Forms. Sau khi thu thập, nhóm xuất dữ liệu ra bảng tính và thảo luận cách lưu trữ, phân tích kết quả theo từng lớp. Một bạn đề xuất dùng cơ sở dữ liệu để dễ truy vấn, thống kê và bảo mật dữ liệu hơn.",
      subQuestions: [
        {
          id: "a",
          text: "Google Forms là hệ cơ sở dữ liệu dùng để xử lí thống kê.",
          correctAnswer: false,
        },
        {
          id: "b",
          text: "Một cơ sở dữ liệu có thể được tạo ra từ nguồn dữ liệu khảo sát.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Dữ liệu thu thập từ biểu mẫu có thể nhập vào các hệ quản trị cơ sở dữ liệu để truy vấn.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Sử dụng hệ cơ sở dữ liệu giúp dễ dàng tìm học sinh có cùng sở thích từ nhiều lớp.",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 27,
      type: QuestionType.TRUE_FALSE,
      content:
        "Nhóm bạn Mai sử dụng phần mềm thiết kế web để tạo trang giới thiệu câu lạc bộ học thuật. Nhóm dùng công cụ tạo danh sách để liệt kê hoạt động, công cụ tạo bảng để thể hiện lịch sinh hoạt và khung nội dung để hiển thị video minh họa.",
      subQuestions: [
        {
          id: "a",
          text: "Danh sách và bảng là hai thành phần thường được dùng để tổ chức nội dung.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Tạo danh sách trong phần mềm web yêu cầu viết mã HTML phức tạp.",
          correctAnswer: false,
        },
        {
          id: "c",
          text: "Bảng có thể dùng để hiển thị thông tin theo hàng và cột rõ ràng.",
          correctAnswer: true,
        },
        {
          id: "d",
          text: "Trong khung nội dung không thể nhúng video hoặc trang web khác vào trang chính.",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 28,
      type: QuestionType.TRUE_FALSE,
      content:
        "Lan đang làm việc với cơ sở dữ liệu quản lý bán hàng, trong đó có hai bảng: HoaDon và ChiTietHD. Lan cần tìm các sản phẩm được khách hàng đặt mua trong ít nhất 6 hóa đơn khác nhau.",
      subQuestions: [
        {
          id: "a",
          text: "Khi tạo bảng ChiTietHD cần tạo khóa ngoài MaHD liên kết đến bảng HoaDon.",
          correctAnswer: true,
        },
        {
          id: "b",
          text: "Mệnh đề HAVING lọc các sản phẩm có số lần đặt nhiều hơn 5.",
          correctAnswer: true,
        },
        {
          id: "c",
          text: "Có thể không cần dùng GROUP BY vẫn giữ nguyên ý nghĩa câu truy vấn.",
          correctAnswer: false,
        },
        {
          id: "d",
          text: "Nếu muốn giới hạn truy vấn chỉ xét các hóa đơn trong năm 2024, có thể bổ sung điều kiện lọc ở mệnh đề WHERE như SELECT MaSP, COUNT(MaHD) AS SoLanDat FROM ChiTietHD WHERE YEAR(HoaDon.NgayLap) = 2024 GROUP BY MaSP HAVING COUNT(MaHD) > 5;",
          correctAnswer: false,
        },
      ],
    },
  ],
};
