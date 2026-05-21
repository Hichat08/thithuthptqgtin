import { Question, QuestionType } from "./types";
import { EXAM_SET_2 } from "./data1";
import { EXAM_SET_3 } from "./data2";
import { EXAM_SET_4 } from "./data3";
import { EXAM_SET_5 } from "./data4";
import { EXAM_SET_6 } from "./data5";
import { EXAM_SET_7 } from "./data6";
import { EXAM_SET_8 } from "./data7";
import { EXAM_SET_9 } from "./data8";
import { EXAM_SET_10 } from "./data9";
import { EXAM_SET_11 } from "./data10";
import { EXAM_SET_12 } from "./data11";
import { EXAM_SET_13 } from "./data12";
import { EXAM_SET_14 } from "./data13";
import { EXAM_SET_15 } from "./data14";
import { EXAM_SET_16 } from "./data15";
import { EXAM_SET_17 } from "./data16";
import { EXAM_SET_18 } from "./data17";
import { EXAM_SET_19 } from "./data18";
import { EXAM_SET_20 } from "./data19";
import { EXAM_SET_21 } from "./data20";
import { EXAM_SET_22 } from "./data21";
import { EXAM_SET_23 } from "./data22";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const rawQuestions: Question[] = [
  {
    id: 1,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Cho khai báo CSS sau: padding: 10px 20px; Khi áp dụng khai báo trên, khoảng cách vùng đệm của các cạnh được thiết lập là:",
    options: [
      { id: "A", text: "Cạnh trái là 10px; ba cạnh còn lại là 20px." },
      { id: "B", text: "Cạnh trên là 10px; ba cạnh còn lại là 20px." },
      {
        id: "C",
        text: "Cạnh trên và cạnh phải là 10px; cạnh dưới và cạnh trái là 20px.",
      },
      {
        id: "D",
        text: "Cạnh trên và cạnh dưới là 10px; cạnh trái và cạnh phải là 20px.",
      },
    ],
    correctOptionId: "D",
  },
  {
    id: 2,
    type: QuestionType.SINGLE_CHOICE,
    content:
      'Cho phần tử HTML sau: `<p id="main" class="box highlight">Nội dung</p>`. Trong CSS, giả sử không sử dụng từ khóa !important, bộ chọn nào sau đây có độ ưu tiên cao nhất đối với phần tử trên?',
    options: [
      { id: "A", text: ".highlight" },
      { id: "B", text: "#main" },
      { id: "C", text: "p" },
      { id: "D", text: ".box" },
    ],
    correctOptionId: "B",
  },
  {
    id: 3,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong ngôn ngữ HTML, phát biểu nào sau đây là sai khi nói về thẻ <iframe>?",
    options: [
      {
        id: "A",
        text: "Cung cấp một khung nhìn để nhúng một tài liệu khác vào trang web hiện tại.",
      },
      {
        id: "B",
        text: "Thiết lập kích thước vùng hiển thị thông qua hai thuộc tính width và height.",
      },
      {
        id: "C",
        text: "Cho phép hiển thị nội dung từ mọi website trên Internet mà không có ngoại lệ.",
      },
      {
        id: "D",
        text: "Sử dụng thuộc tính src để xác định địa chỉ URL của nội dung cần nhúng.",
      },
    ],
    correctOptionId: "C",
  },
  {
    id: 4,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong biểu mẫu HTML, để người dùng chỉ được phép chọn duy nhất một phương án trong một nhóm các lựa chọn, ta sử dụng loại điều khiển nào sau đây?",
    options: [
      { id: "A", text: '`<input type="checkbox">`' },
      { id: "B", text: "`<select multiple>`" },
      { id: "C", text: "`<textarea>`" },
      { id: "D", text: '`<input type="radio">`' },
    ],
    correctOptionId: "D",
  },
  {
    id: 5,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Hành vi nào sau đây thể hiện sự tôn trọng người khác khi tham gia không gian mạng?",
    options: [
      { id: "A", text: "Bình luận xúc phạm khi không đồng ý với quan điểm." },
      {
        id: "B",
        text: "Đăng tải thông tin cá nhân của người khác khi chưa được phép.",
      },
      { id: "C", text: "Cố tình lan truyền tin đồn chưa được kiểm chứng." },
      {
        id: "D",
        text: "Sử dụng lời lẽ lịch sự, văn minh khi trao đổi ý kiến.",
      },
    ],
    correctOptionId: "D",
  },
  {
    id: 6,
    type: QuestionType.SINGLE_CHOICE,
    content: "Hoạt động nào sau đây có sử dụng trí tuệ nhân tạo?",
    options: [
      {
        id: "A",
        text: "Xây dựng kho học liệu số để học sinh tra cứu bài giảng và tài liệu ôn tập trực tuyến.",
      },
      {
        id: "B",
        text: "Sử dụng phần mềm chuyên dụng để tính toán điểm trung bình và xếp loại học lực.",
      },
      {
        id: "C",
        text: "Tổ chức thi trắc nghiệm trên máy tính để chấm điểm theo đáp án cố định và lưu trữ kết quả.",
      },
      {
        id: "D",
        text: "Sử dụng hệ thống học tập thích ứng để tự động điều chỉnh lộ trình học cho từng cá nhân.",
      },
    ],
    correctOptionId: "D",
  },
  {
    id: 7,
    type: QuestionType.SINGLE_CHOICE,
    content: `Chọn một trong hai ngôn ngữ Python hoặc C++ để xem xét đoạn chương trình sau:

Python:
\`\`\`python
def f(x):
    n = len(x)
    s = 0
    for i in range(n):
        if i == 0:
            s += 1
        else:
            if x[i-1] != x[i]:
                s += 1
    return s
\`\`\`

C++:
\`\`\`cpp
int f(string x) {
    int s = 0;
    for (int i = 0; i < x.size(); i++) {
        if (i == 0) {
            s++;
        } else {
            if (x[i-1] != x[i]) {
                s++;
            }
        }
    }
    return s;
}
\`\`\`

Khi x = "abbaabba" thì giá trị của hàm f(x) trả về giá trị nào sau đây?`,
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "5" },
      { id: "C", text: "8" },
      { id: "D", text: "4" },
    ],
    correctOptionId: "B",
  },
  {
    id: 8,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Phương án nào sau đây thể hiện điểm khác biệt cơ bản giữa địa chỉ MAC và địa chỉ IP?",
    options: [
      {
        id: "A",
        text: "Địa chỉ MAC dùng để định danh tên miền, địa chỉ IP định danh card mạng.",
      },
      {
        id: "B",
        text: "Địa chỉ MAC có thể thay đổi theo vị trí địa lý, địa chỉ IP là cố định không thay đổi.",
      },
      {
        id: "C",
        text: "Địa chỉ MAC là địa chỉ vật lý của thiết bị, địa chỉ IP là địa chỉ logic trong mạng.",
      },
      {
        id: "D",
        text: "Địa chỉ MAC gồm các con số thập phân, địa chỉ IP gồm các chữ cái.",
      },
    ],
    correctOptionId: "C",
  },
  {
    id: 9,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong vai trò là nhân viên phụ trách công nghệ thông tin tại một doanh nghiệp nhỏ, phương án nào dưới đây là giải pháp phù hợp nhất để đảm bảo hệ thống máy tính hoạt động ổn định lâu dài?",
    options: [
      {
        id: "A",
        text: "Thực hiện bảo trì định kỳ gồm cập nhật phần mềm, kiểm tra phần cứng và quét virus.",
      },
      {
        id: "B",
        text: "Cài đặt lại hệ điều hành mỗi khi máy tính phát sinh sự cố.",
      },
      {
        id: "C",
        text: "Ngắt kết nối Internet để hạn chế nguy cơ tấn công từ bên ngoài.",
      },
      {
        id: "D",
        text: "Thay mới toàn bộ máy tính khi xuất hiện lỗi trong quá trình sử dụng.",
      },
    ],
    correctOptionId: "A",
  },
  {
    id: 10,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Thuật ngữ nào sau đây đề cập đến những hình ảnh, video hoặc đoạn ghi âm giả mạo do trí tuệ nhân tạo (AI) tạo ra mà con người rất khó nhận biết?",
    options: [
      { id: "A", text: "Người máy Cobot." },
      { id: "B", text: "Hệ chuyên gia y tế." },
      { id: "C", text: "Công nghệ Deepfake." },
      { id: "D", text: "Chatbot thông minh." },
    ],
    correctOptionId: "C",
  },
  {
    id: 11,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Học sinh lớp 12 tham gia một ngày hội tư vấn tuyển sinh – hướng nghiệp do các trường đại học tổ chức. Phương án nào dưới đây là mục tiêu chính của học sinh khi tham gia hoạt động này?",
    options: [
      {
        id: "A",
        text: "Thực hiện đăng ký nhập học ngay tại gian hàng của trường đại học.",
      },
      {
        id: "B",
        text: "Tìm hiểu thông tin về ngành học và chương trình đào tạo phù hợp.",
      },
      {
        id: "C",
        text: "Thu thập nhiều quà tặng và tài liệu quảng bá của các trường.",
      },
      {
        id: "D",
        text: "Giao lưu, chụp ảnh kỷ niệm cùng bạn bè và sinh viên tham dự.",
      },
    ],
    correctOptionId: "B",
  },
  {
    id: 12,
    type: QuestionType.SINGLE_CHOICE,
    content: "Thiết bị nào sau đây không phải là thiết bị mạng?",
    options: [
      { id: "A", text: "Access Point." },
      { id: "B", text: "Repeater." },
      { id: "C", text: "Scanner." },
      { id: "D", text: "Switch." },
    ],
    correctOptionId: "C",
  },
  {
    id: 13,
    type: QuestionType.SINGLE_CHOICE,
    content: "Trong HTML5, đoạn mã nào sau đây liên kết đúng tệp CSS ngoài?",
    options: [
      { id: "A", text: '`<link type="text/css" src="style.css">`' },
      { id: "B", text: '`<link rel="stylesheet" href="style.css">`' },
      { id: "C", text: '`<link rel="stylesheet" src="style.css">`' },
      { id: "D", text: '`<style src="style.css"></style>`' },
    ],
    correctOptionId: "B",
  },
  {
    id: 14,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Hành vi nào sau đây bị coi là vi phạm pháp luật trên không gian mạng?",
    options: [
      { id: "A", text: "Chia sẻ kiến thức hữu ích từ các nguồn đáng tin cậy." },
      {
        id: "B",
        text: "Tôn trọng quyền riêng tư của người khác khi sử dụng mạng.",
      },
      {
        id: "C",
        text: "Cố ý phát tán phần mềm độc hại để gây thiệt hại cho người khác.",
      },
      { id: "D", text: "Tham gia thảo luận với thái độ lịch sự, văn minh." },
    ],
    correctOptionId: "C",
  },
  {
    id: 15,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong ngôn ngữ định dạng CSS, phương án nào sau đây là thuộc tính được dùng để thiết lập độ dày của đường viền cho một phần tử HTML?",
    options: [
      { id: "A", text: "border-width" },
      { id: "B", text: "border-radius" },
      { id: "C", text: "border-color" },
      { id: "D", text: "border-style" },
    ],
    correctOptionId: "A",
  },
  {
    id: 16,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Khi máy tính không truy cập được mạng nội bộ (LAN), phương án nào sau đây không phải là bước xử lí ban đầu của kĩ thuật viên Công nghệ thông tin?",
    options: [
      { id: "A", text: "Kiểm tra dây cáp mạng kết nối." },
      { id: "B", text: "Cài lại hệ điều hành máy tính." },
      { id: "C", text: "Khởi động lại thiết bị mạng (Switch/Router)." },
      { id: "D", text: "Kiểm tra địa chỉ IP của máy." },
    ],
    correctOptionId: "B",
  },
  {
    id: 17,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Giả sử trang web có 3 phần tử `<section>` cần được hiển thị thành 3 cột có kích thước bằng nhau trên cùng một hàng. Để thực hiện điều này đồng thời vẫn cho phép thiết lập chiều cao (height) và vùng đệm (padding) cho từng cột, khai báo CSS nào sau đây là phù hợp nhất?",
    options: [
      { id: "A", text: "`section { width: 33.3%; display: list-item; }`" },
      { id: "B", text: "`section { width: 33.3%; display: inline-block; }`" },
      { id: "C", text: "`section { width: 33.3%; display: block; }`" },
      { id: "D", text: "`section { width: 33.3%; display: inline; }`" },
    ],
    correctOptionId: "B",
  },
  {
    id: 18,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Phương án nào sau đây là đúng khi nói về tác động của trí tuệ nhân tạo đến thị trường lao động và công việc của con người trong thời điểm hiện nay?",
    options: [
      {
        id: "A",
        text: "Chỉ đóng vai trò hỗ trợ giải trí và không có khả năng can thiệp vào các lĩnh vực sản xuất công nghiệp.",
      },
      {
        id: "B",
        text: "Tạo ra nhiều ngành nghề mới đồng thời thay thế hoàn toàn các công việc đòi hỏi tư duy sáng tạo.",
      },
      {
        id: "C",
        text: "Hỗ trợ tự động hóa các quy trình lặp lại và thay thế con người trong các công việc có tính chất đơn giản.",
      },
      {
        id: "D",
        text: "Giúp tăng năng suất lao động đồng thời xóa bỏ mọi thách thức về vấn đề thất nghiệp trong xã hội.",
      },
    ],
    correctOptionId: "C",
  },
  {
    id: 19,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Đặc trưng nào sau đây của trí tuệ nhân tạo thể hiện việc hệ thống vận dụng các quy tắc logic và tri thức đã tích lũy để đưa ra kết luận dựa trên các thông tin đang có?",
    options: [
      { id: "A", text: "Khả năng nhận thức." },
      { id: "B", text: "Khả năng suy luận." },
      { id: "C", text: "Khả năng học." },
      { id: "D", text: "Khả năng giải quyết vấn đề." },
    ],
    correctOptionId: "B",
  },
  {
    id: 20,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Trong biểu mẫu HTML, để khi nhấn vào nội dung nhãn (label) thì checkbox tương ứng được chọn, ta sử dụng cách nào sau đây?",
    options: [
      {
        id: "A",
        text: '`<label name="h1">Đá bóng</label> <input type="checkbox" name="h1">`',
      },
      {
        id: "B",
        text: '`<label id="h1">Đá bóng</label> <input type="checkbox" for="h1">`',
      },
      {
        id: "C",
        text: '`<label for="h1">Đá bóng</label> <input type="checkbox" id="h1">`',
      },
      {
        id: "D",
        text: '`<label>Đá bóng</label> <input type="checkbox" id="h1">`',
      },
    ],
    correctOptionId: "C",
  },
  {
    id: 21,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Nếu hệ thống máy chủ DNS của nhà cung cấp dịch vụ Internet (ISP) gặp sự cố ngừng hoạt động. Hiện tượng nào sau đây sẽ xảy ra đối với người dùng trong mạng đó?",
    options: [
      {
        id: "A",
        text: "Người dùng vẫn truy cập được bằng tên miền nhưng tốc độ tải trang sẽ chậm hơn.",
      },
      {
        id: "B",
        text: "Toàn bộ dữ liệu đang truyền trên mạng bị mã hóa và người dùng không thể đọc.",
      },
      {
        id: "C",
        text: "Người dùng không thể kết nối Internet dù truy cập bằng địa chỉ IP trực tiếp.",
      },
      {
        id: "D",
        text: "Người dùng không thể truy cập bằng tên miền nhưng vẫn vào được bằng địa chỉ IP.",
      },
    ],
    correctOptionId: "D",
  },
  {
    id: 22,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Một học sinh nhận được email thông báo trúng thưởng lớn từ một trang web lạ và được yêu cầu nhập thông tin tài khoản ngân hàng để nhận tiền. Trong tình huống này, hành động nào sau đây là không an toàn trên không gian mạng?",
    options: [
      { id: "A", text: "Bỏ qua email và không cung cấp thông tin cá nhân." },
      {
        id: "B",
        text: "Nhập thông tin tài khoản ngân hàng theo hướng dẫn trong email.",
      },
      {
        id: "C",
        text: "Kiểm tra tính xác thực của email qua nguồn thông tin chính thức.",
      },
      { id: "D", text: "Báo cho người thân hoặc giáo viên để được hỗ trợ." },
    ],
    correctOptionId: "B",
  },
  {
    id: 23,
    type: QuestionType.SINGLE_CHOICE,
    content: `Lựa chọn ngôn ngữ Python hoặc C++ để tìm hiểu đoạn chương trình sau:

Python:
\`\`\`python
n, count = 8, 0
if n % 2 == 0:
    i = 1
    while i < n:
        count += 1
        i = i * 2
print(count)
\`\`\`

C++:
\`\`\`cpp
int n = 8, count = 0;
if (n % 2 == 0) {
    int i = 1;
    while (i < n) {
        count++;
        i = i * 2;
    }
}
cout << count;
\`\`\`

Sau khi thực hiện đoạn chương trình trên, giá trị nào sau đây của biến count được in ra màn hình?`,
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "4" },
      { id: "C", text: "3" },
      { id: "D", text: "0" },
    ],
    correctOptionId: "C",
  },
  {
    id: 24,
    type: QuestionType.SINGLE_CHOICE,
    content:
      "Giao thức nào sau đây đảm bảo việc truyền dữ liệu giữa các thiết bị đầu cuối diễn ra chính xác, tin cậy và có kiểm soát lỗi?",
    options: [
      { id: "A", text: "IP." },
      { id: "B", text: "UDP." },
      { id: "C", text: "TCP." },
      { id: "D", text: "SMTP." },
    ],
    correctOptionId: "C",
  },
  {
    id: 25,
    type: QuestionType.TRUE_FALSE,
    content:
      "Một trang trại công nghệ cao triển khai hệ thống giám sát môi trường bằng các thiết bị cảm biến (nhiệt độ, độ ẩm, vị trí) gắn trên vật nuôi. Các thiết bị này truyền dữ liệu không dây qua mạng Wi-Fi đến các Access Point (AP) đặt rải rác trong khu vực trang trại. Dữ liệu được chuyển tiếp qua hệ thống mạng nội bộ, có thể đi qua nhiều switch và router, trước khi đến máy chủ xử lý. Người quản lý có thể truy cập dữ liệu từ xa thông qua Internet bằng ứng dụng trên điện thoại.\nMột số nhân viên kỹ thuật của trang trại đưa ra các nhận định sau:",
    subQuestions: [
      {
        id: "a",
        text: "Để đảm bảo kết nối liên tục khi thiết bị di chuyển trong phạm vi rộng, cần triển khai nhiều Access Point với vùng phủ sóng chồng lấn hợp lý.",
        correctAnswer: true,
      },
      {
        id: "b",
        text: "Khi dữ liệu từ cảm biến được gửi từ trang trại đến máy chủ trên Internet, các gói tin sẽ đi qua nhiều thiết bị trung gian như switch và router; trong quá trình này, địa chỉ IP nguồn và đích được giữ nguyên trong suốt quá trình truyền (không xét NAT).",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Giao thức IP đảm bảo dữ liệu từ cảm biến luôn được truyền đến máy chủ một cách đầy đủ và theo đúng thứ tự gửi.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Router trong hệ thống mạng trang trại có nhiệm vụ kết nối các mạng khác nhau và định tuyến gói tin dựa trên bảng định tuyến.",
        correctAnswer: true,
      },
    ],
  },
  {
    id: 26,
    type: QuestionType.TRUE_FALSE,
    content:
      "Dữ liệu về học sinh tham gia các câu lạc bộ trong trường năm học 2025-2026 được thu thập nhằm phục vụ công tác quản lý và khen thưởng của Đoàn trường. Để lưu trữ và khai thác dữ liệu, hệ thống cơ sở dữ liệu được thiết kế gồm các bảng sau:\n● HOCSINH (MaHS, HoTen, GioiTinh, NgaySinh): Lưu thông tin Mã học sinh, Họ tên, Giới tính, Ngày sinh.\n● CLB (MaCLB, TenCLB, NgayTL): Lưu thông tin Mã câu lạc bộ, Tên câu lạc bộ, Ngày thành lập.\n● THAMGIA (MaCLB, MaHS, VaiTro, NgayTG): Lưu thông tin Mã câu lạc bộ, Mã học sinh, Vai trò, Ngày tham gia của học sinh trong câu lạc bộ.\nSau khi tìm hiểu cơ sở dữ liệu trên, một số học sinh có ý kiến nhận xét sau:",
    subQuestions: [
      {
        id: "a",
        text: "Thuộc tính MaCLB là khoá chính của bảng THAMGIA.",
        correctAnswer: false,
      },
      {
        id: "b",
        text: "Trường MaHS đóng vai trò là khoá ngoài của bảng HOCSINH tham chiếu đến trường MaHS của bảng THAMGIA.",
        correctAnswer: false,
      },
      {
        id: "c",
        text: "Để kết xuất được thông tin gồm: Họ tên, Tên câu lạc bộ, Vai trò ta chỉ cần liên kết hai bảng HOCSINH và THAMGIA theo khoá MaHS.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Để đưa ra được thông tin gồm: Họ tên, Vai trò, Ngày tham gia của học sinh có Vai trò là “chủ nhiệm”, có thể thực hiện truy vấn với các thành phần sau:\n- Các bảng và các trường được chọn: HOCSINH.HoTen, THAMGIA.VaiTro, THAMGIA.NgayTG.\n- Các bảng được liên kết qua khoá: HOCSINH liên kết THAMGIA qua khoá MaHS.\n- Điều kiện kết xuất dữ liệu: THAMGIA.VaiTro = 'chủ nhiệm'.",
        correctAnswer: true,
      },
    ],
  },
  {
    id: 27,
    type: QuestionType.TRUE_FALSE,
    content:
      "Một nhóm học sinh lớp 12 được giao nhiệm vụ sử dụng phần mềm tạo trang web để xây dựng website quảng bá cho “Ngày hội STEM” của trường. Website dự kiến có cấu trúc như sau: Trang chủ giới thiệu tổng quan về sự kiện; thanh điều hướng chứa các mục chính là Lịch trình, Gian hàng và Đăng ký tham gia. Trong mục Gian hàng sẽ chứa liên kết tới các trang web con giới thiệu chi tiết về từng dự án khoa học. Trong quá trình thực hành trên phần mềm, các thành viên trong nhóm đã đưa ra các nhận xét sau:",
    subQuestions: [
      {
        id: "a",
        text: "Phần mềm tạo trang web cung cấp tính năng trực quan giúp nhóm có thể dễ dàng chèn hình ảnh minh họa và văn bản vào các trang mà không cần viết mã lệnh HTML phức tạp.",
        correctAnswer: true,
      },
      {
        id: "b",
        text: "Nhóm có thể thay đổi màu sắc chủ đạo và phông chữ của mẫu giao diện có sẵn để phù hợp với chủ đề công nghệ của sự kiện.",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Để thu thập thông tin đăng ký tham gia sự kiện, nhóm phải lập trình một cơ sở dữ liệu riêng trên máy chủ vì các phần mềm tạo web hiện nay không cho phép nhúng các biểu mẫu trực tuyến vào trang web.",
        correctAnswer: false,
      },
      {
        id: "d",
        text: "Để người xem có thể truy cập vào trang chi tiết của từng dự án khoa học, các đường liên kết này bắt buộc phải được đặt ở phần chân trang của trang chủ.",
        correctAnswer: false,
      },
    ],
  },
  {
    id: 28,
    type: QuestionType.TRUE_FALSE,
    content:
      "Dữ liệu về kết quả học tập các môn đánh giá bằng điểm số của học sinh trong 3 năm: năm 2024 (năm học 2023 – 2024), năm 2025 (năm học 2024 – 2025), năm 2026 (năm học 2025 – 2026) được nhà trường thu thập nhằm phục vụ công tác quản lí và đánh giá chất lượng giáo dục. Để lưu trữ và khai thác dữ liệu, cần tạo cơ sở dữ liệu với các bảng sau:\n● HOCSINH (MaHS, HoTen, Lop): Lưu thông tin Mã học sinh, Họ tên, lớp.\n● MONHOC (MaMH, TenMH): Lưu thông tin Mã môn học, Tên môn học.\n● KETQUA (MaHS, MaMH, Nam, DiemTB): Lưu thông tin Mã học sinh, Mã môn học, Năm, Điểm trung bình.\nSau khi tìm hiểu các phần mềm để quản trị cơ sở dữ liệu trên, một số bạn học sinh đưa ra các ý kiến sau:",
    subQuestions: [
      {
        id: "a",
        text: "Khi lưu trữ vào một bảng tính trong Excel gồm các cột: MaHS, HoTen, Lop, MaMH, TenMH, Nam, DiemTB dữ liệu vẫn đảm bảo không bị dư thừa.",
        correctAnswer: false,
      },
      {
        id: "b",
        text: "Trong phần mềm quản trị cơ sở dữ liệu, cần chọn nhóm 2 trường MaHS, MaMH làm khoá chính cho bảng KETQUA.",
        correctAnswer: true,
      },
      {
        id: "c",
        text: "Để đưa ra thông tin gồm Họ tên, Tên môn học, Năm và Điểm trung bình của những học sinh có Mã môn học là MH01 trong năm 2025 có thể thực hiện truy vấn sau:\nSELECT HOCSINH.HoTen, MONHOC.TenMH, KETQUA.Nam, KETQUA.DiemTB\nFROM HOCSINH\nINNER JOIN KETQUA ON HOCSINH.MaHS = KETQUA.MaHS\nINNER JOIN MONHOC ON KETQUA.MaMH = MONHOC.MaMH\nWHERE KETQUA.MaMH = 'MH01' AND KETQUA.Nam = 2025;",
        correctAnswer: true,
      },
      {
        id: "d",
        text: "Khi tạo bảng MONHOC trong phần mềm quản trị cơ sở dữ liệu, chọn trường MaMH rồi thiết lập trường này làm khóa chính của bảng.",
        correctAnswer: true,
      },
    ],
  },
];

