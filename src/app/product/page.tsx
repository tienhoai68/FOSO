import Image from "next/image";
import fb from "@/assets/icon/fb.png";
import zalo from "@/assets/icon/zalo.png";
import X from "@/assets/icon/X.png";
import linked from "@/assets/icon/linked.png";
import Frame_135 from "@/assets/icon/Frame_135.png";
import avatar from "@/assets/images/avatar.png";
import image from "@/assets/images/image.png";
import Frame_332 from "@/assets/images/Frame_332.png";
import FiveS from "@/assets/images/FiveS.png";
import Handle from "@/assets/images/Handle.png";
import Plan from "@/assets/images/Plan.png";
import thumbs_up from "@/assets/icon/thumbs_up.png";
import green_heart from "@/assets/icon/green_heart.png";
import star_struck from "@/assets/icon/star_struck.png";
import hushed_face from "@/assets/icon/hushed_face.png";
import yawning_face from "@/assets/icon/yawning_face.png";
import pouting_face from "@/assets/icon/pouting_face.png";
import CardItem from "./components/cardItem";
import ArticleToc from "./components/ArticleToc";
import TrialCard from "@/components/content/components/trial-card";
import JoinCard from "@/components/content/components/join-card";
export default function ProductPage() {
  return (
    <div className="pt-2">
      <div className="flex">
        <aside className="w-1/12 p-4 flex flex-col gap-3 mt-20">
          <span className=" font-bold text-[18px] text-[#33404A]">Chia sẽ</span>
          <Image width={48} height={48} src={zalo} alt="zalo" />
          <Image width={48} height={48} src={fb} alt="fb" />
          <Image width={48} height={48} src={X} alt="X" />
          <Image width={48} height={48} src={linked} alt="linked" />
          <Image width={48} height={48} src={Frame_135} alt="Frame_135" />
        </aside>

        <main className="w-5/6 p-2">
          <div className="grid grid-cols-3 w-[1042px] h-[100vh] mx-auto ">
            <div className="col-span-2">
              <div className="w-[1280px] font-normal text-[14px]  text-[#050505]">
                Trang chủ {" > "}Tài nguyên {" > "} Blog{" > "}{" "}
                <span className="font-bold">Quản lý sản xuất</span>
              </div>
              <div className="mt-10">
                <div className="w-fit px-2 py-1 font-semibold bg-[#E2F0FE] rounded-xl text-[12px] text-[#0F4F9E]">
                  Quản Lý Sản Xuất
                </div>
                <h1 className="font-bold text-[28px] m-1">
                  Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
                </h1>
                <div className="flex items-center p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mr-auto">
                    <Image
                      src={avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-sm ">Tác giả</p>
                      <p className="text-xs font-bold">FOSO Creator</p>
                    </div>
                  </div>

                  <div className="flex items-center ml-auto">
                    <div className="flex items-center mr-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-xs">Cập nhật vào: 17/11/2022</p>
                    </div>
                    <div>|</div>
                    <div className="flex items-center ml-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs">10 phút đọc</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src={image} width={900} height={600} alt="image" />
                </div>
                <h1 className="text-center text-[#667F93] text-[12px] mb-6">
                  Quy trình 5S là gì?
                </h1>
                <div className="container mx-auto">
                  <div className="flex items-start">
                    <div className="text-8xl text-[#15AA7A]  mr-2">“</div>
                    <div>
                      <p className="mb-4 text-[20px] text-[#33404A] font-semibold leading-[24px] pt-8">
                        Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S
                        là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của
                        FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình
                        này cũng như yếu tố tạo nên thành công của quy trình bạn
                        nhé.
                      </p>

                      <h2 className="text-2xl font-semibold mb-2 text-[#15AA7A] ">
                        1. Quy trình 5S là gì?
                      </h2>
                      <p className="mb-4 text-[16px]">
                        Quy trình 5S được biết đến là mô hình quản trị tinh gọn
                        trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
                        sở hoa anh đào Nhật Bản.
                      </p>
                      <p className="mb-4 text-[16px]">
                        Quy trình 5S hiện nay đang được rất nhiều nước trên thế
                        giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
                        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
                      </p>
                      <ul className="list-disc list-inside mb-4">
                        <li className="text-[#15AA7A] ">
                          Seiri{" "}
                          <span className="text-[#231F20]">(Ngăn nắp)</span>
                        </li>
                        <li className="text-[#15AA7A] ">
                          Seiso{" "}
                          <span className="text-[#231F20]">(Sạch sẽ)</span>
                        </li>
                        <li className="text-[#15AA7A] ">
                          Seiton{" "}
                          <span className="text-[#231F20]">(Trật tự)</span>
                        </li>
                        <li className="text-[#15AA7A] ">
                          Shitsuke{" "}
                          <span className="text-[#231F20]">(Kỷ luật)</span>
                        </li>
                        <li className="text-[#15AA7A] ">
                          Seiketsu{" "}
                          <span className="text-[#231F20]">
                            (Tiêu chuẩn hóa)
                          </span>
                        </li>
                      </ul>

                      <h2 className="text-2xl font-semibold mb-2 text-[#15AA7A] ">
                        2. Lợi ích quy trình 5S đem lại
                      </h2>
                      <p className="mb-4 text-[16px]">
                        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể
                        hiện cho mỗi bước của quy trình với mục đích cải tiến
                        môi trường làm việc của doanh nghiệp.
                      </p>
                      <p className="mb-4 text-[16px]">
                        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức,
                        doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
                        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn,
                        các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
                        dễ dàng tìm kiếm khi cần thiết.
                      </p>
                      <p className="mb-4 text-[16px]">
                        Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo
                        ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
                        phần vào tạo nên một văn hóa doanh nghiệp tích cực.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Image src={Frame_332} width={900} height={600} alt="image" />
                </div>
                <div className="container mx-auto p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A] ">
                    3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                  </h2>

                  <p className="mb-4 text-[16px]">
                    Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                    nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này
                    càng chứng minh rõ nét tính hiệu quả của quy trình đem lại.
                    Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A] ">
                    3.1 Cải thiện rõ nét môi trường làm việc
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                    gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không
                    gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A] ">
                    3.2 Tiết kiệm thời gian đáng kể
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm
                    được thời gian đáng kể khi không còn mất nhiều thời gian tìm
                    kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc.
                    Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ
                    dàng.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A] ">
                    3.3 Tăng năng suất làm việc
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần
                    thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ
                    dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu,
                    giúp tiết kiệm thời gian và tăng năng suất làm việc.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A] ">
                    3.4 Tiết kiệm chi phí
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng
                    phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể
                    giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của
                    mình.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A] ">
                    3.5 Tăng chất lượng sản phẩm
                  </h3>
                  <p className="mb-4 text-[16px]">
                    5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn
                    gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm
                    thiểu lỗi sản xuất không mong muốn.
                  </p>
                </div>
                <div className="mt-2">
                  <Image src={FiveS} width={900} height={600} alt="image" />
                </div>
                <div className="container mx-auto p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A]">
                    4. Quy trình 5S gồm các bước
                  </h2>

                  <p className="mb-4 text-[16px]">
                    5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                    hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S
                    bao gồm năm bước cơ bản sau:
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    4.1 Seiri (Ngăn nắp)
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                    nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                    thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                    tiết kiệm thời gian.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    4.2 Seiton (Sắp xếp)
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ,
                    thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để
                    giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    4.3 Seiso (Vệ sinh)
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá
                    nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn
                    sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm
                    thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
                    nhân viên.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    4.4 Seiketsu (Tiêu chuẩn hóa)
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa.
                    Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng
                    và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    4.5 Shitsuke (Kỷ luật)
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Đây được xem là bước cuối cùng trong quy trình. Và bước này
                    đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                    tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ
                    thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người
                    trong tổ chức duy trì và tuân thủ theo quy trình.
                  </p>
                </div>
                <div className="mt-2">
                  <Image src={Handle} width={900} height={600} alt="image" />
                </div>
                <div className="container mx-auto p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A]">
                    5. Quy trình được thực hiện như sau:
                  </h2>

                  <p className="mb-4 text-[16px]">
                    Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                    nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này
                    càng chứng minh rõ nét tính hiệu quả của quy trình đem lại.
                    Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    5.1. Giai đoạn chuẩn bị
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                    đứng ra điều hành và quản lý quá trình thực hiện quy trình
                    5S. Việc phân bố cụ thể như vậy sẽ giúp quá trình áp dụng
                    quy tắc 5S sẽ hiệu quả hơn.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    5.2. Triển khai rộng rãi
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về
                    quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ
                    kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp
                    của bạn.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    5.3. Thực hiện vệ sinh toàn bộ doanh nghiệp
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Đây là bước có thể khiến mọi người không hào hứng trong các
                    bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực
                    và tạo không khí hào hứng cho từng cá nhân.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    5.4. Sàng lọc, sắp xếp và đánh giá
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh
                    toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ
                    ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học
                    hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.
                  </p>

                  <h3 className="text-xl font-semibold mb-2 text-[#15AA7A]">
                    5.5. Đánh giá
                  </h3>
                  <p className="mb-4 text-[16px]">
                    Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                    quá trình cải tiến và xem xét cần cải tiến phương diện nào
                    hay không trong quá trình thực hiện quy trình 5S.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A]">
                    6. Quy trình 5S có giống với Kaizen?
                  </h2>
                  <p className="mb-4 text-[16px]">
                    Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen
                    hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                    nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                  </p>

                  <div className="flex mb-2">
                    <div className="w-1 bg-[#15AA7A] mr-4"></div>{" "}
                    <div>
                      <ul className=" mb-4 pl-6">
                        <li>
                          Về Kaizen, thì đây được xem là một triết lý cải tiến
                          liên tục trong doanh nghiệp. Phương pháp này nhằm tạo
                          ra sự thay đổi tích cực, mang tính liên tục và bền
                          vững.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-1 bg-[#15AA7A] mr-4"></div>{" "}
                    <div>
                      <ul className=" mb-4 pl-6">
                        <li>
                          Còn đối với quy tắc 5S, đây là một phương pháp quản lý
                          và cải tiến trong sản xuất. 5S tập trung vào việc sắp
                          xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong
                          môi trường làm việc. 
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mb-4 text-[16px]">
                    Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và
                    quy tắc này đóng vai trò quan trọng trong việc tạo ra môi
                    trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử
                    dụng làm bước đầu tiên trong quá trình cải tiến liên tục của
                    phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các
                    hoạt động cải tiến tiếp theo.
                  </p>
                </div>
                <div className="container mx-auto p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A]">
                    7. Đối tượng nào nên áp dụng 5S?
                  </h2>

                  <p className="mb-4 text-[16px]">
                    Quy trình 5S được xem là phương pháp quản lý được áp dụng
                    rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp
                    khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh
                    nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi
                    nhuận và các doanh nghiệp nhà nước.
                  </p>

                  <p className="mb-4 text-[16px]">
                    Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động
                    phức tạp, các trang thiết bị và vật dụng phải được quản lý
                    và sử dụng hiệu quả.
                  </p>

                  <Image
                    width={900}
                    height={600}
                    className="mb-4"
                    src={Plan}
                    alt="Plan"
                  />
                </div>
                <div className="container mx-auto p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#15AA7A]">
                    8. Các yếu tố tạo nên thành công cho quy trình 5S
                  </h2>

                  <p className="mb-4 text-[16px]">
                    Và những nhân tố quyết định đến quá trình thành công của quy
                    trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó
                    là từ phía:
                  </p>

                  <ul className="list-disc list-inside mb-4 pl-6">
                    <li>
                      Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                      nghiệp. Bởi đây là yếu tố quan trọng nhất để quyết định
                      doanh nghiệp có áp dụng quy tắc này hay không.
                    </li>
                    <li>
                      Chương trình, kế hoạch thực hiện quy trình. Sau khi phía
                      lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                      kế hoạch thực hiện triển khai 5S.
                    </li>
                    <li>
                      Sự tự nguyện tham gia của toàn thể nhân viên. Doanh nghiệp
                      cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                      vì lợi ích chung của tổ chức, của doanh nghiệp.
                    </li>
                  </ul>

                  <p className="mb-4 text-[16px]">
                    Đồng thời, trên đây là các yếu tố tạo nên sự thành công
                    nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt
                    trước khi bắt tay vào triển khai quy trình 5S vào doanh
                    nghiệp của mình. Và với những thông tin bổ ích như trên,
                    FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát
                    triển, cải tiến vượt bậc trong tương lai.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 w-full">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold">
                      Bạn thấy bài viết như thế nào?
                    </h3>
                    <p className="text-gray-600">4 phản hồi</p>
                  </div>
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={thumbs_up}
                          alt="Hữu ích"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">1</p>
                        <p className="text-sm text-green-600">Hữu ích</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={green_heart}
                          alt="Yêu thích"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">2</p>
                        <p className="text-sm text-green-600">Yêu thích</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={star_struck}
                          alt="Thú vị"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">0</p>
                        <p className="text-sm text-green-600">Thú vị</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={hushed_face}
                          alt="Bất ngờ"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">1</p>
                        <p className="text-sm text-green-600">Bất ngờ</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={yawning_face}
                          alt="Nhàm chán"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">0</p>
                        <p className="text-sm text-green-600">Nhàm chán</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <Image
                          src={pouting_face}
                          alt="Tức giận"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg">0</p>
                        <p className="text-sm text-green-600">Tức giận</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 ml-3">
              <ArticleToc />
              <div className="pt-6">
                <TrialCard />
              </div>
              <div className="pt-6">
                <JoinCard />
              </div>
            </div>
            <div className="col-span-3 py-5 mt-2">
              <div className="text-2xl font-bold mb-4  text-[#050505]">
                Bài viết liên quan
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <CardItem />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
