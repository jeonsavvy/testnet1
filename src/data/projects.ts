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
        subtitle: "AI 기반 이미지 정합성 검증 솔루션",
        date: "2024",
        role: "Personal Project",
        description: "브라우저 내장형 경량 AI 모델을 활용하여 서버 비용 없이 이미지 정합성을 검증하는 자동화 도구",
        pdfUrl: "/documents/MatchCut.pdf",
        tags: ["Next.js", "Transformers.js", "Supabase", "Zustand"],
        links: {
            github: "https://github.com/jeonsavvy/MatchCut",
            demo: "https://match-cut-jeonsavvys-projects.vercel.app/"
        },
        content: {
            intro: "브라우저 탑재에 적합한 경량 AI 모델(openai/clip-vit-large-patch14)을 활용한 이미지 검수 자동화 솔루션입니다.",
            images: {
                demo: "/projects/match-cut/demo.png",
                architecture: "/projects/match-cut/architecture.png"
            },
            problem: {
                title: "과다한 비용과 지연",
                desc: "생성형 AI 이미지를 검수하는 데 API 호출 비용이 과다하게 발생하고, 네트워크 지연으로 대량 처리가 비효율적임."
            },
            solution: {
                title: "브라우저 온디바이스 AI",
                desc: "브라우저 탑재에 적합한 경량 AI 모델(openai/clip-vit-large-patch14) 탑재하여 서버 통신 없이 즉시 검증."
            },
            features: [
                {
                    title: "Hybrid Ingest System",
                    desc: "Drag & Drop으로 수천 장의 이미지를 올려도 멈추지 않는 처리 큐 설계"
                },
                {
                    title: "On-Device Verification",
                    desc: "서버 통신 없이 브라우저 메모리 위에서 정합성 판별"
                },
                {
                    title: "Smart Curation",
                    desc: "AI 신뢰도가 낮은 데이터(Gray Zone)만 사람이 보게 하여 검수 효율 증대"
                }
            ],
            architecture: {
                desc: "Next.js Frontend + Transformers.js (In-Browser Inference) + Web Workers for Parallel Processing."
            },
            troubleshooting: [
                {
                    issue: "브라우저 프리징: 수백 장의 이미지를 동시에 분석할 때 메인 스레드가 차단되어 UI가 멈추는 현상 발생",
                    solution: "Web Worker를 도입하여 무거운 연산을 백그라운드 스레드로 격리 및 병렬 처리하여 1,000장 업로드 중에도 UI 반응성 확보"
                },
                {
                    issue: "모델 로딩 속도: 모델을 매번 다운로드하여 로딩이 느림",
                    solution: "브라우저 Cache API로 모델을 로컬 캐싱하여 재방문 시 로딩 시간 대폭 감소"
                }
            ],
            retrospective: "서버 비용 제거 및 데이터 처리 속도 향상. 브라우저 기반 AI 파이프라인 구축 경험."
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