// Shuffle single choice questions separately (first 24)
const singleChoice = rawQuestions.filter(
  (q) => q.type === QuestionType.SINGLE_CHOICE,
);
const trueFalse = rawQuestions.filter(
  (q) => q.type === QuestionType.TRUE_FALSE,
);

const shuffledSingleChoice = shuffleArray(singleChoice).map((q) => {
  if (!q.options) return q;

  // Find the text of the correct option before shuffling
  const correctOption = q.options.find((opt) => opt.id === q.correctOptionId);
  const correctText = correctOption?.text;

  // Shuffle the options
  const shuffledOptions = shuffleArray([...q.options]);

  // Re-assign A, B, C, D labels and find the new correctOptionId
  const finalOptions = shuffledOptions.map((opt, index) => ({
    ...opt,
    id: String.fromCharCode(65 + index), // A, B, C, D...
  }));

  const newCorrectOption = finalOptions.find((opt) => opt.text === correctText);

  return {
    ...q,
    options: finalOptions,
    correctOptionId: newCorrectOption?.id || q.correctOptionId,
  };
});

export const QUESTIONS: Question[] = [...shuffledSingleChoice, ...trueFalse];

export const EXAM_SETS = [
  {
    id: 1,
    title:
      "SỞ GIÁO DỤC VÀ ĐÀO TẠO NGHỆ AN ĐỀ CHÍNH THỨC KỲ KHẢO SÁT CHẤT LƯỢNG KẾT HỢP THI THỬ LỚP 12 NĂM HỌC 2025 - 2026",
    questions: [...shuffledSingleChoice, ...trueFalse],
  },
  EXAM_SET_2,
  EXAM_SET_3,
  EXAM_SET_4,
  EXAM_SET_5,
  EXAM_SET_6,
  EXAM_SET_7,
  EXAM_SET_8,
  EXAM_SET_9,
  EXAM_SET_10,
  EXAM_SET_11,
  EXAM_SET_12,
  EXAM_SET_13,
  EXAM_SET_14,
  EXAM_SET_15,
  EXAM_SET_16,
  EXAM_SET_17,
  EXAM_SET_18,
  EXAM_SET_19,
  EXAM_SET_20,
  EXAM_SET_21,
  EXAM_SET_22,
  EXAM_SET_23,
];
