import React, { useState } from 'react';
import {
    Menu, X, ArrowRight, Target, Users,
    Sparkles, Calendar, MapPin, ChevronRight,
    Lock, Globe, CheckCircle2, Briefcase,
    Lightbulb, Leaf, Microscope, GraduationCap, Megaphone, Settings, Palette, Heart, Rocket, Award, Handshake,
    ArrowDown, Landmark, UserCircle, Workflow, Building2, TrendingUp, FileSpreadsheet, Mail,
    Clock, Tag, ArrowLeft
} from 'lucide-react';

// Translation Dictionary
const Instagram = ({ className }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Twitter = ({ className }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Github = ({ className }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;


const translations = {
    en: {
        nav: { discover: 'Discover', about: 'About Us', initiatives: 'Initiatives', partners: 'Partners', join: 'Join Us', team: 'Team Portal', memberBtn: 'Become a Member' },
        langToggle: 'عربي',
        hero: {
            badge: 'Official Chapter at Cairo University',
            title1: 'Connect. Create.',
            title2: 'Transform Campus Life.',
            desc: 'We are a community of passionate students dedicated to innovation, cultural exchange, and sustainable development. Discover your potential with us.',
            btnJoin: 'Join the Movement',
            btnLearn: 'Learn More'
        },
        mission: {
            title: 'What do we offer',
            subtitle: 'Our offerings',
            pillars: [
                { title: 'Career Simulations', desc: 'Real-world "Missions" that mimic daily corporate tasks.' },
                { title: 'Startup Support', desc: 'Gain support through functional teams of students who are looking for bold experiences.' },
                { title: 'Impactful Events', desc: 'Workshops focused on business, sustainability, and global trends.' },
                { title: 'Certified Experience', desc: 'A hands-on "sandbox" role culminating in a globally recognized certificate.' },
                { title: 'Vetted Talent Pool', desc: 'Access to a diverse group of project-tested students with documented skills.' }
            ]
        },
        events: {
            title: 'Upcoming Highlights',
            desc: "Don't miss out on what we are planning next.",
            viewAll: 'View all events',
            e1Title: 'First General Meeting & Info Session',
            e1Desc: 'Join us to learn exactly what we do, meet the board, and find out how you can get involved this semester.',
            e1Loc: 'Main Campus Auditorium',
            e1Date: 'Oct 15, 2026',
            e2Title: 'Sustainability Workshop',
            e2Desc: 'A hands-on workshop led by industry professionals to help you ideate and prototype solutions for real-world environmental problems.',
            e2Loc: 'Innovation Lab, Room 302',
            e2Date: 'Nov 02, 2026'
        },
        about: {
            title: 'About Us',
            desc: 'Our goal is to reach students where they are by opening doors for discovery and experience. We aim to empower them within a nourishing environment that elevates their ideas, encourages the sharing of experiences.',
            vision: 'Our Vision',
            visionDesc: 'To become one of the go-to communities for students who want to grow, explore opportunities, and help build a more sustainable future.',
            mission: 'Our Mission',
            missionDesc: 'Empowering Cairo University students through hands-on discovery and a supportive community, building future talent to drive lasting, sustainable impact.',
            pillarsTitle: 'Our Core Pillars',
            pillars: [
                { title: 'Students at the Core', desc: 'You are the driver of change. Built entirely by students, for students, we ensure you have the agency and control to shape our direction and make an actual change.' },
                { title: 'A Cultivating Community', desc: 'This is a safe and comfortable community where you truly belong. We foster an inclusive environment that encourages you to linger around, connect, and grow.' },
                { title: 'Unleashing Empowerment', desc: 'Empowerment is the ultimate goal. We act as a supportive hub and a safe sandbox for you to confidently unleash your ideas and capabilities.' },
                { title: 'Limitless Collaboration', desc: 'Collaboration is the key. We don\'t operate in silos; instead, we actively collaborate with local and global partners who share our vision.' },
                { title: 'Purpose-Driven Meaning', desc: 'Meaning is our compass. In a world full of distraction, we focus relentlessly on delivering things that really matter.' },
                { title: 'Applied Knowledge', desc: 'We believe that theory only goes so far. Hands-on, real-world experiences are the vital sparks that drive real change.' }
            ],
            structureTitle: 'Our Structure',
            structL1: 'Cairo University Leadership',
            structL2: 'Chairman of UNESCO Club',
            structL3: 'Faculty Board',
            structFaculties: ['Faculty of Engineering', 'Faculty of Arts', 'Faculty of Science', 'Faculty of Medicine', 'Faculty of Commerce', 'Multiple Faculties...'],
            structL4: 'Extended Student Board',
            structAmbassador: 'Executive Ambassador',
            structHeadOps: 'Head of Operations & Internal Affairs',
            structOpsTeams: ['Marketing', 'Public Relations (PR)', 'Operations & Logistics'],
            structHeadValue: 'Head of Value Creation and Delivery',
            structValueTeams: ['Innovation', 'Sustainability', 'Science', 'Alumni & Experts'],
            structHeadPeople: 'Head of People and Culture',
            structPeopleTeams: ['People & Culture'],
            structValueText: 'Provides Value For',
            structL6: 'Club Members',
            keyPeopleTitle: 'Key People',
            keyPeopleList: [
                { name: 'John Doe', role: 'Chairman', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80' },
                { name: 'Jane Smith', role: 'Executive Ambassador', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80' },
                { name: 'Ahmed Ali', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80' },
                { name: 'Sara Hassan', role: 'Head of Value Creation', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80' },
                { name: 'Omar Khaled', role: 'Head of People & Culture', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80' }
            ]
        },
        partners: {
            heroTitle: 'Partner With UNESCO Club – Cairo University',
            heroSubtitle: 'Empower the Next Generation of Professionals',
            targetAudience: 'Are you a manager, HR professional, or part of an Employer Branding team in a company in Egypt? We provide a trusted talent pipeline of students who are capable of actively becoming a part of your workforce without much training, backed by a solid skill basis.',
            whyTitle: 'Why Partner With Us?',
            whyIntro: 'Our organization is designed to bridge the gap between academic theory and corporate reality. By partnering with us, you gain:',
            why1Title: 'Direct Access to Top Talent',
            why1Desc: 'We offer access to a diverse pool of students and talents, including our core team, active members, and other students in our wider community.',
            why2Title: 'Proven, Practical Experience',
            why2Desc: 'Our students deliver real impact, having worked on real projects and tasks within our club.',
            why3Title: 'Data-Driven Recruitment',
            why3Desc: 'We streamline your hiring process by providing a documented feedback record and a comprehensive skills map for our students.',
            collabTitle: 'How We Can Collaborate',
            collabIntro: 'We are actively seeking to build mutually beneficial relationships and reach out to potential partners, collaborators, and sponsors. Opportunities include:',
            collab1Title: 'Hosting and Training Agreements',
            collab1Desc: 'We invite companies to partner with us and engage in agreements to host and train a number of students.',
            collab2Title: 'Brand Visibility',
            collab2Desc: 'Collaborate with us to promote your initiatives across the university community.',
            ctaTitle: 'Ready to Build Your Talent Pipeline?',
            ctaDesc: 'Connect with our Public Relations team today to discuss how we can tailor a partnership to meet your recruitment needs and elevate your employer brand on campus.',
            ctaBtn: 'Contact PR Team'
        },
        initiatives: {
            title: 'Our Initiatives',
            desc: 'Explore our latest projects, campaigns, and discover how you can get involved in making a real impact.',
            categoryLabel: 'Category:',
            deadlineLabel: 'Deadline',
            daysLeftLabel: 'Days Left',
            expiredLabel: 'Expired',
            btnDiscover: 'Discover more',
            btnBack: 'Back to Initiatives',
            aboutTitle: 'About this Initiative',
            statusLabels: {
                active: 'Active',
                expired: 'Expired',
                comingSoon: 'Coming soon',
                onHold: 'On hold',
                open: 'Open'
            },
            list: [
                {
                    id: 1,
                    title: 'Initiative 1: Campus Hackathon',
                    category: 'Innovation',
                    status: 'open',
                    brief: 'A 48-hour innovation challenge focusing on solving campus-related problems using technology and design thinking.',
                    fullDesc: 'Join us for the ultimate Campus Hackathon! This initiative is designed to bring together brilliant minds from various faculties to collaborate, ideate, and prototype solutions for everyday campus challenges. Whether you are a coder, designer, or business strategist, there is a place for you. Mentors will be available to guide teams, and the winning ideas will receive funding and support for real-world implementation.',
                    deadline: '2026-05-20'
                },
                {
                    id: 2,
                    title: 'Initiative 2: Green Campus Drive',
                    category: 'Sustainability',
                    status: 'active',
                    brief: 'An ongoing campaign to reduce plastic waste and promote recycling habits across all university faculties.',
                    fullDesc: 'The Green Campus Drive is our flagship sustainability project for the year. We are deploying smart recycling bins across major faculty buildings, hosting weekly awareness sessions, and partnering with local recycling firms. By participating in this active initiative, you will help us track our waste reduction metrics and organize community clean-up events. Join the movement to make our university a greener, cleaner place to learn.',
                    deadline: '2026-12-31'
                },
                {
                    id: 3,
                    title: 'Initiative 3: Science Literacy Week',
                    category: 'Science',
                    status: 'comingSoon',
                    brief: 'A week dedicated to making complex scientific concepts accessible through interactive workshops and open talks.',
                    fullDesc: 'Get ready for Science Literacy Week! We are currently finalizing our lineup of guest speakers, researchers, and science communicators. This week-long event will feature hands-on experiments, debunking common scientific myths, and exploring the latest breakthroughs in various fields. Stay tuned for the official schedule release and registration links.',
                    deadline: '2026-10-05'
                },
                {
                    id: 4,
                    title: 'Initiative 4: Eco-Tech Incubator',
                    category: 'Innovation',
                    status: 'onHold',
                    brief: 'A specialized incubator program for student startups focused on solving environmental challenges.',
                    fullDesc: 'The Eco-Tech Incubator program is currently on hold as we secure additional funding and corporate mentorship partners. Once resumed, this initiative will provide selected student teams with seed funding, workspace, and intensive 3-month mentorship to turn their sustainable ideas into viable startups. We appreciate your patience and will announce updates soon.',
                    deadline: '2026-08-15'
                },
                {
                    id: 5,
                    title: 'Initiative 5: Energy Audit Challenge',
                    category: 'Sustainability',
                    status: 'expired',
                    brief: 'A past competition where students audited university buildings and proposed energy-saving strategies.',
                    fullDesc: 'The Energy Audit Challenge has successfully concluded! Over 20 teams participated in auditing three major university buildings. The winning team proposed an automated lighting system that is currently being reviewed by the university administration for implementation. Thank you to all who participated and helped make our campus more energy-efficient.',
                    deadline: '2025-11-10'
                }
            ]
        },
        join: {
            title: 'Join Us',
            desc: 'Choose your path and become a part of our growing community.',
            memberTitle: 'Join as a Member',
            memberDesc: 'Click to see member benefits and apply',
            benefitsTitle: 'Membership Benefits:',
            b1: 'Benefit from all club activities',
            b2: 'Attend club events and panel discussions',
            b3: 'Get business support for your ideas',
            b4: 'Explore areas of your interest such as innovation, science, and sustainability.',
            memberFooter: 'Become a part of our network and an active community member.',
            btnJoinForm: 'Join Now',

            teamTitle: 'Join our Team',
            teamDesc: 'Click to see team benefits and explore roles',
            teamBenefitsTitle: 'Team Benefits:',
            tb1: 'Gain experience from real projects and tasks.',
            tb2: 'Elevate your leadership and your skill sets.',
            tb3: 'Work with colleagues from different faculties and expand your network.',
            tb4: 'Get recognized by an official UNESCO student chapter.',
            teamFooter: 'Become a team member and lead the change.',
            btnDiscover: 'Discover our Teams',

            teamsSectionTitle: 'Explore Our Teams',
            btnJoinTeamForm: 'Join Now',
            teamsList: [
                { title: 'Innovation & Entrepreneurship', desc: 'This team is the architect of practical experience. They design environments and educational programs that bridge the gap between theory and practice, fostering an entrepreneurial mindset and helping students build real-world professional skills.' },
                { title: 'Sustainability & Social Impact', desc: 'The champions of positive impact. They drive awareness and inspire action around critical environmental and social challenges. From promoting sustainable habits to advocating for mental well-being, they cultivate a more conscious and responsible campus community.' },
                { title: 'Science & Literacy', desc: 'Acting as the bridge between academia and curiosity, this team makes complex scientific concepts engaging and accessible. They foster intellectual growth, promote scientific literacy, and connect our student body with the broader academic and research world.' },
                { title: 'Alumni & Experts Management', desc: 'The master networkers of our club. They serve as the strategic relationship hub, building and sustaining vital connections between our internal teams and external industry experts, thought leaders, and alumni to enrich our community with real-world insights.' },
                { title: 'Public Relations (PR)', desc: 'The voice and external ambassadors of the club. They forge strong, strategic relationships with other student organizations, university departments, and potential sponsors. They manage our external communications and amplify our reach across the university ecosystem.' },
                { title: 'Operations & Logistics', desc: 'The engine that keeps everything running smoothly. They are the master planners and problem-solvers who manage the on-ground realities and event logistics, ensuring that every initiative is executed efficiently and to the highest possible standard.' },
                { title: 'Marketing', desc: 'The creative force behind our brand. Operating through specialized pods in Social Media Management, Content Creation, and Graphic Design, this team shapes our visual identity, crafts compelling narratives, and engages our digital community through strategic and visually stunning campaigns.' },
                { title: 'People & Culture (HR)', desc: 'The heart of our organization. Dedicated to the growth, well-being, and engagement of every member, they ensure a positive, inclusive, and highly productive team environment. From talent acquisition to cultivating a strong team culture, they make sure our members thrive.' }
            ]
        },
        team: {
            title: 'Team Portal',
            desc: 'Internal intranet access for UNESCO Club members only.',
            id: 'Member ID',
            idPlaceholder: 'e.g. CU-26-001',
            pass: 'Password',
            passPlaceholder: '••••••••',
            remember: 'Remember me',
            forgot: 'Forgot password?',
            signIn: 'Sign In (Coming Soon)'
        },
        footer: {
            desc: 'Empowering the next generation of campus leaders. Join us to make a lasting impact on your university experience through education, science, and culture.',
            links: 'Quick Links',
            connect: 'Connect',
            rights: 'UNESCO Club - Cairo University. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    },
    ar: {
        nav: { discover: 'اكتشف', about: 'من نحن', initiatives: 'المبادرات', partners: 'الشركاء', join: 'انضم إلينا', team: 'بوابة الفريق', memberBtn: 'كن عضواً' },
        langToggle: 'English',
        hero: {
            badge: 'الفرع الرسمي بجامعة القاهرة',
            title1: 'تواصل. ابتكر.',
            title2: 'غيّر الحياة الجامعية.',
            desc: 'نحن مجتمع من الطلاب الشغوفين المكرسين للابتكار والتبادل الثقافي والتنمية المستدامة. اكتشف إمكاناتك معنا.',
            btnJoin: 'انضم للحركة',
            btnLearn: 'اعرف المزيد'
        },
        mission: {
            title: 'ماذا نقدم',
            subtitle: 'عروضنا',
            pillars: [
                { title: 'محاكاة المسار المهني', desc: '"مهام" واقعية تحاكي المهام المؤسسية اليومية.' },
                { title: 'دعم الشركات الناشئة', desc: 'احصل على الدعم من خلال فرق وظيفية من الطلاب الباحثين عن تجارب جريئة.' },
                { title: 'فعاليات مؤثرة', desc: 'ورش عمل تركز على الأعمال والاستدامة والاتجاهات العالمية.' },
                { title: 'خبرة معتمدة', desc: 'دور عملي في "بيئة تجريبية" يُتوج بشهادة معترف بها عالمياً.' },
                { title: 'مجموعة مواهب موثوقة', desc: 'الوصول إلى مجموعة متنوعة من الطلاب الذين تم اختبارهم في مشاريع ولديهم مهارات موثقة.' }
            ]
        },
        events: {
            title: 'أبرز الفعاليات القادمة',
            desc: 'لا تفوت ما نخطط له بعد ذلك.',
            viewAll: 'عرض جميع الفعاليات',
            e1Title: 'الاجتماع العام الأول وجلسة تعريفية',
            e1Desc: 'انضم إلينا لمعرفة ما نقوم به بالضبط، ومقابلة أعضاء المجلس، ومعرفة كيف يمكنك المشاركة هذا الفصل الدراسي.',
            e1Loc: 'قاعة الحرم الجامعي الرئيسية',
            e1Date: '١٥ أكتوبر ٢٠٢٦',
            e2Title: 'ورشة عمل الاستدامة',
            e2Desc: 'ورشة عمل عملية بقيادة متخصصين لمساعدتك على ابتكار وتصميم حلول للمشاكل البيئية الواقعية.',
            e2Loc: 'مختبر الابتكار، غرفة ٣٠٢',
            e2Date: '٠٢ نوفمبر ٢٠٢٦'
        },
        about: {
            title: 'من نحن',
            desc: 'للوصول إلى الطلاب حيثما كانوا من خلال فتح أبواب الاكتشاف والتجربة. نهدف إلى تمكينهم داخل بيئة حاضنة ترتقي بأفكارهم وتشجع على تبادل الخبرات.',
            vision: 'رؤيتنا',
            visionDesc: 'أن نصبح أحد المجتمعات الرائدة للطلاب الذين يرغبون في النمو واستكشاف الفرص والمساعدة في بناء مستقبل أكثر استدامة.',
            mission: 'مهمتنا',
            missionDesc: 'تمكين طلاب جامعة القاهرة من خلال الاكتشاف العملي والمجتمع الداعم، وبناء المواهب المستقبلية لدفع تأثير مستدام وطويل الأمد.',
            pillarsTitle: 'ركائزنا الأساسية',
            pillars: [
                { title: 'الطلاب في المركز', desc: 'أنت محرك التغيير. صُنع النادي بالكامل بواسطة الطلاب ومن أجلهم، لنضمن أن لديك القوة والتحكم لتشكيل اتجاهنا وإحداث تغيير حقيقي.' },
                { title: 'مجتمع حاضن', desc: 'هذا مجتمع آمن ومريح تنتمي إليه حقاً. نحن نعزز بيئة شاملة تشجعك على البقاء والتواصل والنمو.' },
                { title: 'إطلاق العنان للتمكين', desc: 'التمكين هو الهدف النهائي. نحن نعمل كمركز داعم وبيئة آمنة لك لإطلاق العنان لأفكارك وقدراتك بثقة.' },
                { title: 'تعاون بلا حدود', desc: 'التعاون هو المفتاح. نحن لا نعمل في جزر منعزلة؛ بل نتعاون بنشاط مع شركاء محليين وعالميين يشاركوننا رؤيتنا.' },
                { title: 'معنى هادف', desc: 'المعنى هو بوصلتنا. في عالم مليء بالمشتتات، نركز بلا هوادة على تقديم الأشياء التي تهم حقاً.' },
                { title: 'المعرفة التطبيقية', desc: 'نحن نؤمن بأن النظرية لها حدود. التجارب العملية والواقعية هي الشرارات الحيوية التي تدفع التغيير الحقيقي.' }
            ],
            structureTitle: 'هيكل النادي',
            structL1: 'قيادة جامعة القاهرة',
            structL2: 'رئيس نادي اليونسكو',
            structL3: 'مجلس الكليات',
            structFaculties: ['كلية الهندسة', 'كلية الآداب', 'كلية العلوم', 'كلية الطب', 'كلية التجارة', 'كليات متعددة...'],
            structL4: 'مجلس الطلاب الموسع',
            structAmbassador: 'السفير التنفيذي',
            structHeadOps: 'رئيس العمليات والشؤون الداخلية',
            structOpsTeams: ['التسويق', 'العلاقات العامة', 'العمليات والدعم اللوجستي'],
            structHeadValue: 'رئيس خلق وتقديم القيمة',
            structValueTeams: ['الابتكار', 'الاستدامة', 'العلوم', 'الخريجون والخبراء'],
            structHeadPeople: 'رئيس الأفراد والثقافة',
            structPeopleTeams: ['الأفراد والثقافة'],
            structValueText: 'يقدمون القيمة لـ',
            structL6: 'أعضاء النادي',
            keyPeopleTitle: 'الشخصيات الرئيسية',
            keyPeopleList: [
                { name: 'يحيى أحمد', role: 'رئيس النادي', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80' },
                { name: 'جنى محمد', role: 'السفير التنفيذي', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80' },
                { name: 'أحمد علي', role: 'رئيس العمليات', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80' },
                { name: 'سارة حسن', role: 'رئيس خلق القيمة', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80' },
                { name: 'عمر خالد', role: 'رئيس الأفراد والثقافة', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80' }
            ]
        },
        partners: {
            heroTitle: 'شارك مع نادي اليونسكو – جامعة القاهرة',
            heroSubtitle: 'مكّن الجيل القادم من المحترفين',
            targetAudience: 'هل أنت مدير، أو أخصائي موارد بشرية، أو جزء من فريق بناء العلامة التجارية لجهة عمل في مصر؟ نحن نوفر خط إمداد موثوق للمواهب من الطلاب القادرين على أن يصبحوا جزءاً فاعلاً من القوى العاملة لديك دون الحاجة للكثير من التدريب، مدعومين بأساس قوي من المهارات.',
            whyTitle: 'لماذا تشارك معنا؟',
            whyIntro: 'تم تصميم منظمتنا لسد الفجوة بين النظرية الأكاديمية والواقع المؤسسي. من خلال الشراكة معنا، تكسب:',
            why1Title: 'وصول مباشر لأفضل المواهب',
            why1Desc: 'نوفر وصولاً إلى مجموعة متنوعة من الطلاب والمواهب، بما في ذلك فريقنا الأساسي، والأعضاء النشطين، والطلاب الآخرين في مجتمعنا الأوسع.',
            why2Title: 'خبرة عملية ومثبتة',
            why2Desc: 'يحقق طلابنا تأثيراً حقيقياً، حيث عملوا على مشاريع ومهام حقيقية داخل نادينا.',
            why3Title: 'توظيف قائم على البيانات',
            why3Desc: 'نسهل عملية التوظيف الخاصة بك من خلال توفير سجل ملاحظات موثق وخريطة مهارات شاملة لطلابنا.',
            collabTitle: 'كيف يمكننا التعاون',
            collabIntro: 'نسعى بنشاط لبناء علاقات مفيدة للطرفين والتواصل مع الشركاء والمتعاونين والرعاة المحتملين. تشمل الفرص:',
            collab1Title: 'اتفاقيات الاستضافة والتدريب',
            collab1Desc: 'ندعو الشركات للشراكة معنا وإبرام اتفاقيات لاستضافة وتدريب عدد من الطلاب.',
            collab2Title: 'إبراز العلامة التجارية',
            collab2Desc: 'تعاون معنا للترويج لمبادراتك في جميع أنحاء المجتمع الجامعي.',
            ctaTitle: 'هل أنت مستعد لبناء خط إمداد المواهب الخاص بك؟',
            ctaDesc: 'تواصل مع فريق العلاقات العامة لدينا اليوم لمناقشة كيف يمكننا تصميم شراكة تلبي احتياجات التوظيف الخاصة بك وترتقي بالعلامة التجارية لشركتك في الحرم الجامعي.',
            ctaBtn: 'تواصل مع العلاقات العامة'
        },
        initiatives: {
            title: 'مبادراتنا',
            desc: 'استكشف أحدث مشاريعنا وحملاتنا، واكتشف كيف يمكنك المشاركة في إحداث تأثير حقيقي.',
            categoryLabel: 'الفئة:',
            deadlineLabel: 'الموعد النهائي',
            daysLeftLabel: 'أيام متبقية',
            expiredLabel: 'منتهي',
            btnDiscover: 'اكتشف المزيد',
            btnBack: 'العودة للمبادرات',
            aboutTitle: 'عن هذه المبادرة',
            statusLabels: {
                active: 'نشط',
                expired: 'منتهي',
                comingSoon: 'قريباً',
                onHold: 'مؤجل',
                open: 'مفتوح'
            },
            list: [
                {
                    id: 1,
                    title: 'المبادرة 1: هاكاثون الحرم الجامعي',
                    category: 'الابتكار',
                    status: 'open',
                    brief: 'تحدي ابتكار لمدة 48 ساعة يركز على حل المشكلات المتعلقة بالحرم الجامعي باستخدام التكنولوجيا والتفكير التصميمي.',
                    fullDesc: 'انضم إلينا في هاكاثون الحرم الجامعي النهائي! تم تصميم هذه المبادرة لجمع العقول اللامعة من مختلف الكليات للتعاون، وطرح الأفكار، ووضع نماذج أولية لحلول لتحديات الحرم الجامعي اليومية. سواء كنت مبرمجاً، أو مصمماً، أو استراتيجياً للأعمال، فهناك مكان لك. سيتوفر مرشدون لتوجيه الفرق، وستتلقى الأفكار الفائزة التمويل والدعم للتنفيذ على أرض الواقع.',
                    deadline: '2026-05-20'
                },
                {
                    id: 2,
                    title: 'المبادرة 2: حملة الحرم الجامعي الأخضر',
                    category: 'الاستدامة',
                    status: 'active',
                    brief: 'حملة مستمرة لتقليل النفايات البلاستيكية وتعزيز عادات إعادة التدوير في جميع كليات الجامعة.',
                    fullDesc: 'حملة الحرم الجامعي الأخضر هي مشروعنا الرائد للاستدامة لهذا العام. نقوم بنشر صناديق إعادة تدوير ذكية عبر مباني الكليات الرئيسية، واستضافة جلسات توعية أسبوعية، والشراكة مع شركات إعادة التدوير المحلية. من خلال المشاركة في هذه المبادرة النشطة، ستساعدنا في تتبع مقاييس تقليل النفايات لدينا وتنظيم فعاليات تنظيف مجتمعية. انضم للحركة لجعل جامعتنا مكاناً أكثر خضرة ونظافة للتعلم.',
                    deadline: '2026-12-31'
                },
                {
                    id: 3,
                    title: 'المبادرة 3: أسبوع الثقافة العلمية',
                    category: 'العلوم',
                    status: 'comingSoon',
                    brief: 'أسبوع مخصص لجعل المفاهيم العلمية المعقدة في متناول الجميع من خلال ورش عمل تفاعلية ومحادثات مفتوحة.',
                    fullDesc: 'استعد لأسبوع الثقافة العلمية! نحن نضع حالياً اللمسات الأخيرة على تشكيلة المتحدثين الضيوف والباحثين وموصلي العلوم. سيتضمن هذا الحدث الذي يستمر أسبوعاً تجارب عملية، ودحض الخرافات العلمية الشائعة، واستكشاف أحدث الاكتشافات في مختلف المجالات. ترقبوا إصدار الجدول الزمني الرسمي وروابط التسجيل.',
                    deadline: '2026-10-05'
                },
                {
                    id: 4,
                    title: 'المبادرة 4: حاضنة التكنولوجيا البيئية',
                    category: 'الابتكار',
                    status: 'onHold',
                    brief: 'برنامج حاضنة أعمال متخصص للشركات الطلابية الناشئة التي تركز على حل التحديات البيئية.',
                    fullDesc: 'برنامج حاضنة التكنولوجيا البيئية معلق حالياً حيث نقوم بتأمين تمويل إضافي وشركاء إرشاد من الشركات. بمجرد استئنافه، ستوفر هذه المبادرة للفرق الطلابية المختارة تمويلاً أولياً، ومساحة عمل، وإرشاداً مكثفاً لمدة 3 أشهر لتحويل أفكارهم المستدامة إلى شركات ناشئة قابلة للحياة. نقدر سعة صدركم وسنعلن عن التحديثات قريباً.',
                    deadline: '2026-08-15'
                },
                {
                    id: 5,
                    title: 'المبادرة 5: تحدي تدقيق الطاقة',
                    category: 'الاستدامة',
                    status: 'expired',
                    brief: 'مسابقة سابقة حيث قام الطلاب بتدقيق مباني الجامعة واقتراح استراتيجيات لتوفير الطاقة.',
                    fullDesc: 'انتهى تحدي تدقيق الطاقة بنجاح! شارك أكثر من 20 فريقاً في تدقيق ثلاثة مباني جامعية رئيسية. اقترح الفريق الفائز نظام إضاءة آلي يتم مراجعته حالياً من قبل إدارة الجامعة لتنفيذه. شكراً لجميع من شارك وساعد في جعل الحرم الجامعي أكثر كفاءة في استخدام الطاقة.',
                    deadline: '2025-11-10'
                }
            ]
        },
        join: {
            title: 'انضم إلينا',
            desc: 'اختر مسارك وكن جزءاً من مجتمعنا المتنامي.',
            memberTitle: 'انضم كعضو',
            memberDesc: 'اضغط لرؤية مزايا العضوية والتقديم',
            benefitsTitle: 'مزايا العضوية:',
            b1: 'الاستفادة من جميع أنشطة النادي',
            b2: 'حضور فعاليات النادي والجلسات النقاشية',
            b3: 'الحصول على دعم لأفكارك ومشاريعك',
            b4: 'استكشاف مجالات اهتمامك مثل الابتكار والعلوم والاستدامة.',
            memberFooter: 'كن جزءاً من شبكتنا وعضواً فاعلاً في المجتمع.',
            btnJoinForm: 'انضم الآن',

            teamTitle: 'انضم لفريقنا',
            teamDesc: 'اضغط لرؤية المزايا واستكشاف الفرق',
            teamBenefitsTitle: 'مزايا الانضمام للفريق:',
            tb1: 'اكتساب خبرة من العمل على مشاريع ومهام حقيقية.',
            tb2: 'تطوير مهاراتك القيادية وقدراتك الشخصية.',
            tb3: 'العمل مع زملاء من كليات مختلفة وتوسيع شبكة علاقاتك.',
            tb4: 'الحصول على تقدير من فرع طلابي رسمي لليونسكو.',
            teamFooter: 'كن عضواً في الفريق وقد التغيير.',
            btnDiscover: 'اكتشف فرقنا',

            teamsSectionTitle: 'استكشف فرقنا',
            btnJoinTeamForm: 'انضم الآن',
            teamsList: [
                { title: 'الابتكار وريادة الأعمال', desc: 'هذا الفريق هو مهندس الخبرة العملية. يصممون بيئات وبرامج تعليمية تسد الفجوة بين النظرية والتطبيق، مما يعزز عقلية ريادة الأعمال ويساعد الطلاب على بناء مهارات مهنية واقعية.' },
                { title: 'الاستدامة والتأثير المجتمعي', desc: 'أبطال التأثير الإيجابي. ينشرون الوعي ويلهمون العمل حول التحديات البيئية والمجتمعية الحرجة. من تعزيز العادات المستدامة إلى الدعوة للرفاهية النفسية، يزرعون مجتمعاً جامعياً أكثر وعياً ومسؤولية.' },
                { title: 'العلوم ومحو الأمية', desc: 'يعمل هذا الفريق كجسر بين الأوساط الأكاديمية والفضول، ويجعل المفاهيم العلمية المعقدة جذابة ويمكن الوصول إليها. يعززون النمو الفكري، وينشرون الثقافة العلمية، ويربطون طلابنا بالعالم الأكاديمي والبحثي الأوسع.' },
                { title: 'إدارة الخريجين والخبراء', desc: 'سادة بناء الشبكات في نادينا. يعملون كمركز للعلاقات الاستراتيجية، وبناء واستدامة الروابط الحيوية بين فرقنا الداخلية وخبراء الصناعة الخارجيين، وقادة الفكر، والخريجين لإثراء مجتمعنا برؤى واقعية.' },
                { title: 'العلاقات العامة', desc: 'صوت النادي وسفرائه الخارجيين. يقيمون علاقات استراتيجية قوية مع المنظمات الطلابية الأخرى، والأقسام الجامعية، والرعاة المحتملين. يديرون اتصالاتنا الخارجية ويوسعون نطاق وصولنا عبر النظام البيئي للجامعة.' },
                { title: 'العمليات والدعم اللوجستي', desc: 'المحرك الذي يضمن سير كل شيء بسلاسة. هم المخططون الرئيسيون وحلالو المشاكل الذين يديرون الحقائق على أرض الواقع واللوجستيات الخاصة بالفعاليات، لضمان تنفيذ كل مبادرة بكفاءة وبأعلى المعايير الممكنة.' },
                { title: 'التسويق', desc: 'القوة الإبداعية وراء علامتنا التجارية. يعمل هذا الفريق من خلال وحدات متخصصة في إدارة وسائل التواصل الاجتماعي، وصناعة المحتوى، والتصميم الجرافيكي، ويشكل هويتنا البصرية، ويصوغ قصصاً مقنعة، ويتفاعل مع مجتمعنا الرقمي من خلال حملات استراتيجية مذهلة بصرياً.' },
                { title: 'الأفراد والثقافة (الموارد البشرية)', desc: 'قلب منظمتنا. مكرسون لنمو ورفاهية ومشاركة كل عضو، ويضمنون بيئة فريق إيجابية وشاملة ومنتجة للغاية. من استقطاب المواهب إلى زراعة ثقافة فريق قوية، يتأكدون من ازدهار أعضائنا.' }
            ]
        },
        team: {
            title: 'بوابة الفريق',
            desc: 'شبكة داخلية لأعضاء نادي اليونسكو فقط.',
            id: 'رقم العضوية',
            idPlaceholder: 'مثال: CU-26-001',
            pass: 'كلمة المرور',
            passPlaceholder: '••••••••',
            remember: 'تذكرني',
            forgot: 'هل نسيت كلمة المرور؟',
            signIn: 'تسجيل الدخول (قريباً)'
        },
        footer: {
            desc: 'تمكين الجيل القادم من قادة الحرم الجامعي. انضم إلينا لإحداث تأثير دائم على تجربتك الجامعية من خلال التعليم والعلوم والثقافة.',
            links: 'روابط سريعة',
            connect: 'تواصل معنا',
            rights: 'نادي اليونسكو - جامعة القاهرة. جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة'
        }
    }
};

const teamIcons = [Lightbulb, Leaf, Microscope, GraduationCap, Megaphone, Settings, Palette, Heart];

// Initiative Status Configuration Colors
const statusConfig = {
    active: { color: '#4FB293' },      // Green
    expired: { color: '#D8552C' },     // Red
    comingSoon: { color: '#2D9BB1' },  // Blue
    onHold: { color: '#7F888F' },      // Grey
    open: { color: '#E4A429' }         // Orange
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [lang, setLang] = useState('en');
    const [expandedJoinCard, setExpandedJoinCard] = useState(null);
    const [showTeams, setShowTeams] = useState(false);
    const [selectedInitiative, setSelectedInitiative] = useState(null); // Controls detail view

    const t = translations[lang];
    const isRTL = lang === 'ar';

    const navLinks = [
        { name: t.nav.discover, id: 'home' },
        { name: t.nav.about, id: 'about' },
        { name: t.nav.initiatives, id: 'initiatives' },
        { name: t.nav.join, id: 'join' },
        { name: t.nav.partners, id: 'partners' },
        { name: t.nav.team, id: 'team-portal' }
    ];

    const toggleLanguage = () => {
        setLang(lang === 'en' ? 'ar' : 'en');
    };

    const handleDiscoverTeams = (e) => {
        e.stopPropagation();
        setShowTeams(true);
        setTimeout(() => {
            document.getElementById('teams-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    return (
        <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-[#E5F2FC] selection:text-[#005FA8] ${isRTL ? 'font-arabic' : ''}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Google Font Inter Injection */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
                            <img src="unesco_logo.png" alt="UNESCO Logo" className="h-12 sm:h-14 w-auto object-contain" />
                            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">UNESCO Club <span className="text-[#0077D4]">- CU</span></span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        setActiveTab(link.id);
                                        if (link.id !== 'join') setShowTeams(false);
                                        if (link.id !== 'initiatives') setSelectedInitiative(null); // Reset detail view
                                    }}
                                    className={`text-sm font-medium transition-colors hover:text-[#0077D4] ${activeTab === link.id ? 'text-[#0077D4] border-b-2 border-[#0077D4] pb-1' : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        {/* Desktop CTA & Language Toggle */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0077D4] transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                {t.langToggle}
                            </button>
                            <button
                                onClick={() => { setActiveTab('join'); setShowTeams(false); setSelectedInitiative(null); }}
                                className="bg-[#0077D4] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#005FA8] transition-colors shadow-sm shadow-[#0077D4]/30"
                            >
                                {t.nav.memberBtn}
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={toggleLanguage}
                                className="text-sm font-medium text-slate-600"
                            >
                                {t.langToggle}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-slate-900 focus:outline-none"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        setActiveTab(link.id);
                                        if (link.id !== 'join') setShowTeams(false);
                                        if (link.id !== 'initiatives') setSelectedInitiative(null);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-start px-3 py-3 rounded-md text-base font-medium ${activeTab === link.id ? 'bg-[#E5F2FC] text-[#005FA8]' : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    setActiveTab('join');
                                    setShowTeams(false);
                                    setSelectedInitiative(null);
                                    setIsMenuOpen(false);
                                }}
                                className="w-full mt-4 bg-[#0077D4] text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-[#005FA8] transition-colors text-center"
                            >
                                {t.nav.memberBtn}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <main>
                {/* HOME TAB */}
                {activeTab === 'home' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Hero Section */}
                        <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-36 border-b border-slate-200">
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                <div className="absolute start-0 end-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#0077D4] opacity-10 blur-[100px]"></div>
                            </div>

                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F2FC] border border-[#B3DBF6] text-[#005FA8] text-sm font-medium mb-8">
                                    <span className="flex h-2 w-2 rounded-full bg-[#0077D4]"></span>
                                    {t.hero.badge}
                                </div>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
                                    {t.hero.title1} <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077D4] to-[#00A1E4]">
                                        {t.hero.title2}
                                    </span>
                                </h1>
                                <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 mx-auto mb-10">
                                    {t.hero.desc}
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button
                                        onClick={() => { setActiveTab('join'); setShowTeams(false); setSelectedInitiative(null); }}
                                        className="flex items-center justify-center gap-2 bg-[#0077D4] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#005FA8] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        {t.hero.btnJoin} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('about')}
                                        className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-colors"
                                    >
                                        {t.hero.btnLearn}
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Offerings Section */}
                        <section className="py-20 bg-slate-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.mission.title}</h2>
                                    <h3 className="text-xl font-semibold text-[#0077D4]">{t.mission.subtitle}</h3>
                                </div>

                                <div className="flex overflow-x-auto pb-10 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {t.mission.pillars.map((pillar, idx) => {
                                        const Icon = [Briefcase, Rocket, Sparkles, Award, Users][idx];
                                        return (
                                            <div key={idx} className="w-[85vw] sm:min-w-[320px] sm:max-w-[350px] shrink-0 snap-center bg-[#115A9E] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-white flex flex-col group">
                                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-white/30 transition-colors">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                                <p className="text-white/90 leading-relaxed grow">{pillar.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>

                        {/* Latest Highlights / Events */}
                        <section className="py-20 bg-white border-t border-slate-100">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900">{t.events.title}</h2>
                                        <p className="mt-2 text-slate-600">{t.events.desc}</p>
                                    </div>
                                    <button className="text-[#0077D4] font-medium hover:text-[#005FA8] flex items-center gap-1 group">
                                        {t.events.viewAll} <ChevronRight className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Highlight Card 1 */}
                                    <div className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row">
                                        <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-100 relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Students at a conference"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="sm:w-3/5 p-6 flex flex-col justify-center bg-white">
                                            <div className="flex items-center gap-2 text-xs font-bold text-[#0077D4] uppercase tracking-wider mb-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{t.events.e1Date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0077D4] transition-colors">{t.events.e1Title}</h3>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                                <MapPin className="w-4 h-4" />
                                                <span>{t.events.e1Loc}</span>
                                            </div>
                                            <p className="text-slate-600 text-sm line-clamp-2">{t.events.e1Desc}</p>
                                        </div>
                                    </div>

                                    {/* Highlight Card 2 */}
                                    <div className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row">
                                        <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-100 relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Tech workshop"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="sm:w-3/5 p-6 flex flex-col justify-center bg-white">
                                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{t.events.e2Date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{t.events.e2Title}</h3>
                                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                                <MapPin className="w-4 h-4" />
                                                <span>{t.events.e2Loc}</span>
                                            </div>
                                            <p className="text-slate-600 text-sm line-clamp-2">{t.events.e2Desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* ABOUT US TAB */}
                {activeTab === 'about' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white pb-20">
                        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 text-center px-4">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.about.title}</h1>
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                                    {t.about.desc}
                                </p>
                            </div>
                        </section>

                        <section className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                <div className="bg-[#E5F2FC] p-10 rounded-3xl relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className={`absolute top-0 ${isRTL ? 'start-0 -mt-4 -ms-4' : 'end-0 -mt-4 -me-4'} w-32 h-32 bg-white opacity-40 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700`}></div>
                                    <div className="w-16 h-16 bg-[#0077D4] text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.vision}</h2>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        {t.about.visionDesc}
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 p-10 rounded-3xl relative overflow-hidden shadow-sm group hover:shadow-md transition-shadow hover:border-[#B3DBF6]">
                                    <div className="w-16 h-16 bg-slate-50 border border-slate-200 text-[#0077D4] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#E5F2FC] group-hover:border-[#B3DBF6] transition-colors">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.mission}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {t.about.missionDesc}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Core Pillars Section */}
                        <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t.about.pillarsTitle}</h2>
                                <div className="w-24 h-1.5 bg-[#0077D4] mx-auto rounded-full"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 px-4 lg:px-8">
                                {t.about.pillars.map((pillar, idx) => {
                                    const Icon = [Users, Heart, Sparkles, Globe, Target, Lightbulb][idx];
                                    return (
                                        <div key={idx} className="relative bg-white border-x border-slate-200 pt-20 px-8 pb-20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center mt-4 mb-4 group hover:-translate-y-2 transition-transform duration-500">
                                            {/* Top Capital of Pillar */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-slate-300 rounded-sm shadow-sm border border-slate-400 group-hover:bg-[#0077D4] group-hover:border-[#005FA8] transition-colors"></div>
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100%] h-3 bg-slate-200 border-b border-x border-slate-300"></div>
                                            <div className="absolute top-7 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-slate-100 border-b border-x border-slate-200 rounded-b-md"></div>

                                            {/* Pillar Vertical Grooves (Fluting) */}
                                            <div className="absolute top-11 bottom-11 left-6 w-px bg-slate-100"></div>
                                            <div className="absolute top-11 bottom-11 right-6 w-px bg-slate-100"></div>
                                            <div className="absolute top-11 bottom-11 left-10 w-px bg-slate-50"></div>
                                            <div className="absolute top-11 bottom-11 right-10 w-px bg-slate-50"></div>

                                            {/* Pillar Content */}
                                            <div className="relative z-10 w-16 h-16 bg-[#115A9E] text-white rounded-full flex items-center justify-center shadow-lg mb-6 ring-4 ring-white group-hover:bg-[#0077D4] transition-colors">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                                            <p className="relative z-10 text-slate-600 font-medium leading-relaxed grow px-2">{pillar.desc}</p>

                                            {/* Bottom Base of Pillar */}
                                            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-slate-100 border-t border-x border-slate-200 rounded-t-md"></div>
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[100%] h-3 bg-slate-200 border-t border-x border-slate-300"></div>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-slate-300 rounded-sm shadow-sm border border-slate-400 group-hover:bg-[#0077D4] group-hover:border-[#005FA8] transition-colors"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Our Structure Section */}
                        <section className="py-24 bg-slate-50 border-t border-slate-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t.about.structureTitle}</h2>
                                    <div className="w-24 h-1.5 bg-[#0077D4] mx-auto rounded-full"></div>
                                </div>

                                <div className="flex flex-col items-center max-w-5xl mx-auto">
                                    {/* Level 1: CU Leadership */}
                                    <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-3 z-10 hover:-translate-y-1 transition-transform">
                                        <Landmark className="w-6 h-6 text-[#00A1E4]" />
                                        <span className="text-lg md:text-xl">{t.about.structL1}</span>
                                    </div>

                                    {/* Connector */}
                                    <div className="w-1 h-8 bg-slate-300"></div>

                                    {/* Level 2: Chairman */}
                                    <div className="bg-[#115A9E] text-white px-8 py-4 rounded-2xl font-bold shadow-md flex items-center gap-3 z-10 hover:-translate-y-1 transition-transform">
                                        <UserCircle className="w-6 h-6 text-[#B3DBF6]" />
                                        <span className="text-lg">{t.about.structL2}</span>
                                    </div>

                                    {/* Connector */}
                                    <div className="w-1 h-8 bg-slate-300"></div>

                                    {/* Level 3: Faculty Board */}
                                    <div className="bg-white border-2 border-[#0077D4] p-6 rounded-3xl shadow-sm text-center w-full max-w-3xl z-10 hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-bold text-[#0077D4] mb-5 flex items-center justify-center gap-2">
                                            <GraduationCap className="w-6 h-6" /> {t.about.structL3}
                                        </h3>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {t.about.structFaculties.map((faculty, idx) => (
                                                <span key={idx} className="bg-[#E5F2FC] text-[#005FA8] font-medium text-sm px-4 py-2 rounded-lg border border-[#B3DBF6]">
                                                    {faculty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="w-1 h-8 bg-slate-300"></div>

                                    {/* Level 4 & 5: Extended Student Board & Teams */}
                                    <div className="bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 p-8 rounded-3xl shadow-inner text-center w-full z-10">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-2">
                                            <Workflow className="w-7 h-7 text-slate-600" /> {t.about.structL4}
                                        </h3>

                                        <div className="flex flex-col items-center">
                                            {/* Executive Ambassador */}
                                            <div className="bg-[#0077D4] text-white px-8 py-4 rounded-xl font-bold shadow-md z-10 w-full max-w-sm text-center hover:-translate-y-1 transition-transform">
                                                {t.about.structAmbassador}
                                            </div>

                                            {/* Drop line from Ambassador */}
                                            <div className="w-1 h-8 bg-slate-300"></div>

                                            {/* Split hierarchy branch */}
                                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative mt-0 pt-6 md:pt-0">
                                                {/* Connecting Horizontal Line (spans exactly between the outer columns' centers) */}
                                                <div className="hidden md:block absolute top-0 left-[16.666%] w-[66.666%] h-8 border-t-4 border-x-4 border-slate-300 rounded-t-xl z-0"></div>
                                                {/* Middle branch vertical drop line */}
                                                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-300 z-0"></div>

                                                {/* Operations Branch */}
                                                <div className="md:pt-8 flex flex-col items-center z-10 relative">
                                                    <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300 z-0"></div>

                                                    <div className="bg-white border-2 border-slate-300 text-slate-800 px-3 py-3 rounded-xl font-bold shadow-sm w-full max-w-[14rem] text-center hover:border-[#0077D4] hover:text-[#0077D4] transition-colors min-h-[4rem] flex items-center justify-center text-sm lg:text-base">
                                                        {t.about.structHeadOps}
                                                    </div>
                                                    <div className="w-1 h-6 bg-slate-300"></div>
                                                    <div className="flex flex-col gap-2 w-full max-w-[12rem] lg:max-w-[14rem]">
                                                        {t.about.structOpsTeams.map((team, idx) => (
                                                            <div key={idx} className="bg-slate-50 border border-slate-200 shadow-sm text-sm px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors">
                                                                {team}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* People & Culture Branch */}
                                                <div className="md:pt-8 flex flex-col items-center z-10 relative">
                                                    <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300 z-0"></div>

                                                    <div className="bg-white border-2 border-slate-300 text-slate-800 px-3 py-3 rounded-xl font-bold shadow-sm w-full max-w-[14rem] text-center hover:border-[#0077D4] hover:text-[#0077D4] transition-colors min-h-[4rem] flex items-center justify-center text-sm lg:text-base">
                                                        {t.about.structHeadPeople}
                                                    </div>
                                                    <div className="w-1 h-6 bg-slate-300"></div>
                                                    <div className="flex flex-col gap-2 w-full max-w-[12rem] lg:max-w-[14rem]">
                                                        {t.about.structPeopleTeams.map((team, idx) => (
                                                            <div key={idx} className="bg-slate-50 border border-slate-200 shadow-sm text-sm px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors">
                                                                {team}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Value Creation Branch */}
                                                <div className="md:pt-8 flex flex-col items-center z-10 relative">
                                                    <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300 z-0"></div>

                                                    <div className="bg-white border-2 border-slate-300 text-slate-800 px-3 py-3 rounded-xl font-bold shadow-sm w-full max-w-[14rem] text-center hover:border-[#0077D4] hover:text-[#0077D4] transition-colors min-h-[4rem] flex items-center justify-center text-sm lg:text-base">
                                                        {t.about.structHeadValue}
                                                    </div>
                                                    <div className="w-1 h-6 bg-slate-300"></div>
                                                    <div className="flex flex-col gap-2 w-full max-w-[12rem] lg:max-w-[14rem]">
                                                        {t.about.structValueTeams.map((team, idx) => (
                                                            <div key={idx} className="bg-slate-50 border border-slate-200 shadow-sm text-sm px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors">
                                                                {team}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Value Connector */}
                                    <div className="h-20 flex flex-col items-center justify-center my-4 relative">
                                        <div className="w-1 h-8 bg-emerald-200 border-l-2 border-dashed border-[#4FB293]"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full my-2 border border-[#4FB293]/30 shadow-sm text-[#4FB293]">
                                            {t.about.structValueText}
                                        </span>
                                        <ArrowDown className="w-6 h-6 animate-bounce text-[#4FB293]" />
                                    </div>

                                    {/* Level 6: Club Members */}
                                    <div className="bg-[#4FB293] text-white border-4 border-[#3fa384] px-10 py-5 rounded-full font-extrabold shadow-lg text-xl flex items-center gap-3 z-10 transform hover:scale-105 transition-transform cursor-default">
                                        <Heart className="w-7 h-7 fill-white" /> {t.about.structL6}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Key People Section */}
                        <section className="py-24 bg-white border-t border-slate-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t.about.keyPeopleTitle}</h2>
                                    <div className="w-24 h-1.5 bg-[#0077D4] mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
                                    {t.about.keyPeopleList.map((person, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                                            <div className="relative mb-6">
                                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-white shadow-md group-hover:ring-[#E5F2FC] transition-all">
                                                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#4FB293] rounded-full border-2 border-white"></div>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">{person.name}</h3>
                                            <p className="text-sm font-medium text-[#0077D4] line-clamp-2">{person.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* JOIN US TAB */}
                {activeTab === 'join' && (
                    <div className="min-h-[80vh] bg-white animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24">
                        <section className="py-16 bg-slate-50 border-b border-slate-200 text-center px-4">
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t.join.title}</h1>
                                <p className="text-lg text-slate-600">{t.join.desc}</p>
                            </div>
                        </section>

                        <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

                                {/* Member Card */}
                                <div
                                    className={`group relative overflow-hidden cursor-pointer rounded-3xl transition-all duration-300 border-2 flex flex-col ${expandedJoinCard === 'member'
                                            ? 'border-[#0077D4] bg-white shadow-xl'
                                            : 'border-slate-100 bg-white hover:border-[#B3DBF6] hover:shadow-md'
                                        }`}
                                    onClick={() => setExpandedJoinCard(expandedJoinCard === 'member' ? null : 'member')}
                                >
                                    <div className="h-48 sm:h-56 w-full overflow-hidden bg-slate-100 relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Panel Discussion"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-8 md:p-10 flex-1">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.join.memberTitle}</h2>
                                        <p className="text-slate-500 flex items-center gap-2">
                                            {expandedJoinCard === 'member' ? null : (
                                                <span className="flex items-center gap-1">
                                                    {t.join.memberDesc}
                                                    <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                                </span>
                                            )}
                                        </p>

                                        {/* Expandable Content */}
                                        <div className={`grid transition-all duration-500 ease-in-out ${expandedJoinCard === 'member' ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                            <div className="overflow-hidden">
                                                <h4 className="font-semibold text-slate-900 mb-4">{t.join.benefitsTitle}</h4>
                                                <ul className="space-y-4 mb-8">
                                                    {[t.join.b1, t.join.b2, t.join.b3, t.join.b4].map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-700 leading-relaxed">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-slate-600 font-medium mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    {t.join.memberFooter}
                                                </p>

                                                {/* Stop propagation so clicking button doesn't close the card */}
                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <a
                                                        href="https://forms.gle/vtLpb5fd7412nJr47"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block w-full text-center py-4 rounded-xl shadow-md text-base font-bold text-white bg-[#0077D4] hover:bg-[#005FA8] hover:-translate-y-0.5 transition-all duration-200"
                                                    >
                                                        {t.join.btnJoinForm}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team Card */}
                                <div
                                    className={`group relative overflow-hidden cursor-pointer rounded-3xl transition-all duration-300 border-2 flex flex-col ${expandedJoinCard === 'team'
                                            ? 'border-[#0077D4] bg-white shadow-xl'
                                            : 'border-slate-100 bg-white hover:border-[#B3DBF6] hover:shadow-md'
                                        }`}
                                    onClick={() => setExpandedJoinCard(expandedJoinCard === 'team' ? null : 'team')}
                                >
                                    <div className="h-48 sm:h-56 w-full overflow-hidden bg-slate-100 relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Collaborative Team"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-8 md:p-10 flex-1">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.join.teamTitle}</h2>
                                        <p className="text-slate-500 flex items-center gap-2">
                                            {expandedJoinCard === 'team' ? null : (
                                                <span className="flex items-center gap-1">
                                                    {t.join.teamDesc}
                                                    <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                                </span>
                                            )}
                                        </p>

                                        {/* Expandable Content */}
                                        <div className={`grid transition-all duration-500 ease-in-out ${expandedJoinCard === 'team' ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                            <div className="overflow-hidden">
                                                <h4 className="font-semibold text-slate-900 mb-4">{t.join.teamBenefitsTitle}</h4>
                                                <ul className="space-y-4 mb-8">
                                                    {[t.join.tb1, t.join.tb2, t.join.tb3, t.join.tb4].map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-slate-700 leading-relaxed">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="text-slate-600 font-medium mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    {t.join.teamFooter}
                                                </p>

                                                <div onClick={(e) => e.stopPropagation()}>
                                                    <button
                                                        onClick={handleDiscoverTeams}
                                                        className="block w-full text-center py-4 rounded-xl shadow-md text-base font-bold text-white bg-[#0077D4] hover:bg-[#005FA8] hover:-translate-y-0.5 transition-all duration-200"
                                                    >
                                                        {t.join.btnDiscover}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Dynamically Rendered Teams Vertical Section */}
                            {showTeams && (
                                <div id="teams-section" className="mt-20 pt-16 border-t border-slate-200 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">{t.join.teamsSectionTitle}</h3>

                                    {/* Vertical List Container */}
                                    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-10">
                                        {t.join.teamsList.map((team, idx) => {
                                            const Icon = teamIcons[idx];
                                            return (
                                                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6 group">
                                                    <div className="shrink-0 w-16 h-16 bg-slate-50 text-[#0077D4] rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-[#E5F2FC] group-hover:scale-110 transition-all duration-300">
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{team.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed text-[15px]">
                                                            {team.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 text-center">
                                        <a
                                            href="https://forms.gle/mfyuRAAuxQQZHAdk8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 bg-[#0077D4] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#005FA8] shadow-lg shadow-[#0077D4]/30 hover:-translate-y-1 transition-all duration-200"
                                        >
                                            {t.join.btnJoinTeamForm} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                )}

                {/* TEAM PORTAL TAB */}
                {activeTab === 'team-portal' && (
                    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 bg-slate-50 animate-in fade-in duration-500">
                        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-[#E5F2FC] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-8 h-8 text-[#0077D4]" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{t.team.title}</h2>
                                <p className="text-slate-500 mt-2 text-sm">{t.team.desc}</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.team.id}</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                            <Users className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            className={`block w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2.5 border border-slate-300 rounded-lg focus:ring-[#0077D4] focus:border-[#0077D4] sm:text-sm bg-slate-50 text-slate-500 cursor-not-allowed`}
                                            placeholder={t.team.idPlaceholder}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.team.pass}</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="password"
                                            className={`block w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2.5 border border-slate-300 rounded-lg focus:ring-[#0077D4] focus:border-[#0077D4] sm:text-sm bg-slate-50 text-slate-500 cursor-not-allowed`}
                                            placeholder={t.team.passPlaceholder}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm mt-4 mb-6">
                                    <label className="flex items-center opacity-70 cursor-not-allowed">
                                        <input type="checkbox" className="rounded border-slate-300 text-[#0077D4] focus:ring-[#0077D4] cursor-not-allowed" disabled />
                                        <span className="ms-2 text-slate-600">{t.team.remember}</span>
                                    </label>
                                    <a href="#" className="text-[#0077D4] hover:text-[#005FA8] font-medium opacity-70 cursor-not-allowed pointer-events-none">{t.team.forgot}</a>
                                </div>

                                <button
                                    type="button"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#0077D4] opacity-80 cursor-not-allowed"
                                    disabled
                                >
                                    {t.team.signIn}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* INITIATIVES TAB */}
                {activeTab === 'initiatives' && (
                    <div className="bg-white min-h-[80vh] pb-24 animate-in fade-in duration-500">
                        {/* Conditional Rendering: Grid View OR Detail View */}

                        {/* 1. GRID VIEW */}
                        {!selectedInitiative && (
                            <div className="animate-in slide-in-from-bottom-4 duration-500">
                                <section className="py-16 bg-slate-50 border-b border-slate-200 text-center px-4">
                                    <div className="max-w-3xl mx-auto">
                                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t.initiatives.title}</h1>
                                        <p className="text-lg text-slate-600">{t.initiatives.desc}</p>
                                    </div>
                                </section>

                                <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {t.initiatives.list.map(init => {
                                            // Calculate days left
                                            const diff = new Date(init.deadline) - new Date();
                                            const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
                                            const isExpired = daysLeft <= 0;

                                            return (
                                                <div key={init.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                                    {/* Top Status Bar */}
                                                    <div
                                                        className="px-6 py-2.5 text-white text-sm font-bold tracking-wide flex justify-between items-center"
                                                        style={{ backgroundColor: statusConfig[init.status].color }}
                                                    >
                                                        <span className="uppercase">{t.initiatives.statusLabels[init.status]}</span>
                                                        <Sparkles className="w-4 h-4 opacity-70" />
                                                    </div>

                                                    <div className="p-6 md:p-8 flex flex-col grow">
                                                        {/* Category Tag */}
                                                        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0077D4] bg-[#E5F2FC] px-3 py-1.5 rounded-full mb-5 w-fit">
                                                            <Tag className="w-3.5 h-3.5" /> {init.category}
                                                        </div>

                                                        {/* Content */}
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{init.title}</h3>
                                                        <p className="text-slate-600 leading-relaxed mb-8 grow line-clamp-3">{init.brief}</p>

                                                        {/* Deadline & Counter Box */}
                                                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 flex justify-between items-center shadow-inner">
                                                            <div>
                                                                <p className="text-xs text-slate-500 mb-1 font-medium">{t.initiatives.deadlineLabel}</p>
                                                                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                                                                    <Calendar className="w-4 h-4 text-[#0077D4]" /> {init.deadline}
                                                                </p>
                                                            </div>
                                                            <div className={`text-${isRTL ? 'left' : 'right'}`}>
                                                                <p className="text-xs text-slate-500 mb-1 font-medium">{t.initiatives.daysLeftLabel}</p>
                                                                <p className={`text-xl font-black ${isExpired ? 'text-[#D8552C]' : 'text-[#0077D4]'}`}>
                                                                    {isExpired ? t.initiatives.expiredLabel : daysLeft}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* CTA Button */}
                                                        <button
                                                            onClick={() => {
                                                                setSelectedInitiative(init);
                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }}
                                                            className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-[#0077D4] transition-colors flex justify-center items-center gap-2 shadow-md"
                                                        >
                                                            {t.initiatives.btnDiscover} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* 2. DETAIL VIEW */}
                        {selectedInitiative && (
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-in slide-in-from-right-8 duration-500">
                                <button
                                    onClick={() => setSelectedInitiative(null)}
                                    className="mb-8 flex items-center gap-2 text-slate-500 hover:text-[#0077D4] font-semibold transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm w-fit"
                                >
                                    <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} /> {t.initiatives.btnBack}
                                </button>

                                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
                                    {/* Detail Header / Status Bar */}
                                    <div
                                        className="px-8 py-4 text-white text-sm font-bold tracking-wide flex justify-between items-center"
                                        style={{ backgroundColor: statusConfig[selectedInitiative.status].color }}
                                    >
                                        <span className="uppercase tracking-widest text-base">{t.initiatives.statusLabels[selectedInitiative.status]}</span>
                                    </div>

                                    <div className="p-8 md:p-12">
                                        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0077D4] bg-[#E5F2FC] px-4 py-2 rounded-full mb-6">
                                            <Tag className="w-4 h-4" /> {selectedInitiative.category}
                                        </div>

                                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                            {selectedInitiative.title}
                                        </h1>

                                        {/* Deadline Highlight inside Detail */}
                                        <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-slate-100">
                                            <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200">
                                                <Calendar className="w-6 h-6 text-[#0077D4]" />
                                                <div>
                                                    <p className="text-xs text-slate-500 font-medium">{t.initiatives.deadlineLabel}</p>
                                                    <p className="font-bold text-slate-900">{selectedInitiative.deadline}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200">
                                                <Clock className="w-6 h-6 text-[#E4A429]" />
                                                <div>
                                                    <p className="text-xs text-slate-500 font-medium">{t.initiatives.daysLeftLabel}</p>
                                                    <p className={`font-bold ${Math.ceil((new Date(selectedInitiative.deadline) - new Date()) / (1000 * 60 * 60 * 24)) <= 0 ? 'text-[#D8552C]' : 'text-slate-900'}`}>
                                                        {Math.ceil((new Date(selectedInitiative.deadline) - new Date()) / (1000 * 60 * 60 * 24)) <= 0 ? t.initiatives.expiredLabel : Math.ceil((new Date(selectedInitiative.deadline) - new Date()) / (1000 * 60 * 60 * 24))}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.initiatives.aboutTitle}</h3>
                                            <p className="text-lg text-slate-600 leading-relaxed">
                                                {selectedInitiative.fullDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* PARTNERS TAB */}
                {activeTab === 'partners' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white pb-20">
                        {/* Partners Hero */}
                        <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900">
                            <div className="absolute inset-0 bg-[#0077D4]/10"></div>
                            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#0077D4] rounded-full blur-[120px] opacity-40"></div>

                            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-sm">
                                    <Building2 className="w-4 h-4" /> B2B Partnerships
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                                    {t.partners.heroTitle.split('–')[0]} <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B3DBF6] to-white">
                                        {t.partners.heroTitle.includes('–') ? `– ${t.partners.heroTitle.split('–')[1]}` : t.partners.heroSubtitle}
                                    </span>
                                </h1>
                                <p className="text-xl text-[#B3DBF6] font-medium mb-10 max-w-3xl mx-auto">
                                    {t.partners.heroSubtitle}
                                </p>
                                <div className="bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-3xl text-left shadow-2xl">
                                    <p className="text-white/90 leading-relaxed text-lg md:text-xl font-medium">
                                        {t.partners.targetAudience}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Why Partner With Us */}
                        <section className="py-24 bg-slate-50 border-b border-slate-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-16 max-w-3xl mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t.partners.whyTitle}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">{t.partners.whyIntro}</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-14 h-14 bg-[#E5F2FC] rounded-2xl flex items-center justify-center mb-8">
                                            <Users className="w-7 h-7 text-[#0077D4]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.partners.why1Title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">{t.partners.why1Desc}</p>
                                    </div>

                                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                                            <TrendingUp className="w-7 h-7 text-emerald-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.partners.why2Title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">{t.partners.why2Desc}</p>
                                    </div>

                                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                                            <FileSpreadsheet className="w-7 h-7 text-purple-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.partners.why3Title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">{t.partners.why3Desc}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How We Can Collaborate */}
                        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t.partners.collabTitle}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                        {t.partners.collabIntro}
                                    </p>

                                    <div className="space-y-8">
                                        <div className="flex gap-6 items-start">
                                            <div className="shrink-0 w-16 h-16 bg-[#115A9E] text-white rounded-2xl flex items-center justify-center shadow-md">
                                                <Handshake className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.partners.collab1Title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{t.partners.collab1Desc}</p>
                                            </div>
                                        </div>

                                        <div className="w-full h-px bg-slate-100"></div>

                                        <div className="flex gap-6 items-start">
                                            <div className="shrink-0 w-16 h-16 bg-[#E5F2FC] text-[#0077D4] border border-[#B3DBF6] rounded-2xl flex items-center justify-center shadow-sm">
                                                <Megaphone className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.partners.collab2Title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{t.partners.collab2Desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                            alt="Corporate Collaboration"
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#115A9E]/40 to-transparent mix-blend-multiply"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                            <div className="bg-gradient-to-r from-[#115A9E] to-[#0077D4] rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{t.partners.ctaTitle}</h2>
                                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                                        {t.partners.ctaDesc}
                                    </p>
                                    <a
                                        href="mailto:pr@unescoclubcu.org"
                                        className="inline-flex items-center gap-3 bg-white text-[#0077D4] px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <Mail className="w-6 h-6" />
                                        {t.partners.ctaBtn}
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <img src="unesco_logo.png" alt="UNESCO Logo" className="h-12 sm:h-14 w-auto bg-white p-1 rounded-sm object-contain" />
                                <span className="font-bold text-xl tracking-tight text-white">UNESCO Club <span className="text-[#00A1E4]">- CU</span></span>
                            </div>
                            <p className="text-sm max-w-sm">
                                {t.footer.desc}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">{t.footer.links}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">{t.nav.discover}</button></li>
                                <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">{t.nav.about}</button></li>
                                <li><button onClick={() => setActiveTab('initiatives')} className="hover:text-white transition-colors">{t.nav.initiatives}</button></li>
                                <li><button onClick={() => setActiveTab('join')} className="hover:text-white transition-colors">{t.nav.join}</button></li>
                                <li><button onClick={() => setActiveTab('partners')} className="hover:text-white transition-colors">{t.nav.partners}</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">{t.footer.connect}</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            </div>
                            <div className="mt-4 text-sm">
                                <p>contact@unescoclubcu.org</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
