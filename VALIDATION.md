# 1단계 검증 기록

검증일: 2026-10-14 KST

## 확인된 결과
- Windows Chrome headless에서 실제 WebGL 렌더링을 실행. 초기 preview draw calls 32, 배포 Orbit 재생 중 31.
- Dolly 시작 Z=12 → 종료 Z=4: 실제 카메라 좌표와 렌더링된 PNG 바이트가 변경됨.
- 종료점 X 수정이 실제 카메라 좌표에 반영됨.
- Orbit 경로는 일정 반경을 유지하며 각도에 따라 X/Z가 변경됨.
- 사용자 경로 재생, 일시정지, 시작/종료 구도 확인.
- 촬영 저장·불러오기와 새로고침 후 복원, JSON 다운로드·업로드 복원.
- Chrome 터치 에뮬레이션 1024×768에서 터치 위치 이동·드래그·두 손가락 핀치 확인.
- 390px 화면 가로 넘침 없음.
- 네트워크 차단 후 서비스워커 캐시로 재실행·WebGL 렌더링 확인.
- 순수 계산 테스트 4개 통과: Dolly 끝점/수정, Orbit 일정 반경, 화각, 손상 JSON 거부.
- 로컬 및 배포 환경 pageerror 0.

## GitHub / 배포
- 저장소: https://github.com/KingOfMental/cinematic-camera-trainer
- 구현 커밋: 385d810aeb5b6aa9b60a70939dd8b2c9fe42af4f
- 자동 배포: main push → node tests → dist artifact → GitHub Pages.
- 첫 배포 워크플로: https://github.com/KingOfMental/cinematic-camera-trainer/actions/runs/38430573423
- 첫 배포 conclusion: success, deploy 단계 포함 성공.
- 배포 URL: https://kingofmental.github.io/cinematic-camera-trainer/
- HTTP 200, 실제 렌더링, Dolly 화면 변화, 종료점 수정, Orbit 재생, 저장 복원을 배포 환경에서 재확인.

## 미검증 / 다음 단계 조건
- iPad Safari 실기기 성능·터치 및 홈 화면 설치는 미검증. 데스크톱 에뮬레이션으로 대체 판정하지 않음.
- Safari 호환성과 PWA 메타데이터를 준비했으나 실기기 완료로 보고하지 않음.
- 2단계 문제 채점과 3단계 고급 무빙은 구현하지 않음.
- 학습 결과 점수가 아닌 촬영 설계 1개 저장.
- 심도·노출·모션 블러·렌즈 왜곡·짐벌 물리 시뮬레이션 없음.
