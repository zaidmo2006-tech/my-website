// بيانات الفعاليات في مصفوفة واحدة.
var events = [
    {id: 1, title: 'لقاء القراءة والحوار', category: 'ثقافة', date: '2026-10-26', start: '16:00', end: '18:00', city: 'دمشق', venue: 'قاعة الأنشطة الطلابية', image: 'culture.jpg', summary: 'لقاء طلابي لمناقشة كتاب وتبادل الأفكار حول القراءة.', description: 'يبدأ اللقاء بتقديم قصير عن الكتاب المختار، ثم يشارك الطلاب آراءهم في مجموعات صغيرة. يتضمن النشاط نقاشًا مفتوحًا واقتراح كتب للقاءات القادمة. يمكن لكل طالب إحضار كتاب يود التعريف به. المشاركة متاحة للطلاب المهتمين بالقراءة دون خبرة مسبقة.', featured: true},
    {id: 2, title: 'يوم الرياضة الجامعي', category: 'رياضة', date: '2026-10-28', start: '10:00', end: '13:00', city: 'دمشق', venue: 'ملعب الأنشطة', image: 'sports.jpg', summary: 'أنشطة جماعية ومباريات ودية تجمع الطلاب في يوم رياضي.', description: 'يتضمن اليوم تمارين إحماء خفيفة وألعاب فرق ومباريات قصيرة. يهدف النشاط إلى تعزيز التعاون والتعارف بين الطلاب. يُنصح بارتداء ملابس مناسبة للرياضة وإحضار مياه الشرب. تُوزّع الفرق في بداية النشاط بما يتيح مشاركة الجميع.', featured: true},
    {id: 3, title: 'أمسية المواهب الموسيقية', category: 'موسيقى', date: '2026-10-30', start: '17:00', end: '19:00', city: 'حلب', venue: 'قاعة اللقاءات', image: 'music.jpg', summary: 'مساحة بسيطة لعرض مواهب الطلاب والاستماع إلى مقطوعات متنوعة.', description: 'تبدأ الأمسية بعروض قصيرة يقدمها الطلاب، ثم جلسة حوار حول تجاربهم في تعلم الموسيقى. يمكن للمهتمين المشاركة بعرض فردي أو جماعي بعد تنسيق البرنامج مع فريق النشاط. الأمسية مخصصة للتشجيع وتبادل الخبرات بين الهواة.', featured: true},
    {id: 4, title: 'يوم التعارف العائلي', category: 'عائلي', date: '2026-10-31', start: '11:00', end: '14:00', city: 'دمشق', venue: 'ساحة اللقاءات', image: 'family.jpg', summary: 'لقاء للطلاب وعائلاتهم يتضمن ألعابًا وأنشطة تعارف.', description: 'يتضمن اللقاء تعريفًا بالأنشطة الطلابية وألعابًا جماعية بسيطة وركنًا للرسم. يساعد اليوم العائلات في التعرف على المجتمع الجامعي ومشاركة الطلاب اهتماماتهم. تُراعى مشاركة مختلف الأعمار، ويكون الأطفال برفقة أولياء أمورهم.'},
    {id: 5, title: 'ورشة مهارات العرض', category: 'ثقافة', date: '2026-11-02', start: '18:00', end: '20:00', city: 'عبر الإنترنت', venue: 'قاعة عبر الإنترنت', image: 'culture.jpg', summary: 'تدريب طلابي على ترتيب الأفكار وتقديم عرض واضح.', description: 'تتناول الورشة إعداد مقدمة مختصرة وترتيب الأفكار واستخدام الشرائح البسيطة. يقدم المشاركون عروضًا قصيرة ويحصلون على ملاحظات من زملائهم. يكفي تجهيز فكرة يرغب الطالب في عرضها. رابط الحضور غير متاح حاليًا.'},
    {id: 6, title: 'بطولة الشطرنج الطلابية', category: 'رياضة', date: '2026-11-04', start: '14:00', end: '17:00', city: 'حلب', venue: 'نادي الطلاب', image: 'chess.jpg', summary: 'مباريات شطرنج ودية وفرصة لتبادل المهارات والخبرات.', description: 'يشرح فريق النشاط نظام الجولات في البداية، ثم يتنافس الطلاب في مباريات ودية. يتاح ركن لتعلم القواعد الأساسية للمبتدئين. يهدف اللقاء إلى تنمية التفكير المنظم وتعزيز التواصل بين المشاركين.'},
    {id: 7, title: 'جلسة التعرف إلى الموسيقى', category: 'موسيقى', date: '2026-11-06', start: '18:00', end: '19:30', city: 'عبر الإنترنت', venue: 'قاعة عبر الإنترنت', image: 'music.jpg', summary: 'جلسة استماع وحوار حول الآلات والإيقاع للمبتدئين.', description: 'تقدم الجلسة أمثلة مبسطة للتعرف إلى الآلات والإيقاع، مع وقت لأسئلة المشاركين ومشاركة تجاربهم. لا تتطلب معرفة موسيقية سابقة. يفضّل استخدام سماعات في أثناء اللقاء. رابط الحضور غير متاح حاليًا.'},
    {id: 8, title: 'ورشة الرسم الجماعي', category: 'عائلي', date: '2026-11-07', start: '10:00', end: '12:00', city: 'حلب', venue: 'مرسم الأنشطة', image: 'painting.jpg', summary: 'نشاط رسم يشارك فيه الطلاب وعائلاتهم لإعداد لوحة جماعية.', description: 'يختار المشاركون موضوعًا مشتركًا، ثم يساهم كل منهم في جزء من لوحة كبيرة. تتضمن الورشة إرشادات بسيطة لاستخدام الألوان وترتيب المساحة. يمكن إحضار أدوات رسم شخصية، ويكون الأطفال برفقة أولياء أمورهم.'}
];

