import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NhanBietTinhTuTiengAnh(): React.JSX.Element {

	const postId = "NhanBietTinhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#adjective-terms"><mark className="highlight-tertiary-padding-4-8">ADjective</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Bí Quyết Nhận Biết [TÍNH] Tiếng Anh Nhanh Như Chớp Qua Đuôi Từ</h1>

			<p>Bạn có bao giờ cảm thấy bối rối khi phải phân biệt <strong>TÍNH</strong> (<strong>adjective</strong>) với các từ loại khác trong câu? Đừng lo! Trong tiếng Anh, hầu hết ADjective đều để lại “dấu vân tay” rất rõ ràng qua <strong>đuôi từ</strong> (<strong>suffix</strong>). Chỉ cần ghi nhớ khoảng 8–10 đuôi phổ biến nhất, bạn đã có thể đoán đúng đến 85–90% các ADjective khi làm bài thi, viết luận hay giao tiếp hàng ngày.</p>
			
			<p>Dưới đây là hướng dẫn chi tiết, sinh động và dễ nhớ nhất để bạn “bắt bài” ADjective chỉ trong tích tắc!</p>

			<h3 className="margin-y-50 text-center">Tại sao đuôi từ lại “bật mí” TÍNH? Tóm tắt các đuôi ADjective phổ biến nhất</h3>

			<p>TÍNH thường được tạo ra từ NOUN hoặc hành động bằng cách thêm hậu tố. Mỗi hậu tố mang một ý nghĩa đặc trưng, giúp ta nhanh chóng nhận diện vai trò của từ trong câu.</p>
					
			<p>Dưới đây là <strong>bảng tóm tắt các đuôi ADjective phổ biến nhất</strong> kèm rất nhiều ví dụ thực tế:</p>

			<h4 className="margin-y-40">1. Có thể… / đáng…: -able / -ible</h4>
					
			<p className="margin-top-20 text-indent-whole">COMFORtable, reSPONsible, FLEXible, VISible, inCREDible</p>
			
				<ul className="list-square">
			
					<li><strong>af</strong>ter a LONG DAY at WORK, I LOVE reLAXing on my <strong>COMFORtable</strong> SOfa with a GOOD BOOK.</li>
					<li className="margin-bottom-20 list-none">Sau một ngày dài làm việc, tôi thích thư giãn trên chiếc ghế sofa <strong>thoải mái</strong> của mình với một cuốn sách hay.</li>
			
					<li>as a TEAM LEADer, he is <strong>reSPONsible</strong> for MAking SURE all PROJects are comPLEted on TIME.</li>
					<li className="margin-bottom-20 list-none">Với tư cách là trưởng nhóm, anh ấy <strong>chịu trách nhiệm</strong> đảm bảo tất cả các dự án được hoàn thành đúng hạn.</li>

					<li>our COMpany OFfers <strong>FLEXible</strong> WORKing HOURS, alLOWing emPLOYees to START WORK between EIGHT AM and TEN AM.</li>
					<li className="margin-bottom-20 list-none">Công ty chúng tôi cung cấp giờ làm việc <strong>linh hoạt</strong>, cho phép nhân viên bắt đầu làm việc trong khoảng từ 8 giờ sáng đến 10 giờ sáng.</li>
			
					<li>the STARS are CLEARly <strong>VISible</strong> toNIGHT be<strong>cause</strong> the SKY is comPLETEly FREE of CLOUDS.</li>
					<li className="margin-bottom-20 list-none">Các vì sao có thể nhìn thấy <strong>rõ ràng</strong> vào đêm nay vì bầu trời hoàn toàn không có mây.</li>
			
					<li>the ACrobat perFORMED an <strong>inCREDible</strong> STUNT that LEFT the AUdience CHEERing in aMAZEment.</li>
					<li className="list-none">Người biểu diễn nhào lộn đã thực hiện một pha biểu diễn <strong>đáng kinh ngạc</strong> khiến khán giả hò reo trong ngạc nhiên.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Đầy… / có nhiều…: -ous</h4>
					
			<p className="margin-top-20 text-indent-whole">DANgerous, FAmous, deLICious, CURious, eNORmous</p>
			
				<ul className="list-square">
			
					<li>SWIMming in this DEEP RIVer <strong>dur</strong>ing a HEAVy STORM is exTREMEly <strong>DANgerous</strong>.</li>
					<li className="margin-bottom-20 list-none">Bơi lội ở dòng sông sâu này trong một trận bão lớn là cực kỳ <strong>nguy hiểm</strong>.</li>
			
					<li>PARis is FAmous for its <strong>roMANtic</strong> ATmosphere and iCONic LANDmarks like the EIFFel TOWer.</li>
					<li className="margin-bottom-20 list-none">Paris nổi tiếng với bầu không khí <strong>lãng mạn</strong> và các thắng cảnh biểu tượng như Tháp Eiffel.</li>

					<li>my MOTHer BAKED a <strong>deLICious</strong> CHOCOLate CAKE for my BIRTHday PARTy.</li>
					<li className="margin-bottom-20 list-none">Mẹ tôi đã nướng một chiếc bánh sô-cô-la <strong>ngon tuyệt</strong> cho bữa tiệc sinh nhật của tôi.</li>
			
					<li>CHILDren are NATURally <strong>CURious</strong> a<strong>bout</strong> the WORLD around them and ALWAYS ASK <strong>man</strong>y QUESTions.</li>
					<li className="margin-bottom-20 list-none">Trẻ em vốn dĩ <strong>tò mò</strong> về thế giới xung quanh và luôn đặt ra rất nhiều câu hỏi.</li>
			
					<li>the COMpany MADE an <strong>eNORmous</strong> PROFit this YEAR <strong>af</strong>ter LAUNCHing their NEW PRODuct LINE.</li>
					<li className="list-none">Công ty đã thu về lợi nhuận <strong>khổng lồ</strong> trong năm nay sau khi ra mắt dòng sản phẩm mới của họ.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Đầy… / có chất lượng tốt: -ful</h4>
					
			<p className="margin-top-20 text-indent-whole">BEAUtiful, CAREful, HELPful, sucCESSful, POWerful</p>
			
				<ul className="list-square">
			
					<li>we WATCHED a <strong>BEAUtiful</strong> SUNset over the Ocean on our last EVening of the HOLiday.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã ngắm nhìn một hoàng hôn <strong>đẹp tuyệt vời</strong> trên đại dương vào buổi tối cuối cùng của kỳ nghỉ.</li>
			
					<li>PLEASE be <strong>CAREful</strong> with that FRAGile GLASS VASE while MOving it to the LIVing ROOM.</li>
					<li className="margin-bottom-20 list-none">Xin hãy <strong>cẩn thận</strong> với chiếc bình thủy tinh dễ vỡ đó khi chuyển nó vào phòng khách.</li>

					<li>the LOcal TOURist GUIDE GAVE us <strong>HELPful</strong> adVICE on where to FIND the BEST STREET FOOD.</li>
					<li className="margin-bottom-20 list-none">Hướng dẫn viên du lịch địa phương đã cho chúng tôi những lời khuyên <strong>hữu ích</strong> về nơi tìm thấy những món ăn đường phố ngon nhất.</li>
			
					<li><strong>af</strong>ter years of HARD WORK, her TECH STARTup FInally beCAME a <strong>sucCESSful</strong> GLObal COMpany.</li>
					<li className="margin-bottom-20 list-none">Sau nhiều năm làm việc chăm chỉ, công ty khởi nghiệp công nghệ của cô ấy cuối cùng đã trở thành một công ty toàn cầu <strong>thành công</strong>.</li>
			
					<li>the CEO deLIVered a <strong>POWerful</strong> SPEECH that inSPIred all the emPLOYees at the MEETing.</li>
					<li className="list-none">Giám đốc điều hành đã có một bài phát biểu <strong>mạnh mẽ</strong> truyền cảm hứng cho tất cả nhân viên trong cuộc họp.</li>
			
				</ul>
			

			<h4 className="margin-y-40">4. Không… / thiếu…: -less</h4>
					
			<p className="margin-top-20 text-indent-whole">HOPEless, CAREless, HOMEless, ENDless, USEless</p>
			
				<ul className="list-square">
			
					<li>he FELT <strong>HOPEless</strong> <strong>af</strong>ter FAILing the eXAM for the THIRD TIME, but his TEACHer enCOURaged him to TRY aGAIN.</li>
					<li className="margin-bottom-20 list-none">Anh ấy cảm thấy <strong>tuyệt vọng</strong> sau khi trượt kỳ thi lần thứ ba, nhưng giáo viên của anh ấy đã động viên anh thử lại.</li>
			
					<li>MAking a <strong>CAREless</strong> misTAKE on the FInal MATH TEST COST him the HIGHest GRADE in the CLASS.</li>
					<li className="margin-bottom-20 list-none">Việc mắc một lỗi <strong>bất cẩn</strong> trong bài kiểm tra toán cuối kỳ đã khiến cậu ấy mất đi điểm số cao nhất lớp.</li>

					<li>the LOcal CHARity ORganization proVIDES FOOD and SHELter for <strong>HOMEless</strong> PEOple <strong>dur</strong>ing the COLD WINter MONTHS.</li>
					<li className="margin-bottom-20 list-none">Tổ chức từ thiện địa phương cung cấp thức ăn và chỗ ở cho những người <strong>vô gia cư</strong> trong những tháng mùa đông lạnh giá.</li>
			
					<li>we were STUCK in <strong>ENDless</strong> TRAFfic on the HIGHway for over TWO HOURS.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã mắc kẹt trong dòng xe cộ <strong>vô tận</strong> trên đường cao tốc hơn hai tiếng đồng hồ.</li>
			
					<li>THROWing aWAY BROken elecTRONics is BETter than KEEPing them aROUND as <strong>USEless</strong> CLUTter.</li>
					<li className="list-none">Vứt bỏ đồ điện tử bị hỏng đi còn hơn là giữ chúng lại xung quanh như những thứ bề bộn <strong>vô dụng</strong>.</li>
			
				</ul>
			


			<h4 className="margin-y-40">5. Thuộc về… / liên quan đến…: -al</h4>
					
			<p className="margin-top-20 text-indent-whole">NATional, PERsonal, NATURal, SOcial, traDITional</p>
			
				<ul className="list-square">
			
					<li>indePENdence DAY is a MAjor <strong>NATional</strong> HOLiday CELibrated aCROSS the COUNtry.</li>
					<li className="margin-bottom-20 list-none">Ngày Quốc khánh là một ngày lễ lớn của <strong>quốc gia</strong> được kỷ niệm trên khắp đất nước.</li>
			
					<li>she KEEPS her <strong>PERsonal</strong> DIary LOCKED in a DRAWer where NO ONE ELSE can READ it.</li>
					<li className="margin-bottom-20 list-none">Cô ấy giữ cuốn nhật ký <strong>cá nhân</strong> của mình khóa trong một ngăn kéo nơi không ai khác có thể đọc được.</li>

					<li>HONey is a deLICious and HEALthy <strong>NATURal</strong> SWEETener USED in <strong>man</strong>y RECipes.</li>
					<li className="margin-bottom-20 list-none">Mật ong là một chất làm ngọt <strong>tự nhiên</strong> ngon miệng và lành mạnh được sử dụng trong nhiều công thức nấu ăn.</li>
			
					<li>volunTEERing at the LOcal FOOD BANK is a GREAT WAY to BUILD STRONG <strong>SOcial</strong> conNECtions.</li>
					<li className="margin-bottom-20 list-none">Làm tình nguyện tại ngân hàng thực phẩm địa phương là một cách tuyệt vời để xây dựng các mối quan hệ <strong>xã hội</strong> khăng khít.</li>
			
					<li>my FAMILy ALways GATHers to COOK <strong>traDITional</strong> DISHes <strong>dur</strong>ing the LUnar NEW YEAR.</li>
					<li className="list-none">Gia đình tôi luôn quây quần nấu các món ăn <strong>truyền thống</strong> trong dịp Tết Nguyên Đán.</li>
			
				</ul>
			


			<h4 className="margin-y-40">6. Có tính chất… / thuộc về…: -ic / -ical</h4>
					
			<p className="margin-top-20 text-indent-whole">ecoNOMic, scienTIFic, hisTORic, roMANtic, psychoLOgical</p>
			
				<ul className="list-square">
			
					<li>the COUNtry is CURrently FAcing MAjor <strong>ecoNOMic</strong> CHALlenges due to inFLAtion.</li>
					<li className="margin-bottom-20 list-none">Đất nước hiện đang phải đối mặt với những thách thức <strong>kinh tế</strong> lớn do lạm phát.</li>
			
					<li>reSEARCHers USED <strong>scienTIFic</strong> MEthods to TEST the SAFEty of the NEW MEDicine.</li>
					<li className="margin-bottom-20 list-none">Các nhà nghiên cứu đã sử dụng các phương pháp <strong>khoa học</strong> để kiểm tra độ an toàn của loại thuốc mới.</li>

					<li>the TWO NAtions SIGNED a <strong>hisTORic</strong> PEACE aGREEment <strong>af</strong>ter DEcades of CONflict.</li>
					<li className="margin-bottom-20 list-none">Hai quốc gia đã ký kết một hiệp định hòa bình <strong>mang tính lịch sử</strong> sau nhiều thập kỷ xung đột.</li>
			
					<li>he PLANNED a <strong>roMANtic</strong> DINner by the BEACH with CANdles and SOFT MUsic.</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã lên kế hoạch cho một bữa tối <strong>lãng mạn</strong> bên bờ biển với nến và âm nhạc du dương.</li>
			
					<li>STRESS and anXIety can have SERious <strong>psychoLOgical</strong> and PHYSical efFECTS on a PERson.</li>
					<li className="list-none">Căng thẳng và lo âu có thể gây ra những ảnh hưởng nghiêm trọng về mặt <strong>tâm lý</strong> và thể chất đối với một người.</li>
			
				</ul>
			


			<h4 className="margin-y-40">7. Tends to… / is… in nature: -ive</h4>
					
			<p className="margin-top-20 text-indent-whole">ACtive, creAtive, atTRACtive, efFECtive, SENsitive</p>
			
				<ul className="list-square">
			
					<li>Even in her SEVenties, she reMAINS VERy <strong>ACtive</strong> and GOES JOGging <strong>ever</strong>y MORNing.</li>
					<li className="margin-bottom-20 list-none">Even though she is seventy years old, she is still very active. She goes jogging every morning.</li>
			
					<li>the MARketing TEAM caME UP with a <strong>creAtive</strong> camPAIGN to atTRACT YOUNGer CUStomers.</li>
					<li className="margin-bottom-20 list-none">The Marketing team thought of a new way to sell their products. They want to attract young customers.</li>

					<li>the hisTORical TOWN has <strong>man</strong>y ANcient BUILDings and an <strong>atTRACtive</strong> OLD-WORLD CHARM.</li>
					<li className="margin-bottom-20 list-none">The historic town boasts many old buildings and an appealing old-world charm.</li>
			
					<li>REGular HANDwashing is ONE of the MOST <strong>efFECtive</strong> WAYS to preVENT the SPREAD of ILLness.</li>
					<li className="margin-bottom-20 list-none">Washing your hands regularly is one of the best ways to stop germs from spreading.</li>
			
					<li>you NEED to be CAREful with your WORDS be<strong>cause</strong> she is VERy <strong>SENsitive</strong> to CRITicism.</li>
					<li className="list-none">Choose your words carefully because she takes criticism personally.</li>
			
				</ul>


			<h4 className="margin-y-40">8. Has the characteristic… / is like…: -y</h4>
					
			<p className="margin-top-20 text-indent-whole">HAPpy, RAIny, SUNny, HEALthy, TAsty, CLOUdy</p>
			
				<ul className="list-square">

					<li>she LOOKED VERy <strong>HAPpy</strong> when she reCEIVED the GOOD NEWS a<strong>bout</strong> her proMOtion.</li>
					<li className="margin-bottom-20 list-none">She was very happy when she found out she was being promoted.</li>
			
					<li>it was a COLD and <strong>RAIny</strong> afterNOON, so we deCIDed to STAY inDOORS and WATCH a MOvie.</li>
					<li className="margin-bottom-20 list-none">It was a very cold and rainy afternoon. Because of this, we decided to stay inside and watch a movie.</li>
			
					<li>we SPENT our WEEKend at the BEACH be<strong>cause</strong> the WEAther was BRIGHT and <strong>SUNny</strong>.</li>
					<li className="margin-bottom-20 list-none">We went to the beach over the weekend because it was sunny.</li>

					<li>EATing PLENty of FRESH VEGETables and EXercising REGularly KEEPS your BOdy <strong>HEALthy</strong>.</li>
					<li className="margin-bottom-20 list-none">If you eat lots of fresh vegetables and exercise regularly, you'll have a healthy body.</li>
			
					<li>my GRANDmother COOKED a <strong>TAsty</strong> BOWL of BEEF NOOdle SOUP for BREAKfast.</li>
					<li className="margin-bottom-20 list-none">My grandmother used to make a tasty bowl of beef noodle soup for breakfast.</li>
			
					<li>the SKY beCAME <strong>CLOUdy</strong> in the afterNOON, but THANKfully it DIDn't RAIN.</li>
					<li className="list-none">It started to rain in the afternoon, but it didn't.</li>
			
				</ul>
			


			<h4 className="margin-y-40">9. Feel…: -ed</h4>
					
			<p className="margin-top-20 text-indent-whole">BORED, TIred, exCIted, INTERested, surPRISED</p>
			
				<ul className="list-square">
			
					<li>he FELT <strong>BORED</strong> be<strong>cause</strong> there was NOthing to DO on a RAIny SUNday afterNOON.</li>
					<li className="margin-bottom-20 list-none">He was bored. There was nothing to do on a rainy Sunday afternoon.</li>
			
					<li><strong>af</strong>ter WORKing for TEN HOURS STRAIGHT, she was TOO <strong>TIred</strong> to COOK DINner.</li>
					<li className="margin-bottom-20 list-none">She worked for ten hours without stopping. Then she was too tired to cook dinner.</li>

					<li>the KIDS were SO <strong>exCIted</strong> a<strong>bout</strong> GOing to the aMUSEment PARK toMORrow.</li>
					<li className="margin-bottom-20 list-none">The kids couldn't wait to go to the amusement park tomorrow.</li>
			
					<li>i am VERy <strong>INTERested</strong> in LEARNing MORE a<strong>bout</strong> artiFIcial inTELligence.</li>
					<li className="margin-bottom-20 list-none">I want to know more about artificial intelligence.</li>
			
					<li>we were <strong>surPRISED</strong> by the unexPECted BIRTHday PARTy our FRIENDS THREW for us.</li>
					<li className="list-none">We were surprised by a birthday party that our friends threw for us.</li>
			
				</ul>
			


			<h4 className="margin-y-40">10. To evoke a feeling…: -ing</h4>
					
			<p className="margin-top-20 text-indent-whole">BORing, TIRing, INTEResting, exCIting, conFUsing</p>

			
				<ul className="list-square">
			
					<li>the LECture was SO <strong>BORing</strong> that MOST of the STUdents FELL aSLEEP.</li>
					<li className="margin-bottom-20 list-none">The lecture was so boring that most of the students fell asleep.</li>
			
					<li>HIKing up the MOUNtain all DAY was VERy <strong>TIRing</strong>, but the VIEW at the TOP was WORTH it.</li>
					<li className="margin-bottom-20 list-none">Hiking up the mountain all day was really tiring, but the view at the top made it worth the effort.</li>

					<li>she TOLD me an <strong>INTEResting</strong> STORy a<strong>bout</strong> her TRIP to jaPAN.</li>
					<li className="margin-bottom-20 list-none">She told me an exciting story about her trip to Japan.</li>
			
					<li>WINning the CHAMpionship MATCH was the MOST <strong>exCIting</strong> MOment of his caREER.</li>
					<li className="margin-bottom-20 list-none">His career reached its most exciting point when he won the championship match.</li>
			
					<li>the inSTRUCtions for asSEMbling the BOOKshelf were TOO <strong>conFUsing</strong> to FOLlow.</li>
					<li className="list-none">The instructions for building the bookshelf were too confusing.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Tips for “spotting” words super fast while taking a test</h3>

			<p>If you see the endings -able, -ible, -ous, -ful, -less, -al, -ic, -ive, or -y → it’s almost certainly an adjective (90% of the time).</p>

			<p>The -ed vs. -ing pair is extremely common on tests:</p>

			<p className="margin-top-20">-ed → a person's emotions</p>
			
				<ul className="list-square">
			
					<li>i’m INTERested.</li>
					<li className="margin-bottom-20 list-none">This interests me.</li>
			
					<li>i’m BORED.</li>
					<li className="margin-bottom-20 list-none">I'm tired of this.</li>
			
					<li>i’m TIred.</li>
					<li className="list-none">All this has left me tired.</li>
			
				</ul>

			
			<p className="margin-top-20">-ing → characteristics of the event</p>
			
				<ul className="list-square">
			
					<li>The LESson is INTEResting.</li>
					<li className="margin-bottom-20 list-none">The lesson is fun.</li>
			
					<li>The LESson is BORing.</li>
					<li className="margin-bottom-20 list-none">This lesson is boring.</li>
			
					<li>The LESson is TIRing.</li>
					<li className="list-none">The lesson is tiresome.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Some vivid examples</h3>

			<p>Imagine the following everyday situations:</p>
			
				<ul className="list-square">

					<li>She’s very CAREful when she drives → careful (a person’s state of mind)</li>

					<li>This road is very DANgerous! → dangerous (a characteristic of the road)</li>

					<li>This dish is so deLICious! → absolutely delicious (a description of the dish)</li>

					<li>I felt HOPEless when I failed the exam for the third time → hopeless (a personal emotion)</li>
			
					<li>That movie was exCITing from start to finish → captivating, engaging</li>
			
				</ul>

			<p className="margin-top-20">Just 10 minutes a day, and after 3 days you’ll see: English is no longer a “messy jumble” - it’s just 3 fun and easy-to-remember pairings!</p>

			<h3 className="margin-y-50 text-center">In Summary – The Top 8 “Golden” Endings You Need to Remember Today</h3>

			<p>-<strong>able</strong>/-<strong>ible</strong> – <strong>ous</strong> – <strong>ful</strong> – <strong>less</strong> – <strong>al</strong> – <strong>ic</strong>/-<strong>ical</strong> – <strong>ive</strong> – <strong>y</strong></p>
					
			<p>Just by mastering these 8 suffixes, you’ll have a “secret weapon” for quickly identifying adjectives in reading comprehension, fill-in-the-blank exercises, writing sentences, or even when talking to native speakers.</p>
			
			<p>Try it out today: pick an English article, underline all the words with the endings listed above, and see what percentage you get right!</p>

			<p>Good luck with your studies, and may you soon become a “pro” at identifying adjectives! 🌟</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>deCEMber 28, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
				</div>

				<div className="eye-icon no-margin">
					<EyeIcon />
				</div>

				<div className="post-date no-margin">
					<ViewCounter postId={postId} />
				</div>

				<div className="like-button no-margin">
					<LikeButton postId={postId} />
				</div>

			</div>

		</article>
		
	</main>

	</>);
}