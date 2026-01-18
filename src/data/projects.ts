export interface Project {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    role: string;
    description: string;
    pdfUrl: string; // Keeps the field but we won't use it in UI if user requested removal
    tags: string[];
    links?: {
        github?: string;
        demo?: string;
    };
    content: {
        intro?: string;
        images?: {
            demo?: string;
            architecture?: string;
        };
        problem: {
            title: string;
            desc: string;
        };
        solution: {
            title: string;
            desc: string;
        };
        features?: {
            title: string;
            desc: string;
        }[];
        architecture?: {
            desc: string;
        };
        troubleshooting?: {
            issue: string;
            solution: string;
        }[];
        retrospective?: string;
    };
}

export const projects: Project[] = [
    {
        id: "match-cut",
        title: "Match Cut",
        subtitle: "AI 이미지 정합성 검증 솔루션",
        date: "2024",
        role: "Personal Project",
        description: "평소에는 서버리스 상태로 대기하며 검증 수행. 정밀 분석 원할시에만 리소스를 점유하는 Serverless Container 패턴을 채택.",
        pdfUrl: "/documents/MatchCut.pdf",
        tags: ["Next.js", "Transformers.js", "FastAPI", "Python", "Supabase", "Docker"],
        links: {
            github: "https://github.com/jeonsavvy/MatchCut",
            demo: "https://match-cut-jeonsavvys-projects.vercel.app/"
        },
        content: {
            intro: "평소에는 서버리스 상태로 대기하며 검증 수행. 정밀 분석 원할시에만 리소스를 점유하는 Serverless Container 패턴을 채택.",
            images: {
                demo: "/projects/match-cut/demo-new.png",
                architecture: "/projects/match-cut/architecture-new.png"
            },
            problem: {
                title: "비용과 지연 문제",
                desc: "모든 이미지를 서버로 보내면 API 비용이 기하급수적으로 증가하며 단순 필터링에 지연 발생."
            },
            solution: {
                title: "Serverless Container 패턴",
                desc: "평소에는 서버리스 상태로 대기하며 검증 수행. 정밀 분석 원할시에만 리소스를 점유하는 Serverless Container 패턴을 채택. (본 데모에서는 로컬 서버 구동을 통해 리소스 분리 구조를 시뮬레이션)"
            },
            features: [
                {
                    title: "Dual-Engine AI Pipeline",
                    desc: "백엔드 서버가 꺼져 있어도 브라우저 모델로 핵심 기능(업로드, 검증) 작동. Python 서버 연결 시 심층 분석(L2) 기능 활성화."
                }
            ],
            architecture: {
                desc: "Next.js (Vercel Edge) + FastAPI (Docker) 구조로 분리. 로컬 개발 시 Rewrites 규칙으로 단일 도메인처럼 통합."
            },
            troubleshooting: [
                {
                    issue: "Supabase Storage에 한글 파일명 업로드 시 Invalid Key 에러 발생.",
                    solution: "파일명을 URL-Safe Base64로 인코딩하여 모든 유니코드 문자를 영문/숫자로 변환후 서버/클라이언트 양쪽에서 디코딩 로직 통일."
                },
                {
                    issue: "기존 Next.js API Routes만으로는 PyTorch/CUDA 가속 활용 불가.",
                    solution: "Next.js (Vercel Edge) + FastAPI (Docker) 구조로 분리하되, 로컬 개발 시 Rewrites 규칙으로 단일 도메인처럼 통합."
                }
            ],
            retrospective: "Impact: 백엔드가 없으면 죽는게 아니라 가볍게 도는 사이트를 만듦으로써 서비스의 생존성 증명.\nGrowth: 단순 MVP 제작을 넘어 인코딩/배포 환경 등 실제 운영 시 마주칠 엣지 케이스 해결에 집중."
        }
    },
    {
        id: "v-mate",
        title: "V-MATE",
        subtitle: "이중 심리 AI 챗봇",
        date: "2025",
        role: "Personal Project",
        description: "AI 에이전트를 활용하여 이중 심리를 가진 캐릭터와의 몰입감 있는 대화 경험을 제공하는 플랫폼",
        pdfUrl: "/documents/V-Mate.pdf",
        tags: ["React", "Gemini API", "Netlify Functions", "Supabase"],
        links: {
            github: "https://github.com/jeonsavvy/V-MATE-PLATFORM",
            demo: "https://v-mate-platform.netlify.app/"
        },
        content: {
            intro: "이중 심리 엔진을 탑재하여 캐릭터가 속마음과 다른 말을 하도록 유도, 심리적 입체감을 부여한 AI 챗봇입니다.",
            images: {
                demo: "/projects/v-mate/demo.png",
                architecture: "/projects/v-mate/architecture.png"
            },
            problem: {
                title: "평면적인 챗봇 경험",
                desc: "기존 챗봇은 너무 평면적이라 사용자가 금방 질림. '사람 같은 매력'이 부족함."
            },
            solution: {
                title: "이중 심리 엔진 설계",
                desc: "'이중 심리 엔진'을 설계하여 캐릭터가 상황에 따라 속마음과 다른 말을 하도록 유도하여 심리적 입체감 부여."
            },
            features: [
                {
                    title: "Dual Psychology Engine",
                    desc: "Internal Thought(속마음)과 External Speech(대사)를 분리 추론하는 프롬프트 엔지니어링"
                },
                {
                    title: "Dynamic Expressions",
                    desc: "4가지 감정 상태(joy, anger 등)를 실시간 분석하여 일러스트 자동 변경"
                },
                {
                    title: "Hybrid Storage",
                    desc: "게스트(localStorage)와 회원(Supabase DB)을 모두 지원하는 유연한 저장소 구조"
                }
            ],
            architecture: {
                desc: "User requests -> React Client -> Netlify Edge Functions -> Google Gemini API -> Supabase Cloud."
            },
            troubleshooting: [
                {
                    issue: "API 키 보안: 클라이언트 사이드 호출로 인해 API Key가 네트워크 탭에 노출되는 위험",
                    solution: "Netlify Functions를 프록시 서버로 두어 요청을 중계하여 보안 취약점 개선"
                },
                {
                    issue: "딱딱한 에러 메시지: 서버 오류 시 '500 Error' 같은 기계적 메시지가 몰입을 깸",
                    solution: "에러 핸들링 로직에 '캐릭터 페르소나' 주입 (예: '으윽... 머리가 아파(연결 실패)')하여 장애 상황조차 콘텐츠로 승화"
                }
            ],
            retrospective: "단순한 챗봇이 아닌, '감정적 애착'을 형성하는 캐릭터 서비스 프로토타입 완성. LLM을 단순 호출하는 것을 넘어, 구조적으로 제어하는 프롬프트 엔지니어링 경험."
        }
    },
    {
        id: "voc-radar",
        title: "VoC-Radar",
        subtitle: "앱스토어 리뷰 자동화 대응 시스템",
        date: "2024",
        role: "Personal Project",
        description: "n8n과 AI를 활용하여 앱스토어 리뷰를 수집, 분석, 알림 보내는 자동화 파이프라인",
        pdfUrl: "/documents/VoC-Radar.pdf",
        tags: ["n8n", "Gemini API", "Google Sheets API", "Telegram API"],
        links: {
            github: "https://github.com/jeonsavvy/VoC-Radar"
        },
        content: {
            intro: "n8n과 AI를 결합하여 수집-분석-알림 과정을 자동화하는 파이프라인 시스템입니다.",
            images: {
                demo: "/projects/voc-radar/demo.png",
                architecture: "/projects/voc-radar/architecture.png"
            },
            problem: {
                title: "반복적인 수동 업무",
                desc: "매일 앱스토어 리뷰를 수동으로 확인하고 시트에 옮기는 반복 업무로 인한 리소스 낭비."
            },
            solution: {
                title: "n8n 기반 AI 파이프라인",
                desc: "n8n과 AI를 결합하여 수집-분석-알림 과정을 완전 자동화."
            },
            features: [
                {
                    title: "Intelligent Alert",
                    desc: "단순하게 낮은 별점이 아니라, AI가 내용을 읽고 '대응할 이슈'일 때만 알림 발송"
                },
                {
                    title: "Auto-Deduplication",
                    desc: "RSS 피드의 중복 데이터를 자동으로 걸러내어 Google Sheets에 누적"
                },
                {
                    title: "Sentiment Analysis",
                    desc: "모든 리뷰의 긍정/부정 감도를 AI가 자동 라벨링하여 CS 리포트 생성 시간 단축"
                }
            ],
            architecture: {
                desc: "RSS Feed -> Deduplication -> AI Analysis -> Google Sheets -> Telegram Alert."
            },
            troubleshooting: [
                {
                    issue: "무분별한 알림: 모든 부정적 리뷰에 알림을 보내는 부작용 발생",
                    solution: "AI에게 '심각도 평가' 단계를 추가하여, 위기 상황에만 알림을 보내도록 로직 개선하여 신뢰도 상승"
                },
                {
                    issue: "데이터 중복 수집: RSS 피드가 갱신될 때마다 기존 리뷰가 중복으로 들어오는 문제",
                    solution: "Google Sheets의 고유 ID(Review ID)를 조회하는 'Look-up' 노드를 n8n에 추가하여 무결성 확보"
                }
            ],
            retrospective: "CS 모니터링 업무 시간 단축 시스템의 프로토타입 완성. n8n 기반 자동화 워크플로우 설계 경험."
        }
    }
];