function byId(id) { return document.getElementById(id); }
function dateLabel(value) {
    var parts = value.split('-');
    return parts[2] + ' / ' + parts[1] + ' / ' + parts[0];
}

function safe(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function card(item) {
    return '<div class="col-md-6 col-lg-4"><article class="card h-100">' +
        '<img class="card-img-top" src="assets/img/' + safe(item.image) + '" alt="رسم توضيحي: ' + safe(item.title) + '">' +
        '<div class="card-body"><span class="badge category-badge">' + safe(item.category) + '</span>' +
        '<h3>' + safe(item.title) + '</h3><p><time datetime="' + item.date + '">' + dateLabel(item.date) + '</time> | ' + safe(item.city) + '</p>' +
        '<p>' + safe(item.venue) + '</p><p>' + safe(item.summary) + '</p>' +
        '<a class="btn btn-primary" href="event.html?id=' + item.id + '" aria-label="تفاصيل ' + safe(item.title) + '">التفاصيل</a></div></article></div>';
}
function showCards(element, list) {
    var html = '';
    for (var i = 0; i < list.length; i++) { html += card(list[i]); }
    element.innerHTML = html;
}

// السلايدر في الصفحة الرئيسية.
if (byId('featured')) {
    var featured = [];
    for (var f = 0; f < events.length; f++) {
        if (events[f].featured) { featured.push(events[f]); }
    }
    var slide = 0;
    function showSlide() {
        var item = featured[slide];
        byId('featured').innerHTML = '<article class="card"><div class="row g-0 align-items-center"><div class="col-md-5"><img class="featured-image" src="assets/img/' + item.image + '" alt="رسم توضيحي: ' + safe(item.title) + '"></div><div class="col-md-7"><div class="card-body p-4"><span class="badge category-badge">' + item.category + '</span><h3>' + item.title + '</h3><p>' + dateLabel(item.date) + ' | ' + item.city + '</p><p>' + item.summary + '</p><a class="btn btn-primary" href="event.html?id=' + item.id + '">تفاصيل الفعالية</a></div></div></div></article>';
        byId('slide-count').textContent = (slide + 1) + ' / ' + featured.length;
    }
    byId('next-slide').onclick = function () { slide = (slide + 1) % featured.length; showSlide(); };
    byId('previous-slide').onclick = function () { slide = (slide + featured.length - 1) % featured.length; showSlide(); };
    showSlide();
    showCards(byId('latest-events'), events.slice().reverse().slice(0, 3));
}

// البحث والفلترة.
if (byId('filter-form')) {
    var categoryParameter = new URLSearchParams(window.location.search).get('category');
    if (categoryParameter) { byId('category').value = categoryParameter; }
    function filterEvents() {
        var query = byId('search').value.trim().toLowerCase();
        var category = byId('category').value;
        var location = byId('location').value;
        var from = byId('date-from').value;
        var to = byId('date-to').value;
        var invalidDates = Boolean(from && to && from > to);
        byId('filter-error').hidden = !invalidDates;
        var matches = [];
        if (!invalidDates) {
            for (var i = 0; i < events.length; i++) {
                var item = events[i];
                var text = (item.title + ' ' + item.summary + ' ' + item.city + ' ' + item.venue).toLowerCase();
                if (text.indexOf(query) !== -1 && (!category || item.category === category) &&
                    (!location || item.city === location) && (!from || item.date >= from) && (!to || item.date <= to)) {
                    matches.push(item);
                }
            }
        }
        showCards(byId('events-list'), matches);
        byId('results-count').textContent = invalidDates ? 'صحّح نطاق التاريخ لعرض النتائج.' : 'عدد الفعاليات: ' + matches.length;
        byId('no-results').hidden = invalidDates || matches.length > 0;
    }
    byId('filter-form').onsubmit = function (event) { event.preventDefault(); filterEvents(); };
    byId('filter-form').onreset = function () { setTimeout(filterEvents, 0); };
    byId('search').oninput = filterEvents;
    var filters = ['category', 'location', 'date-from', 'date-to'];
    for (var j = 0; j < filters.length; j++) { byId(filters[j]).onchange = filterEvents; }
    filterEvents();
}

if (byId('event-content')) {
    var eventParameter = new URLSearchParams(window.location.search).get('id');
    var eventId = eventParameter === null ? 1 : Number(eventParameter);
    var selected = null;
    for (var e = 0; e < events.length; e++) {
        if (events[e].id === eventId) { selected = events[e]; }
    }
    if (!selected) {
        byId('event-content').hidden = true;
        byId('event-missing').hidden = false;
        document.title = 'الفعالية غير موجودة | دليل الفعاليات';
    } else {
        document.title = selected.title + ' | دليل الفعاليات';
        byId('event-title').textContent = selected.title;
        byId('event-category').textContent = selected.category;
        byId('event-date').textContent = dateLabel(selected.date);
        byId('event-time').textContent = selected.start + ' – ' + selected.end;
        byId('event-location').textContent = selected.city + '، ' + selected.venue;
        byId('event-description').textContent = selected.summary;
        byId('event-full-description').textContent = selected.description;
        byId('event-image').src = 'assets/img/' + selected.image;
        byId('event-image').alt = 'رسم توضيحي: ' + selected.title;
        byId('gallery-image').src = 'assets/img/' + selected.image;
        byId('gallery-image').alt = 'رسم توضيحي لنشاط ' + selected.title;
        if (selected.city === 'عبر الإنترنت') {
            byId('event-map').hidden = true;
            byId('map-credit').hidden = true;
            byId('map-description').textContent = 'فعالية عبر الإنترنت';
        } else {
            byId('event-map').src = selected.city === 'حلب' ? 'assets/img/aleppo-map.png' : 'assets/img/damascus-map.png';
            byId('event-map').alt = 'خريطة عامة لمدينة ' + selected.city;
            byId('map-description').textContent = 'خريطة عامة لمدينة ' + selected.city + '، لا تحدد عنوان الفعالية أو موقع القاعة.';
            byId('map-source').href = 'https://commons.wikimedia.org/wiki/File:Location_map_Syria_' + (selected.city === 'حلب' ? 'Aleppo' : 'Damascus') + '.png';
        }
        var related = [];
        for (var r = 0; r < events.length; r++) {
            if (events[r].category === selected.category && events[r].id !== selected.id) { related.push(events[r]); }
        }
        showCards(byId('related-events'), related);
        byId('add-calendar').onclick = function () {
            alert('أضف هذا الموعد يدويًا إلى تقويمك:\n' + selected.title + '\n' +
                dateLabel(selected.date) + '\nمن ' + selected.start + ' إلى ' + selected.end +
                ' بتوقيت دمشق\n' + selected.city + '، ' + selected.venue);
        };
        byId('share-event').onclick = function () {
            prompt('انسخ رابط الفعالية للمشاركة:', window.location.href);
        };
    }
}

// فحص الحقول وعرض النتيجة.
if (byId('contact-form')) {
    var form = byId('contact-form');
    var result = byId('contact-result');
    form.onsubmit = function (event) {
        event.preventDefault();
        var name = byId('contact-name').value.trim();
        var email = byId('contact-email').value.trim();
        var message = byId('contact-message').value.trim();
        result.hidden = false;
        result.className = 'alert alert-danger mt-3 mb-0';
        if (!name || !email || !message) {
            result.textContent = 'يرجى تعبئة الاسم والبريد الإلكتروني والرسالة.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            result.textContent = 'يرجى كتابة بريد إلكتروني صحيح.';
        } else {
            result.className = 'alert alert-success mt-3 mb-0';
            result.textContent = 'البيانات صحيحة. لم تُرسل الرسالة؛ خدمة الإرسال غير متاحة حاليًا.';
        }
    };
    form.onreset = function () { result.hidden = true; };
    form.oninput = function () { result.hidden = true; };
}
