import nutrition from './nutrition.png';
import heart from './heart.png';
import sleep from './sleep.png';
import water from './water.png';
import brain from './brain.png';

const articlesArray = [{
    id: 1,
    title: 'Zdrowe odżywianie',
    image: nutrition,
    contentOfArticle: "Zdrowa dieta nie polega na ścisłych ograniczeniach lub odmawianiu jedzenia, które kochasz. Chodzi raczej o to, by czuć się świetnie, mieć więcej energii, poprawić zdrowie i nastrój. Zdrowe odżywianie nie musi być zbyt skomplikowane. Jeśli czujesz się przytłoczony wszystkimi sprzecznymi poradami dotyczącymi odżywiania i diety, nie jesteś sam.<br />Wydaje się, że dla każdego eksperta, który powie Ci, że dana żywność jest dla Ciebie dobra, znajdziesz inne powiedzenie dokładnie odwrotne. Prawda jest taka, że ​​chociaż wykazano, że niektóre konkretne pokarmy lub składniki odżywcze mają korzystny wpływ na nastrój, najważniejszy jest ogólny sposób odżywiania. Podstawą zdrowej diety powinno być zastąpienie przetworzonej żywności zdrowymi produktami, gdy tylko jest to możliwe. Jedzenie żywności, która jest jak najbardziej zbliżona do sposobu, w jaki stworzyła je natura, może mieć ogromny wpływ na sposób, w jaki myślisz, wyglądasz i czujesz. Korzystając z tych prostych wskazówek, możesz przezwyciężyć zamieszanie i nauczyć się, jak stworzyć – i jak się jej trzymać – smaczną, zróżnicowaną i pożywną dietę, która jest tak dobra dla twojego umysłu, jak i dla twojego ciała.<br />c.d.n.",
    },
    {
        id: 2,
        title: 'Jedzenie dla zdrowego serca',
        image: heart,
        contentOfArticle: "Przestrzeganie zdrowej diety jest jednym ze sposobów zmniejszenia ryzyka rozwoju chorób układu krążenia. To, co jemy i pijemy, wpływa na ciśnienie krwi, poziom cholesterolu, poziom cukru we krwi i zapasy tłuszczu w naszym ciele – wszystkie z nich są czynnikami ryzyka chorób układu krążenia, jeśli nie są kontrolowane. Dlatego zdrowa dieta jest ważna dla każdego.<br />Jedzenie dla zdrowego serca nie musi być przesadnie skomplikowane i nie musimy być cały czas perfekcyjni! Liczy się to, co jemy przez większość czasu. Ogólnie rzecz biorąc, wiadomo, że sposób odżywiania się w stylu śródziemnomorskim jest bardzo zdrowy dla serca. Może pomóc w obniżeniu ciśnienia krwi, cholesterolu i poziomu cukru we krwi, a także może być pomocny w kontrolowaniu wagi. Nawet jeśli nie przestrzegasz diety śródziemnomorskiej, istnieją pewne poprawki, które możesz wprowadzić do swojej obecnej diety, aby była bardziej zdrowa dla serca.<br /> c.d.n."
    },
    {
        id: 3,
        title: 'Dobry sen dla dobrego zdrowia',
        image: sleep,
        contentOfArticle: "Dlaczego musimy spać? Ludzie często myślą, że sen to po prostu „przestój”, kiedy zmęczony mózg odpoczywa.<br />„Ale to nieprawda” – mówi. Kiedy śpisz, twój mózg pracuje. Na przykład sen pomaga przygotować mózg do uczenia się, zapamiętywania i tworzenia.<br />Naukowcy odkryli, że mózg ma system drenażowy, który usuwa toksyny podczas snu.<br />Kiedy śpimy, mózg całkowicie zmienia swoje funkcje, wyjaśniają. Staje się prawie jak nerka, usuwając odpady z systemu.<br />Wszystko, od naczyń krwionośnych po układ odpornościowy, wykorzystuje sen jako czas na naprawę.<br />Istnieją pewne procesy naprawcze, które zachodzą w organizmie głównie lub najefektywniej podczas snu. Jeśli nie śpisz wystarczająco dużo, te procesy zostaną zakłócone.<br />c.d.n."
    },
    {
        id: 4,
        title: 'Nawodnienie: dlaczego jest takie ważne?',
        image: water,
        contentOfArticle: "Twoje ciało zależy od wody, aby przetrwać. Każda komórka, tkanka i narząd w twoim ciele potrzebuje wody do prawidłowego funkcjonowania. Na przykład twoje ciało używa wody do utrzymywania odpowiedniej temperatury, usuwania odpadów i smarowania stawów. Woda jest potrzebna dla ogólnego dobrego stanu zdrowia.<br />Większości ludzi powiedziano, że powinni codziennie pić od 6 do 8 szklanek wody o pojemności ok. 250 ml. To rozsądny cel. Jednak różni ludzie potrzebują różnych ilości wody, aby pozostać nawodnionym. Większość zdrowych osób może być dobrze nawodniona, pijąc wodę i inne płyny, gdy poczują pragnienie. Niektórym osobom może wystarczyć mniej niż 8 szklanek. Inni ludzie mogą potrzebować więcej niż 8 szklanek dziennie.<br />Jeśli nie pijesz wystarczającej ilości wody, możesz się odwodnić. Oznacza to, że twoje ciało nie ma wystarczającej ilości płynów, aby prawidłowo działać.<br />Twój mocz może być wskaźnikiem odwodnienia. Jeśli jest bezbarwny lub jasnożółty, jesteś dobrze nawodniony. Jeśli twój mocz ma kolor ciemnożółty lub bursztynowy, możesz być odwodniony.<br />Istnieją inne oznaki, które mogą sygnalizować, że możesz być odwodniony. Zawierają:<br />- Mała ilość moczu lub brak<br />- Mocz ciemniejszy niż zwykle<br />- Suchość w ustach<br />- Senność lub zmęczenie<br />- Ekstremalne pragnienie<br />- Ból głowy<br />- Dezorientacja<br />- Zawroty głowy lub oszołomienie<br />- Żadnych łez podczas płaczu<br /> c.d.n."
    },
    {
        id: 5,
        title: 'Odżywianie wpływa na mózg',
        image: brain,
        contentOfArticle: "Funkcjonowanie mózgu i zdrowie psychiczne mogą nie być pierwszą rzeczą, o której myślisz, gdy myślisz o jedzeniu i napojach, które wkładasz do swojego ciała.<br />Większość ludzi prawdopodobnie nie utożsamia zdrowej diety z dobrym nastrojem lub lepszą pamięcią. Ale, podobnie jak drogi samochód, nasze mózgi potrzebują najwyższej jakości paliwa, aby działać jak najlepiej. Ta funkcja obejmuje zarządzanie naszymi emocjami i zaburzeniami nastroju.<br />„Jesteś tym, co jesz” z pewnością odnosi się do jedzenia, które odżywia mózg i że istnieje wiele różnych produktów spożywczych, które promują zdrowe funkcjonowanie mózgu.<br />Nie ma jednego magicznego pokarmu, który trzeba spożywać dla zdrowia mózgu. Jednak, podobnie jak w przypadku większości podejść do odżywiania i zdrowia, w diecie należy uwzględnić różne składniki odżywcze, aby uzyskać optymalne korzyści i zdrowie mózgu.<br />Aby poczuć się bardziej zrównoważonym emocjonalnie i wspierać pozytywną energię poprzez nasze wybory żywieniowe, spożywaj pokarmy, które dają nam energię, radość i paliwo dla naszego ciała.<br />Jedzenie wysokiej jakości żywności zawierającej witaminy, minerały i przeciwutleniacze pozytywnie odżywi mózg.<br />Dieta bogata w przetworzoną żywność i rafinowane cukry może zaburzać funkcjonowanie mózgu i pogarszać objawy zdrowia psychicznego.<br />c.d.n."
    }]
    
export default articlesArray;
