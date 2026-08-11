/*
 * 가이드 테마 토글 — 라이트 → 다크 → 눈보호 → 라이트…
 *
 * 버튼 하나로 돌립니다. 고른 값은 localStorage에 남아 다른 가이드 글로
 * 옮겨 가도 유지됩니다.
 *
 * 첫 칠 전에 값을 입혀야 화면이 번쩍이지 않습니다. 그 일은 각 문서 <head>의
 * 짧은 인라인 스크립트가 맡고, 이 파일은 버튼을 붙이는 일만 합니다.
 */
(function () {
  var KEY = 'pb:guide-theme';
  var MODES = [
    { id: 'light', icon: '☀', label: '라이트' },
    { id: 'dark', icon: '☽', label: '다크' },
    { id: 'eye', icon: '◑', label: '눈보호' },
  ];

  function indexOf(id) {
    for (var i = 0; i < MODES.length; i++) if (MODES[i].id === id) return i;
    return 0;
  }

  function current() {
    return indexOf(document.documentElement.getAttribute('data-theme') || 'light');
  }

  function apply(i, btn) {
    var m = MODES[i];
    document.documentElement.setAttribute('data-theme', m.id);
    try { localStorage.setItem(KEY, m.id); } catch (e) { /* 사생활 보호 모드 — 기억만 못 할 뿐 */ }
    btn.querySelector('.gtheme__icon').textContent = m.icon;
    btn.querySelector('.gtheme__label').textContent = m.label;
    /* 다음에 무엇이 되는지 미리 알려 줍니다 — 세 모드라 눌러 봐야 아는 것을 줄입니다. */
    var next = MODES[(i + 1) % MODES.length];
    btn.title = '화면 모드: ' + m.label + ' — 누르면 ' + next.label;
    btn.setAttribute('aria-label', btn.title);
  }

  function mount() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gtheme';
    btn.innerHTML = '<span class="gtheme__icon"></span><span class="gtheme__label"></span>';

    /* 상단바가 있으면 그 안 오른쪽 끝에, 없으면 화면 오른쪽 위에 띄웁니다. */
    var nav = document.querySelector('.topbar nav');
    if (nav) nav.appendChild(btn);
    else { btn.classList.add('gtheme--float'); document.body.appendChild(btn); }

    apply(current(), btn);
    btn.addEventListener('click', function () {
      apply((current() + 1) % MODES.length, btn);
    });
  }

  /*
   * 공용 푸터 — 소개 · 개인정보처리방침 · 이용약관 · 문의.
   *
   * 정적 쪽마다 같은 줄을 붙여 넣으면 하나 고칠 때 네 곳을 고쳐야 합니다.
   * 여기서 한 번에 다는 편이 어긋날 일이 없습니다. 편집기(SPA)는 자바스크립트로
   * 그려져 크롤러가 못 읽으므로, **이 정적 쪽들이 네 페이지로 가는 확실한 길**입니다.
   *
   * 경로는 문서 깊이에 따라 다릅니다 — /guide/ 안이면 한 단 위로 올라갑니다.
   */
  var LINKS = [
    { href: 'about.html', text: '소개' },
    { href: 'privacy.html', text: '개인정보처리방침' },
    { href: 'terms.html', text: '이용약관' },
    { href: 'contact.html', text: '문의' },
  ];

  function mountFooter() {
    var up = /\/guide\//.test(location.pathname) ? '../' : './';
    var foot = document.querySelector('footer') || document.body.appendChild(document.createElement('footer'));
    var nav = document.createElement('div');
    nav.className = 'gfoot';
    LINKS.forEach(function (l, i) {
      /* 지금 보고 있는 쪽은 링크로 만들지 않습니다 — 눌러도 제자리인 링크는 군더더기입니다. */
      var here = location.pathname.split('/').pop() === l.href;
      var el = document.createElement(here ? 'b' : 'a');
      if (!here) el.href = up + l.href;
      el.textContent = l.text;
      if (i) nav.appendChild(document.createTextNode(' · '));
      nav.appendChild(el);
    });
    foot.appendChild(nav);
  }

  function boot() { mount(); mountFooter(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
