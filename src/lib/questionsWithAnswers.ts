export type QuestionTypes = {
  question: string;
  answer: string;
};

export const questionsWithAnswers: QuestionTypes[] = [
  {
    question: "Co to jest React?",
    answer:
      "React (zwany także React.js lub ReactJS) to open-source'owa biblioteka JavaScriptu do tworzenia modularnych interfejsów użytkownika, szczególnie dla aplikacji jednostronicowych. Jest stosowany do obsługi warstwy widoku dla aplikacji webowych i mobilnych opartych na komponentach w deklaratywnym podejściu.",
  },
  {
    question: "Jaka jest historia ewolucji React?",
    answer:
      "Historia ReactJS rozpoczęła się w 2010 roku wraz z powstaniem XHP. XHP to rozszerzenie PHP, które poprawia składnię języka w taki sposób, że fragmenty dokumentu XML stają się ważnymi wyrażeniami PHP, a głównym celem było tworzenie niestandardowych i wielokrotnego użytku elementów HTML.",
  },
  {
    question: "Jakie są główne cechy React?",
    answer:
      "Główne cechy React to: używa składni JSX, korzysta z wirtualnego DOMu zamiast rzeczywistego DOMu, obsługuje renderowanie po stronie serwera, stosuje unidirectionalny przepływ danych lub wiązanie danych oraz używa komponentów interfejsu użytkownika, które są wielokrotnego użytku/komponowalne do tworzenia widoku.",
  },
  {
    question: "Co to jest JSX?",
    answer:
      "JSX oznacza JavaScript XML i jest to rozszerzenie składni podobne do XML do ECMAScript. W skrócie, dostarcza ono cukier składniowy dla funkcji React.createElement (typ, props, ... dzieci), dając nam ekspresywność języka JavaScript wraz z syntaksem szablonu podobnym do HTML.",
  },
  {
    question: "Jaka jest różnica między Elementem a Komponentem?",
    answer:
      "Element to zwykły obiekt opisujący, co ma się pojawić na ekranie w postaci węzłów DOM lub innych komponentów. Komponent natomiast może być zadeklarowany na kilka różnych sposobów. Może to być klasa z metodą render() lub może być zdefiniowany jako funkcja. W obu przypadkach przyjmuje on propsy jako wejście i zwraca drzewo JSX jako wyjście.",
  },
  {
    question: "Jak tworzyć komponenty w React?",
    answer:
      "Komponenty są podstawowymi elementami tworzenia interfejsów użytkownika w React. Istnieją dwie możliwe metody tworzenia komponentów: Komponenty Funkcyjne i Komponenty Klasowe. Komponenty Funkcyjne to najprostszy sposób tworzenia komponentu, natomiast Komponenty Klasowe mogą być również używane, szczególnie w starszych wersjach React, gdy wymagane są metody cyklu życia lub stan.",
  },
  {
    question: "Kiedy używać Komponentu Klasy nad Komponentem Funkcyjnym?",
    answer:
      "Po dodaniu Huków (czyli od wersji React 16.8) zawsze zaleca się używanie Komponentów Funkcyjnych nad Komponentami Klasowymi w React. Istnieją jednak dwa powody, dla których nadal warto używać Komponentów Klasowych: gdy potrzebna jest funkcjonalność Reacta, której odpowiednik funkcji nie istnieje jeszcze, np. granice błędów, oraz w starszych wersjach, jeśli komponent wymaga stanu lub metod cyklu życia.",
  },
  {
    question: "Czym są Komponenty Czyste?",
    answer:
      "Komponenty Czyste to takie, które renderują ten sam wynik dla tych samych stanów i propsów. W komponentach funkcyjnych można osiągnąć te czyste komponenty za pomocą funkcji React.memo(), która zapobiega niepotrzebnym ponownym renderowaniom, porównując poprzednie i nowe propsy za pomocą płytkiego porównania.",
  },
  {
    question: "Co to jest stan w React?",
    answer:
      "Stan komponentu to obiekt przechowujący pewne informacje, które mogą się zmieniać w trakcie życia komponentu. Ważne jest, aby stan naszego komponentu był jak najprostszy i minimalizować liczbę komponentów związanych ze stanem.",
  },
  {
    question: "Czym są propsy w React?",
    answer:
      "Propsy są danymi wejściowymi dla komponentów. Mogą to być pojedyncze wartości lub obiekty zawierające zestaw wartości przekazywanych do komponentów podczas ich tworzenia, podobnie jak atrybuty tagów HTML. Głównym celem propsów w React jest dostarczanie funkcjonalności komponentu, wywoływanie zmian stanu oraz używanie this.props.reactProp w metodzie render() komponentu.",
  },
  {
    question: "Jaka jest różnica między stanem a propsami?",
    answer:
      "W React, zarówno stan, jak i propsy, są zwykłymi obiektami JavaScriptu używanymi do zarządzania danymi komponentu, ale są używane w różny sposób i mają różne cechy. Stan jest zarządzany przez sam komponent i może być aktualizowany za pomocą funkcji ustawiającej (setState() dla komponentów klasowych), podczas gdy propsy są przekazywane do komponentu przez jego nadrzędny komponent i są tylko do odczytu.",
  },
  {
    question: "Czym są zdarzenia syntetyczne w React?",
    answer:
      "Zdarzenia syntetyczne są to warstwa abstrakcji na wydarzeniami przeglądarki. Ich API jest identyczne jak wydarzeń natywnych przeglądarki, włączając w to metody stopPropagation() i preventDefault(), z tą różnicą, że zdarzenia te działają identycznie we wszystkich przeglądarkach.",
  },
  {
    question: "Czym są wyrażenia warunkowe w React?",
    answer:
      "Można użyć zarówno instrukcji if, jak i wyrażeń warunkowych dostępnych w JS do warunkowego renderowania wyrażeń. Oprócz tych podejść, można również osadzić dowolne wyrażenia w JSX, owijając je w nawiasy klamrowe, a następnie za nimi dodając operator logiczny JS &&.",
  },
  {
    question:
      'Czym jest właściwość "key" i jaka jest korzyść z jej użycia w tablicach elementów?',
    answer:
      "Klucz jest specjalnym atrybutem, który należy uwzględnić podczas mapowania tablic w celu renderowania danych. Atrybut klucza pomaga Reactowi zidentyfikować, które elementy zostały zmienione, dodane lub usunięte. Klucze powinny być unikalne wśród rodzeństwa i zazwyczaj używamy identyfikatora z naszych danych jako klucza.",
  },
  {
    question: "Czym jest Wirtualny DOM?",
    answer:
      "Wirtualny DOM (VDOM) to wewnętrzne odwzorowanie prawdziwego DOM-u. Reprezentacja interfejsu użytkownika jest przechowywana w pamięci i zsynchronizowana z „prawdziwym” DOM-em. Cały proces to tzw. rekonsiliacja.",
  },
  {
    question: "Jak działa Wirtualny DOM?",
    answer:
      "Wirtualny DOM działa w trzech prostych krokach: 1. Za każdym razem, gdy zmieniają się jakiekolwiek dane, cały interfejs użytkownika jest ponownie renderowany w reprezentacji Wirtualnego DOM-u. 2. Następnie obliczane są różnice między poprzednią reprezentacją DOM, a nową. 3. Kiedy obliczenia zostaną zakończone, rzeczywisty DOM zostanie zaktualizowany tylko w przypadku rzeczywistych zmian.",
  },
  {
    question: "Czym różni się Shadow DOM od Wirtualnego DOM?",
    answer:
      "Shadow DOM to technologia przeglądarki zaprojektowana głównie do ograniczania zmiennych i CSS w komponentach internetowych. Wirtualny DOM to koncepcja zaimplementowana przez biblioteki w JavaScript na podstawie interfejsów przeglądarki.",
  },
  {
    question: "Czym jest React Fiber?",
    answer:
      "Fiber to nowy silnik rekonsiliacji lub reimplementacja głównego algorytmu w React w wersji 16. Jego celem jest zwiększenie przydatności dla obszarów takich jak animacja, układ, gesty, możliwość wstrzymania, przerwania lub ponownego użycia pracy oraz przydzielania priorytetów różnym typom aktualizacji; i nowe podstawy konkurancji.",
  },
  {
    question: "Jaki jest główny cel React Fiber?",
    answer:
      "Celem React Fiber jest zwiększenie jego przydatności w obszarach takich jak animacja, układ i gesty. Jego główną cechą jest inkrementalne renderowanie: możliwość podziału pracy renderowania na kawałki i rozłożenie jej na wiele ramek.",
  },
  {
    question: "Czym są kontrolowane komponenty?",
    answer:
      "Komponent kontrolowany to taki, który kontroluje elementy wejściowe w formularzach na kolejne wejścia użytkownika, tzn. każda mutacja stanu będzie miała związaną funkcję obsługi. Oznacza to, że wyświetlone dane są zawsze zsynchronizowane ze stanem komponentu.",
  },
  {
    question: "Czym są niekontrolowane komponenty?",
    answer:
      "Niekontrolowane komponenty to takie, które przechowują swoje własne dane wewnętrzne, a dane można uzyskać, odnosząc się do DOM-u za pomocą ref, gdy są potrzebne. Jest to bardziej zbliżone do tradycyjnego HTML. W większości przypadków zaleca się jednak korzystanie z kontrolowanych komponentów do implementacji formularzy. W kontrolowanym komponencie dane formularza są obsługiwane przez komponent Reacta. Alternatywą są komponenty niekontrolowane, gdzie dane formularza są obsługiwane przez sam DOM.",
  },
  {
    question: "Jaka jest różnica między createElement a cloneElement?",
    answer:
      "Elementy JSX są transpilowane do funkcji React.createElement() w celu utworzenia elementów React, które zostaną użyte do reprezentacji interfejsu użytkownika. Natomiast cloneElement służy do klonowania elementu i przekazywania mu nowych props.",
  },
  {
    question: "Co to jest Podnoszenie Stanu w React?",
    answer:
      "Kiedy kilka komponentów musi współdzielić te same zmieniające się dane, zaleca się przeniesienie wspólnego stanu do ich najbliższego wspólnego przodka. Oznacza to, że jeśli dwa komponenty potomne współdzielą te same dane z rodzica, to przenieś stan do rodzica zamiast utrzymywać lokalny stan w obu komponentach potomnych.",
  },
  {
    question: "Co to są Komponenty Wyższego Rzędu?",
    answer:
      "Komponent wyższego rzędu (HOC) to funkcja, która przyjmuje komponent i zwraca nowy komponent. W skrócie, jest to wzorzec pochodzący z natury kompozycyjnej Reacta. Nazywamy je czystymi komponentami, ponieważ mogą przyjąć dowolny dynamicznie dostarczony komponent potomny, ale nie zmodyfikują ani nie skopiują żadnego zachowania z komponentów wejściowych.",
  },
  {
    question: "Co to jest props children?",
    answer:
      "Children to prop, który pozwala przekazywać komponenty jako dane do innych komponentów, tak samo jak każdy inny używany prop. Drzewo komponentów umieszczone między otwarciem a zamknięciem tagu komponentu zostanie przekazane do tego komponentu jako prop children.",
  },
  {
    question: "Jak pisać komentarze w React?",
    answer:
      "Komentarze w React/JSX są podobne do komentarzy wielowierszowych w języku JavaScript, ale są zamknięte w nawiasach klamrowych. Komentarze jednoliniowe w React/JSX mają postać:",
  },
  {
    question: "Co to jest rekonsolidacja (reconciliation)?",
    answer:
      "Rekonsolidacja to proces, dzięki któremu React aktualizuje DOM przeglądarki i sprawia, że ​​React działa szybciej. React używa algorytmu różnicującego, aby aktualizacje komponentów były przewidywalne i szybsze.",
  },
  {
    question: "Czy funkcja lazy obsługuje eksporty nazwane?",
    answer:
      "Nie, obecnie funkcja React.lazy obsługuje tylko eksporty domyślne. Jeśli chcesz importować moduły, które mają eksporty nazwane, możesz utworzyć pośredni moduł, który je ponownie eksportuje jako domyślne.",
  },
  {
    question: "Dlaczego React używa className zamiast atrybutu class?",
    answer:
      "Nazwy atrybutów napisane w JSX są zamieniane na klucze obiektów JavaScript, a nazwy JavaScript nie mogą zawierać myślników ani odwróconych słów, dlatego zaleca się stosowanie camelCase, gdziekolwiek jest to możliwe w kodzie JSX. Atrybut class to słowo kluczowe w JavaScript, a JSX jest rozszerzeniem JavaScript. To jest główny powód, dla którego React używa className zamiast class. Przekazuj ciąg jako prop className.",
  },
  {
    question: "Co to są fragmenty (fragments)?",
    answer:
      "To powszechny wzorzec w React dla komponentu zwracającego wiele elementów. Fragmenty pozwalają grupować listę dzieci bez dodawania dodatkowych węzłów do DOM-u.",
  },
  {
    question: "Dlaczego fragmenty są lepsze od kontenerowych divów?",
    answer:
      "Poniżej znajduje się lista powodów, dla których warto stosować fragmenty zamiast kontenerowych elementów DOM: Fragmenty są nieco szybsze i zużywają mniej pamięci, ponieważ nie tworzą dodatkowego węzła DOM. Niektóre mechanizmy CSS, takie jak Flexbox i CSS Grid, mają specjalne relacje rodzic-dziecko, a dodawanie divów w środku utrudnia zachowanie pożądanego układu.",
  },
  {
    question: "Co to są portale (portals) w React?",
    answer:
      "Portal to zalecany sposób renderowania dzieci do węzła DOM, który istnieje poza hierarchią DOM rodzica komponentu. Korzystanie z transformacji CSS w komponencie powoduje, że jego potomne elementy nie mogą korzystać z pozycjonowania absolutnego, w przeciwnym razie układ zostanie zaburzony.",
  },
  {
    question: "Co to są komponenty bezstanowe (stateless components)?",
    answer:
      "Jeśli zachowanie komponentu jest niezależne od jego stanu, można go nazwać komponentem bezstanowym. Można użyć funkcji lub klasy do tworzenia komponentów bezstanowych. Ale chyba że potrzebujesz użyć haka cyklu życia w swoich komponentach, powinieneś używać komponentów funkcji. Istnieje wiele korzyści wynikających z decyzji o użyciu komponentów funkcji; są łatwe do napisania, zrozumienia i testowania, nieco szybsze i można całkowicie uniknąć słowa kluczowego this.",
  },
  {
    question: "Co to są komponenty stanowe (stateful components)?",
    answer:
      "Jeśli zachowanie komponentu zależy od stanu komponentu, można go określić jako komponent stanowy. Te komponenty stanowe mogą być albo funkcjami komponentu z hakami, albo klasami ES6, które rozszerzają React.Component. Istnieją różne powody, dla których może być konieczne używanie komponentów stanowych, np. potrzeba obsługi stanu lub cyklu życia komponentu.",
  },
  {
    question: "Jak zastosować walidację propsów w React?",
    answer:
      "Kiedy aplikacja działa w trybie deweloperskim, React automatycznie sprawdza wszystkie propsy ustawione na komponentach, aby upewnić się, że mają poprawny typ. Jeśli typ jest nieprawidłowy, React generuje komunikaty ostrzegawcze w konsoli. Jest to wyłączone w trybie produkcyjnym ze względu na wpływ na wydajność. Wymagane propsy są definiowane za pomocą isRequired.",
  },
  {
    question: "Jakie są zalety React?",
    answer:
      "Poniżej znajduje się lista głównych zalet Reacta: \n\n1. Zwiększa wydajność aplikacji dzięki wirtualnemu DOM. \n2. JSX ułatwia czytanie i pisanie kodu. \n3. Renderuje zarówno po stronie klienta, jak i serwera (SSR). \n4. Łatwo integruje się z innymi frameworkami (Angular, Backbone), ponieważ jest to tylko biblioteka widoku. \n5. Łatwo pisać testy jednostkowe i integracyjne za pomocą narzędzi takich jak Jest.",
  },
  {
    question: "Jakie są ograniczenia Reacta?",
    answer:
      "Oprócz zalet istnieje kilka ograniczeń Reacta: \n\n1. React to tylko biblioteka widoku, a nie pełny framework. \n2. Dla początkujących, którzy dopiero zaczynają przygodę z web developmentem, istnieje krzywa uczenia się. \n3. Integracja Reacta z tradycyjnym frameworkiem MVC wymaga dodatkowej konfiguracji. \n4. Złożoność kodu wzrasta wraz z szablonowaniem inline i JSX. \n5. Zbyt wiele mniejszych komponentów prowadzi do nadmiernej inżynierii lub nadmiernego generowania kodu.",
  },
  {
    question: "Jakie są zalecane sposoby na statyczną weryfikację typów?",
    answer:
      "Zwykle używamy biblioteki PropTypes (React.PropTypes został przeniesiony do paczki prop-types od wersji React v15.5) do weryfikacji typów w aplikacjach React. Dla dużych baz kodu zaleca się używanie statycznych weryfikatorów typów, takich jak Flow lub TypeScript, które wykonują weryfikację typów podczas kompilacji i zapewniają funkcje automatycznego uzupełniania.",
  },
  {
    question: "Jaki jest użytek z pakietu react-dom?",
    answer:
      "Pakiet react-dom udostępnia metody specyficzne dla DOMu, które można używać na najwyższym poziomie aplikacji. Większość komponentów nie musi korzystać z tego modułu. Niektóre metody tego pakietu to: \n\n1. render() \n2. hydrate() \n3. unmountComponentAtNode() \n4. findDOMNode() \n5. createPortal()",
  },
  {
    question: "Co to jest ReactDOMServer?",
    answer:
      "Obiekt ReactDOMServer umożliwia renderowanie komponentów do statycznego markupu (zwykle używanego na serwerze Node.js). Ten obiekt jest głównie używany do renderowania po stronie serwera (SSR). Można używać następujących metod zarówno w środowisku serwerowym, jak i przeglądarki: \n\n1. renderToString() \n2. renderToStaticMarkup() \n\nNa przykład, zazwyczaj uruchamiasz serwer internetowy oparty na Node.js, tak jak Express, Hapi lub Koa, i wywołujesz renderToString, aby wyrenderować swój główny komponent do ciągu znaków, który następnie wysyłasz jako odpowiedź.",
  },
  {
    question: "Jak używać innerHTML w React?",
    answer:
      "Atrybut dangerouslySetInnerHTML jest zastępstwem innerHTML w DOMie przeglądarki. Podobnie jak innerHTML, jego użycie jest ryzykowne ze względu na ataki typu cross-site scripting (XSS). Wystarczy przekazać obiekt __html jako klucz i tekst HTML jako wartość. \n\nW tym przykładzie komponent MyComponent używa atrybutu dangerouslySetInnerHTML do ustawienia znaczników HTML: \n\n```javascript \nfunction createMarkup() { \n  return { __html: 'Pierwszy &middot; Drugi' }; \n} \n\nfunction MyComponent() { \n  return <div dangerouslySetInnerHTML={createMarkup()} />; \n} \n```",
  },
  {
    question: "Jak używać styli w React?",
    answer:
      "Atrybut style akceptuje obiekt JavaScript z właściwościami zapisanymi w notacji camelCase, a nie jako ciąg CSS. Jest to zgodne z właściwością style DOMu w JavaScript, bardziej wydajne i zapobiega dziurom w zabezpieczeniach przed XSS. \n\n```javascript \nconst divStyle = { \n  color: 'blue', \n  backgroundImage: 'url(' + imgUrl + ')', \n}; \n\nfunction HelloWorldComponent() { \n  return <div style={divStyle}>Hello World!</div>; \n} \n``` \n\nKlucze stylu są zapisywane w notacji camelCase, aby być zgodnymi z dostępem do właściwości na węzłach DOM w JavaScript (np. node.style.backgroundImage).",
  },
  {
    question: "W jaki sposób zdarzenia różnią się w React?",
    answer:
      "Obsługa zdarzeń w elementach React ma kilka różnic składniowych: \n\n1. Obsługiwane przez React zdarzenia mają nazwy zapisane w notacji camelCase, a nie małymi literami. \n2. W JSX przekazujesz funkcję jako obsługę zdarzenia, a nie ciąg znaków.",
  },
  {
    question: "Jaki jest wpływ indeksów jako kluczy?",
    answer:
      "Klucze powinny być stabilne, przewidywalne i unikatowe, aby React mógł śledzić elementy. \n\nW poniższym fragmencie kodu klucz każdego elementu będzie oparty na kolejności, a nie na danych, które są reprezentowane. Ogranicza to optymalizacje, które może wykonać React, i tworzy mylące błędy w aplikacji. \n\n```javascript \n{ \n  todos.map((todo, index) => <Todo {...todo} key={index} />); \n} \n``` \n\nJeśli użyjesz danych elementu jako unikatowego klucza, zakładając, że todo.id jest unikalne dla tej listy i stabilne, React będzie mógł przemieszczać elementy bez konieczności ponownego oceniania ich. \n\n```javascript \n{ \n  todos.map((todo) => <Todo {...todo} key={todo.id} />); \n} \n``` \n\nUwaga: Jeśli w ogóle nie określisz klucza, React użyje indeksu jako wartości klucza podczas iterowania po tablicy danych.",
  },
  {
    question: "Jak warunkowo renderować komponenty?",
    answer:
      "W niektórych przypadkach chcesz renderować różne komponenty w zależności od pewnego stanu. JSX nie renderuje wartości false lub undefined, więc można użyć warunkowego skrótu do renderowania określonej części komponentu tylko wtedy, gdy określony warunek jest prawdziwy. \n\n```javascript \nconst MyComponent = ({ name, address }) => ( \n  <div> \n    <h2>{name}</h2> \n    {address && <p>{address}</p>} \n  </div> \n); \n``` \n\nJeśli potrzebujesz warunku if-else, użyj operatora trójargumentowego.",
  },
  {
    question:
      "Dlaczego musimy uważać, kiedy rozprzestrzeniać propsy na elementach DOM?",
    answer:
      "Rozprzestrzeniając propsy, ryzykujemy dodanie nieznanych atrybutów HTML, co jest złą praktyką. Zamiast tego możemy użyć destrukturyzacji propsów z operatorem ...rest, aby dodać tylko wymagane propsy. \n\n```javascript \nconst ComponentA = () => ( \n  <ComponentB isDisplay={true} className={'componentStyle'} /> \n); \n\nconst ComponentB = ({ isDisplay, ...domProps }) => ( \n  <div {...domProps}>{'ComponentB'}</div> \n); \n```",
  },
  {
    question: "Jak memoizować komponent?",
    answer:
      "Istnieją dostępne biblioteki do memoizowania komponentów funkcyjnych. Na przykład biblioteka moize może memoizować komponent w innym komponencie. \n\n```javascript \nimport moize from 'moize'; \nimport Component from './components/Component'; \n \nconst MemoizedFoo = moize.react(Component); \n \nconst Consumer = () => { \n  <div> \n    {'Będę memoizować następujący wpis:'} \n    <MemoizedFoo /> \n  </div>; \n}; \n``` \n\nAktualizacja: Od wersji React v16.6.0 mamy React.memo. Zapewnia on komponent wyższego rzędu, który memoizuje komponent, chyba że zmieniają się propsy. Aby go użyć, po prostu opakuj komponent za pomocą React.memo przed jego użyciem. \n\n```javascript \nconst MemoComponent = React.memo(function MemoComponent(props) { \n  /* renderowanie przy użyciu propsów */ \n}); \n \nlub \n \nexport default React.memo(MyFunctionComponent); \n```",
  },
  {
    question: "Jak zaimplementować renderowanie po stronie serwera (SSR)?",
    answer:
      "React jest już wyposażony w obsługę renderowania na serwerach Node.js. Dostępna jest specjalna wersja renderera DOMu, która działa tak samo jak po stronie klienta. \n\n```javascript \nimport ReactDOMServer from 'react-dom/server'; \nimport App from './App'; \n \nReactDOMServer.renderToString(<App />); \n``` \n\nTa metoda wygeneruje standardowy HTML jako ciąg znaków, który można następnie umieścić w ciele strony jako część odpowiedzi serwera. Po stronie klienta React wykrywa wcześniej wyrenderowaną zawartość i bezproblemowo kontynuuje, gdzie się skończył.",
  },
  {
    question: "Jak włączyć tryb produkcyjny w React?",
    answer:
      "Należy użyć metody DefinePlugin z Webpacka, aby ustawić NODE_ENV na production, co pozwala na usunięcie takich rzeczy jak walidacja PropTypes i dodatkowe ostrzeżenia. Oprócz tego, jeśli zminifikujesz kod, na przykład przez eliminację martwego kodu w Uglify, co pozwoli na usunięcie kodu tylko dla środowiska deweloperskiego oraz komentarzy, to znacząco zmniejszy rozmiar twojego bundla.",
  },
  {
    question: "Jak Hooks zastępują render props i komponenty wyższego rzędu?",
    answer:
      "Zarówno render propsy, jak i komponenty wyższego rzędu renderują tylko pojedyncze dziecko, ale w większości przypadków Hooks są prostszym sposobem na rozwiązanie tego, redukując zagnieżdżenie w drzewie komponentów.",
  },
  {
    question: "Co to jest komponent przełączający?",
    answer:
      "Komponent przełączający to komponent, który renderuje jeden z wielu innych komponentów. Potrzebujemy obiektu do mapowania wartości właściwości na komponenty.",
  },
  {
    question: "Co to są Mixins w React?",
    answer:
      "Mixin to sposób całkowitego oddzielenia komponentów, aby miały wspólną funkcjonalność. Mixins nie powinny być używane i mogą zostać zastąpione przez komponenty wyższego rzędu lub dekoratory.",
  },
  {
    question: "Jakie zdarzenia wskaźnika są obsługiwane w React?",
    answer:
      "Zdarzenia wskaźnika zapewniają ujednolicony sposób obsługi wszystkich zdarzeń wejścia. W przeszłości mieliśmy tylko mysz i odpowiednie listenery zdarzeń do ich obsługi, ale obecnie mamy wiele urządzeń, które nie mają myszy, takie jak telefony z ekranem dotykowym lub długopisy. Należy pamiętać, że te zdarzenia będą działać tylko w przeglądarkach, które obsługują specyfikację Zdarzeń wskaźnika.",
  },
  {
    question: "Dlaczego nazwy komponentów powinny zaczynać się wielką literą?",
    answer:
      "Jeśli renderujesz swój komponent za pomocą JSX, nazwa tego komponentu musi zaczynać się wielką literą, w przeciwnym razie React wywoła błąd jako nierozpoznany tag. Ta konwencja wynika z faktu, że tylko elementy HTML i tagi SVG mogą zaczynać się od małej litery.",
  },
  {
    question: "Czy w React v16 obsługiwane są niestandardowe atrybuty DOM?",
    answer:
      "Tak. W przeszłości React ignorował nieznane atrybuty DOM. Jeśli napisałeś JSX z atrybutem, którego React nie rozpoznaje, po prostu go pomijał. W React v16 wszystkie nieznane atrybuty zostaną umieszczone w DOM.",
  },
  {
    question: "Jak iterować w JSX?",
    answer: "Możesz po prostu użyć metody map() na tablicy z elementami JSX.",
  },
  {
    question: "Jak dostęp do propsów w atrybutach w JSX?",
    answer:
      "React (lub JSX) nie obsługuje interpolacji zmiennych wewnątrz wartości atrybutu. Możesz jednak umieścić dowolne wyrażenie JavaScript wewnątrz nawiasów klamrowych jako całkowitą wartość atrybutu.",
  },
  {
    question: "Jak warunkowo stosować atrybuty klasy?",
    answer:
      "Nie powinieneś używać nawiasów klamrowych wewnątrz cudzysłowów, ponieważ zostanie to ocenione jako ciąg znaków. Zamiast tego musisz przenieść nawiasy klamrowe na zewnątrz.",
  },
  {
    question: "Jaka jest różnica między React a ReactDOM?",
    answer:
      "Pakiet react zawiera funkcje takie jak React.createElement(), React.Component, React.Children i inne pomocniki związane z elementami i klasami komponentów. Natomiast pakiet react-dom zawiera ReactDOM.render() oraz obsługę renderowania po stronie serwera z ReactDOMServer.renderToString() i ReactDOMServer.renderToStaticMarkup().",
  },
  {
    question: "Dlaczego ReactDOM jest oddzielone od React?",
    answer:
      "Zespół React pracował nad wyodrębnieniem wszystkich funkcji związanych z DOM do oddzielnej biblioteki o nazwie ReactDOM. Wersja 0.14 React to pierwsze wydanie, w którym biblioteki są podzielone.",
  },
  {
    question: "Jak używać elementu label w React?",
    answer:
      "Jeśli próbujesz renderować element <label> związanego z polami tekstowymi za pomocą standardowego atrybutu for, to HTML generowany przez React będzie pozbawiony tego atrybutu.",
  },
  {
    question: "Jak połączyć wiele obiektów stylów inline?",
    answer:
      "Możesz użyć operatora spread w regularnym React lub notacji tablicowej w React Native.",
  },
  {
    question:
      "Jak ponownie renderować widok przy zmianie rozmiaru przeglądarki?",
    answer:
      "Możesz użyć haka useState i useEffect do zarządzania zmiennymi stanu szerokości i wysokości oraz dodania nasłuchiwania zdarzeń zmiany rozmiaru.",
  },
  {
    question: "Jak ładnie sformatować JSON w React?",
    answer:
      "Możemy użyć tagu <pre>, aby zachować formatowanie z JSON.stringify().",
  },
  {
    question: "Dlaczego nie możesz aktualizować props w React?",
    answer:
      "Filozofia Reacta zakłada, że ​​propsy powinny być niemutowalne (tylko do odczytu) i hierarchiczne. Oznacza to, że rodzic może przekazywać dowolne wartości props do dziecka, ale dziecko nie może modyfikować otrzymanych propsów.",
  },
  {
    question: "Jak skupić element input podczas ładowania strony?",
    answer:
      "Musisz użyć haka useEffect do ustawienia fokusu na polu input podczas ładowania strony dla komponentu funkcyjnego.",
  },
  {
    question:
      "Jak możemy znaleźć wersję Reacta w czasie wykonywania w przeglądarce?",
    answer: "Możesz użyć React.version, aby uzyskać wersję.",
  },
  {
    question: "Jak dodać Google Analytics do React Router?",
    answer:
      "Dodaj nasłuchiwanie na obiekcie historii, aby rejestrować każde wyświetlenie strony.",
  },
  {
    question: "Jak stosować prefixy dostawców do stylów inline w React?",
    answer:
      "React nie stosuje automatycznie prefiksów dostawców. Musisz ręcznie dodać prefiksy dostawców.",
  },
  {
    question: "Jak importować i eksportować komponenty za pomocą Reacta i ES6?",
    answer: "Należy używać domyślnego eksportu do eksportowania komponentów.",
  },
  {
    question: "Jakie są wyjątki w nazewnictwie komponentów Reacta?",
    answer:
      "Nazwy komponentów powinny zaczynać się od wielkiej litery, ale istnieją pewne wyjątki od tej konwencji.",
  },
  {
    question: "Czy w plain React można używać async/await?",
    answer:
      "Jeśli chcesz używać async/await w React, będziesz potrzebował Babel i pluginu transform-async-to-generator.",
  },
  {
    question: "Jakie są powszechne struktury folderów dla Reacta?",
    answer: "Istnieją dwa powszechne sposoby struktury plików projektów React.",
  },
  {
    question: "Jakie są popularne paczki do animacji?",
    answer:
      "React Transition Group i React Motion są popularnymi paczkami do animacji w ekosystemie React.",
  },
  {
    question: "Jaka jest korzyść z modułów stylów?",
    answer:
      "Zaleca się unikanie twardego kodowania wartości stylów w komponentach. Wartości, które prawdopodobnie będą używane w różnych komponentach interfejsu użytkownika, powinny być wydzielone do własnych modułów.",
  },
  {
    question: "Jakie są popularne lintery specyficzne dla Reacta?",
    answer:
      "ESLint to popularny linter JavaScript. Dostępne są wtyczki, które analizują określone style kodu. Jedną z najczęściej używanych wtyczek dla Reacta jest npm package o nazwie eslint-plugin-react. Domyślnie sprawdza on szereg najlepszych praktyk, od kluczy w iteratorach do pełnego zestawu typów propsów.",
  },
  {
    question: "Co to jest React Router?",
    answer:
      "React Router to potężna biblioteka routingu, zbudowana na bazie React, która pomaga szybko dodawać nowe ekrany i przepływy do aplikacji, jednocześnie zachowując adres URL w synchronizacji z tym, co jest wyświetlane na stronie.",
  },
  {
    question: "W czym różni się React Router od biblioteki history?",
    answer:
      "React Router to otoczka wokół biblioteki history, która obsługuje interakcję z historią przeglądarki za pomocą jej historii przeglądarki i historii hashów. Zapewnia również historię pamięci, która jest przydatna w środowiskach, które nie mają globalnej historii, takich jak rozwój aplikacji mobilnych (React Native) i testowanie jednostkowe z Node.",
  },
  {
    question: "Jakie są komponenty <Router> w React Router v4?",
    answer:
      "React Router v4 zapewnia poniżej 3 komponenty <Router>: <BrowserRouter>, <HashRouter>, <MemoryRouter>. Powyższe komponenty tworzą instancje historii przeglądarki, hashowej i pamięci. React Router v4 udostępnia właściwości i metody instancji historii skojarzonej z twoim routerem poprzez kontekst w obiekcie routera.",
  },
  {
    question: "Jaka jest rola metod push() i replace() obiektu historii?",
    answer:
      "Instancja historii ma dwie metody służące nawigacji. push() i replace(). Jeśli myślisz o historii jako o tablicy odwiedzanych lokalizacji, push() doda nową lokalizację do tablicy, a replace() zastąpi bieżącą lokalizację w tablicy nową.",
  },
  {
    question: "Jak można programowo nawigować za pomocą React Router v4?",
    answer:
      "Istnieje trzy różne sposoby programowego nawigowania za pomocą komponentów. Pierwszym z nich jest użycie funkcji wyższego rzędu withRouter(). Drugim sposobem jest użycie komponentu <Route> i wzorca props render. Trzecim sposobem jest użycie kontekstu, choć nie jest to zalecane i uważane jest za niestabilne API.",
  },
  {
    question: "Jak pobierać parametry zapytań w React Router v4?",
    answer:
      "Możliwość parsowania ciągów zapytań została usunięta z React Router v4, ponieważ w ciągu lat były prośby użytkowników o wsparcie dla różnych implementacji. Zalecanym podejściem jest użycie biblioteki query strings.",
  },
  {
    question:
      "Dlaczego pojawia się ostrzeżenie „Router może mieć tylko jeden element potomny”?",
    answer:
      "Musisz zawinąć swoje trasy w bloku <Switch>, ponieważ <Switch> jest wyjątkowy w tym, że renderuje wyłącznie trasę wyłącznie. Na początku musisz dodać Switch do swoich importów.",
  },
  {
    question:
      "Jak przekazywać parametry do metody history.push w React Router v4?",
    answer: "Podczas nawigacji możesz przekazywać propsy do obiektu historii.",
  },
  {
    question: "Jak przeprowadzić automatyczne przekierowanie po zalogowaniu?",
    answer:
      "Pakiet react-router dostarcza komponentu <Redirect> w React Router. Renderowanie <Redirect> spowoduje nawigację do nowej lokalizacji. Podobnie jak przekierowania po stronie serwera, nowa lokalizacja zastąpi bieżącą lokalizację na stosie historii.",
  },
  {
    question: "Co to jest React Intl?",
    answer:
      "Biblioteka React Intl ułatwia międzynarodową adaptację w React, oferując gotowe komponenty i API, które mogą obsługiwać wszystko, od formatowania ciągów, dat i liczb po liczby mnogie. React Intl jest częścią FormatJS, który dostarcza powiązań z React za pośrednictwem swoich komponentów i API.",
  },
  {
    question: "Jakie są główne cechy React Intl?",
    answer:
      "Poniżej znajdują się główne cechy React Intl: - Wyświetlanie liczb z separatorem. - Prawidłowe wyświetlanie dat i czasów. - Wyświetlanie dat względem „teraz”. - Fleksyjność etykiet w ciągach. - Obsługa ponad 150 języków. - Działa w przeglądarce i środowisku Node. - Zbudowany na standardach.",
  },
  {
    question: "Jakie są dwa sposoby formatowania w React Intl?",
    answer:
      "Biblioteka zapewnia dwa sposoby formatowania ciągów, liczb i dat: 1. Za pomocą komponentów React: <FormattedMessage id={'account'} defaultMessage={'Kwota jest mniejsza niż minimalny stan konta.'} /> 2. Za pomocą API: const messages = defineMessages({ accountMessage: { id: 'account', defaultMessage: 'Kwota jest mniejsza niż minimalny stan konta.' } }); formatMessage(messages.accountMessage);",
  },
  {
    question:
      "Jak używać komponentu <FormattedMessage> jako atrybutu placeholder w React Intl?",
    answer:
      "Komponenty <Formatted... /> z react-intl zwracają elementy, a nie zwykły tekst, więc nie mogą być używane jako atrybuty placeholder, alt itp. W takim przypadku powinieneś użyć API niższego poziomu formatMessage(). Możesz wstrzyknąć obiekt intl do swojego komponentu za pomocą komponentu wyższego rzędu injectIntl() i następnie sformatować komunikat za pomocą dostępnego na tym obiekcie formatMessage().",
  },
  {
    question: "Jak uzyskać bieżącą lokalizację za pomocą React Intl?",
    answer:
      "Możesz uzyskać bieżącą lokalizację w dowolnym komponencie swojej aplikacji za pomocą injectIntl(): import { injectIntl, intlShape } from 'react-intl'; const MyComponent = ({ intl }) => ( <div>{`Bieżąca lokalizacja to ${intl.locale}`}</div> ); MyComponent.propTypes = { intl: intlShape.isRequired, }; export default injectIntl(MyComponent);",
  },
  {
    question: "Jak sformatować datę za pomocą React Intl?",
    answer:
      "Komponent wyższego rzędu injectIntl() umożliwi Ci dostęp do metody formatDate() za pomocą propsów w Twoim komponencie. Metoda ta jest używana wewnętrznie przez instancje FormattedDate i zwraca ciąg reprezentujący sformatowaną datę.",
  },
  {
    question: "Co to jest Shallow Renderer w testach React?",
    answer:
      "Płytkie renderowanie jest przydatne do pisania testów jednostkowych w React. Pozwala na renderowanie komponentu na jednym poziomie głębokości i sprawdzanie faktów na temat tego, co zwraca jego metoda render, bez martwienia się o zachowanie komponentów podrzędnych, które nie są tworzone ani renderowane.",
  },
  {
    question: "Co to jest pakiet TestRenderer w React?",
    answer:
      "Ten pakiet dostarcza renderer, który może być używany do renderowania komponentów do czystych obiektów JavaScript, bez zależności od DOM-u ani środowiska natywnego na urządzenia mobilne. Ten pakiet ułatwia uzyskanie migawki hierarchii widoków platformy (podobnie jak drzewo DOM) renderowanej przez ReactDOM lub React Native bez użycia przeglądarki lub jsdom.",
  },
  {
    question: "Jaki jest cel pakietu ReactTestUtils?",
    answer:
      "ReactTestUtils są dostarczane w pakiecie with-addons i pozwalają na wykonywanie działań na symulowanym DOM-ie w celu testowania jednostkowego.",
  },
  {
    question: "Co to jest Jest?",
    answer:
      "Jest to framework testowania jednostkowego JavaScript stworzony przez Facebooka, oparty na Jasmine, który zapewnia automatyczne tworzenie atrap i środowisko jsdom. Jest często używany do testowania komponentów.",
  },
  {
    question: "Jakie są zalety Jesta w porównaniu do Jasmine?",
    answer:
      "Jest kilka zalet w porównaniu do Jasmine: - Automatyczne znajdowanie testów do wykonania w kodzie źródłowym. - Automatyczne atrapy zależności podczas uruchamiania testów. - Pozwala na testowanie kodu asynchronicznego synchronicznie. - Uruchamia testy z implementacją fałszywego DOM-u (za pomocą jsdom), dzięki czemu testy mogą być uruchamiane z wiersza poleceń. - Uruchamia testy w równoległych procesach, dzięki czemu kończą się one szybciej.",
  },
  {
    question: "Podaj prosty przykład testu w Jescie.",
    answer:
      "Przykładem może być test dla funkcji dodającej dwie liczby w pliku sum.js: const sum = (a, b) => a + b; export default sum; Następnie utwórz plik o nazwie sum.test.js, który zawiera właściwy test: import sum from './sum'; test('dodaje 1 + 2, aby wynosiło 3', () => { expect(sum(1, 2)).toBe(3); }); Na koniec dodaj następujący fragment do swojego package.json: { 'scripts': { 'test': 'jest' } } Wreszcie, uruchom yarn test lub npm test, a Jest wydrukuje wynik.",
  },
  {
    question: "Co to jest flux?",
    answer:
      "Flux to paradygmat projektowania aplikacji używany jako zamiennik bardziej tradycyjnego wzorca MVC. Nie jest to framework ani biblioteka, ale nowy rodzaj architektury, który uzupełnia React i koncepcję przepływu danych jednokierunkowych. Facebook używa tego wzorca wewnętrznie podczas pracy z React.",
  },
  {
    question: "Co to jest Redux?",
    answer:
      "Redux to przewidywalny kontener stanu dla aplikacji JavaScript oparty na wzorcu projektowym Flux. Redux można używać razem z React lub z dowolną inną biblioteką widoku. Jest bardzo mały (około 2kB) i nie ma żadnych zależności.",
  },
  {
    question: "Jakie są główne zasady Redux?",
    answer:
      "Redux podąża za trzema podstawowymi zasadami: 1. Jedno źródło prawdy: Stan całej aplikacji jest przechowywany w drzewie obiektów w jednym magazynie. Jednorodne drzewo stanu ułatwia śledzenie zmian w czasie oraz debugowanie lub inspekcję aplikacji. 2. Stan jest tylko do odczytu: Jedyny sposób zmiany stanu polega na wyemitowaniu akcji, czyli obiektu opisującego, co się stało. Zapewnia to, że ani widoki, ani wywołania sieciowe nigdy nie będą bezpośrednio zapisywać stanu. 3. Zmiany są dokonywane za pomocą czystych funkcji: Aby określić, jak drzewo stanu jest transformowane przez akcje, piszesz reduktory. Reduktory to po prostu czyste funkcje, które przyjmują poprzedni stan i akcję jako parametry, a zwracają następny stan.",
  },
  {
    question: "Jakie są wady Redux w porównaniu do Flux?",
    answer:
      "Zamiast mówić o wadach, możemy powiedzieć, że istnieje kilka kompromisów przy użyciu Redux zamiast Flux. Są to między innymi: - Będziesz musiał nauczyć się unikać mutacji: Flux nie ma opinii na temat modyfikowania danych, ale Redux nie lubi mutacji, a wiele pakietów współpracujących z Redux zakłada, że nigdy nie mutujesz stanu. Możesz narzucić to za pomocą pakietów dostępnych tylko w trybie deweloperskim, takich jak redux-immutable-state-invariant, Immutable.js, lub instruując swój zespół, aby pisał kod bez mutacji. - Będziesz musiał ostrożnie wybierać pakiety: Podczas gdy Flux wyraźnie nie stara się rozwiązywać problemów takich jak cofanie/przywracanie, trwałość lub formularze, Redux ma punkty rozszerzeń takie jak pośrednik i wzmacniacze magazynu, oraz wywołał bogaty ekosystem. - Nie ma jeszcze ładnej integracji z Flow: Flux obecnie pozwala na bardzo imponujące statyczne sprawdzenie typów, które Redux jeszcze nie obsługuje.",
  },
  {
    question:
      "Jaka jest różnica między mapStateToProps() a mapDispatchToProps()?",
    answer:
      "mapStateToProps() to narzędzie, które pomaga twojemu komponentowi uzyskać zaktualizowany stan (który jest aktualizowany przez inne komponenty): const mapStateToProps = (state) => { return { todos: getVisibleTodos(state.todos, state.visibilityFilter), }; }; mapDispatchToProps() to narzędzie, które pomoże twojemu komponentowi wywołać zdarzenie akcji (wysyłając akcję, która może spowodować zmianę stanu aplikacji): const mapDispatchToProps = (dispatch) => { return { onTodoClick: (id) => { dispatch(toggleTodo(id)); }, }; }; Zaleca się zawsze używanie formy „skrótu obiektowego” dla mapDispatchToProps. Redux owija go w inną funkcję, która wygląda na (...args) => dispatch(onTodoClick(...args)), i przekazuje tę funkcję opakowującą jako właściwość do twojego komponentu: const mapDispatchToProps = { onTodoClick, };",
  },
  {
    question: "Czy mogę wywołać akcję w reduktorze?",
    answer:
      "Wywoływanie akcji wewnątrz reduktora jest antywzorcem. Twój reduktor powinien być bez skutków ubocznych, po prostu przetwarzającym ładunek akcji i zwracającym nowy obiekt stanu. Dodawanie nasłuchiwaczy i wywoływanie akcji wewnątrz reduktora może prowadzić do łańcuchowych akcji i innych skutków ubocznych.",
  },
  {
    question: "Jak uzyskać dostęp do magazynu Redux poza komponentem?",
    answer:
      "Wystarczy wyeksportować magazyn z modułu, w którym został utworzony za pomocą createStore(). Dodatkowo nie powinien on zanieczyszczać globalnego obiektu window. Przykład: store = createStore(myReducer); export default store;",
  },
  {
    question: "Jakie są wady wzorca MVW?",
    answer:
      "Są to m.in.: - Manipulacja DOM jest bardzo kosztowna, co powoduje, że aplikacje zachowują się powoli i nieefektywnie. - Ze względu na kołowe zależności utworzono skomplikowany model wokół modeli i widoków. - W przypadku aplikacji współpracujących (np. Google Docs) zachodzi dużo zmian danych. - Brak prostego sposobu na łatwe cofanie (powrót w czasie) bez dodawania tak dużo dodatkowego kodu.",
  },
  {
    question: "Czy istnieją podobieństwa między Redux a RxJS?",
    answer:
      "Te biblioteki są bardzo różne pod względem celów, ale istnieją pewne ogólne podobieństwa. Redux jest narzędziem do zarządzania stanem aplikacji. Zazwyczaj jest używany jako architektura dla interfejsów użytkownika. Myśl o nim jako o alternatywie dla (połowy) Angulara. RxJS to biblioteka programowania reaktywnego. Zazwyczaj jest używany jako narzędzie do wykonywania zadań asynchronicznych w JavaScript. Myśl o nim jako o alternatywie dla obietnic. Redux używa paradygmatu reaktywnego, ponieważ magazyn jest reaktywny. Magazyn obserwuje akcje z daleka i zmienia siebie. RxJS również używa paradygmatu reaktywnego, ale zamiast być architekturą, daje podstawowe składniki, obserwujące, do realizacji tego wzorca.",
  },
  {
    question: "Jak zresetować stan w Redux?",
    answer:
      "Musisz napisać główny reduktor w swojej aplikacji, który deleguje obsługę akcji do reduktora wygenerowanego przez combineReducers(). Na przykład, weźmy rootReducer(), aby zwrócić stan początkowy po akcji USER_LOGOUT. Ponieważ reduktory powinny zwracać stan początkowy, gdy są one wywoływane z undefined jako pierwszym argumentem, bez względu na akcję. Przykład: const appReducer = combineReducers({ /* reduktory na najwyższym poziomie aplikacji */ }); const rootReducer = (state, action) => { if (action.type === 'USER_LOGOUT') { state = undefined; } return appReducer(state, action); };",
  },
  {
    question: "Czym różni się React context od React Redux?",
    answer:
      "Możesz używać Context w swojej aplikacji bezpośrednio i będzie świetny do przekazywania danych do głęboko zagnieżdżonych komponentów, co jest dla niego zaprojektowane. Redux jest znacznie potężniejszy i oferuje wiele funkcji, których API Context nie dostarcza. Ponadto React Redux używa wewnętrznie Context, ale nie ujawnia tego faktu w publicznym API.",
  },
  {
    question: "Dlaczego funkcje stanu Redux są nazywane reduktorami?",
    answer:
      "Reduktory zawsze zwracają akumulację stanu (na podstawie wszystkich poprzednich i bieżących akcji). Dlatego działają jako reduktor stanu. Za każdym razem, gdy reduktor Redux jest wywoływany, przekazywane są stan i akcja jako parametry. Stan ten jest następnie redukowany (lub akumulowany) na podstawie akcji, a następnie zwracany jest kolejny stan. Można by zredukować zbiór akcji i stanu początkowego (magazynu), na którym wykonywane są te akcje, aby uzyskać końcowy wynikowy stan.",
  },
  {
    question: "Jak wykonać żądanie AJAX w Redux?",
    answer:
      "Możesz użyć pośrednika redux-thunk, który pozwala zdefiniować asynchroniczne akcje. Przykład pobierania określonego konta jako wywołanie AJAX za pomocą API fetch: export function fetchAccount(id) { return (dispatch) => { dispatch(setLoadingAccountState()); // Pokaż spinner ładowania fetch(`/account/${id}`, (response) => { dispatch(doneFetchingAccount()); // Ukryj spinner ładowania if (response.status === 200) { dispatch(setAccount(response.json)); // Użyj normalnej funkcji do ustawienia otrzymanego stanu } else { dispatch(someError); } }); }; } function setAccount(data) { return { type: 'SET_Account', data: data }; }",
  },
  {
    question:
      "Czy powinienem przechowywać cały stan komponentu w magazynie Redux?",
    answer:
      "Przechowuj swoje dane w magazynie Redux, a stan związany z interfejsem użytkownika wewnętrznie w komponencie.",
  },
  {
    question: "Jaki jest właściwy sposób uzyskania dostępu do magazynu Redux?",
    answer:
      "Najlepszym sposobem uzyskania dostępu do magazynu w komponencie jest użycie funkcji connect(), która tworzy nowy komponent, który owija istniejący. Ten wzorzec nazywany jest komponentami wyższego rzędu i jest zazwyczaj preferowanym sposobem rozszerzania funkcjonalności komponentu w React. Pozwala to mapować stan i twórców akcji do komponentu, a następnie przekazać je automatycznie wraz z aktualizacjami magazynu. Przykład użycia: const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);",
  },
  {
    question:
      "Jaka jest różnica między komponentem a kontenerem w React Redux?",
    answer:
      "Komponent to klasa lub funkcja komponentu, która opisuje część prezentacyjną twojej aplikacji. Kontener to nieformalne określenie komponentu podłączonego do magazynu Redux. Kontenery subskrybują aktualizacje stanu Redux i wysyłają akcje, zazwyczaj nie renderują elementów DOM; delegują renderowanie do komponentów prezentacyjnych potomnych.",
  },
  {
    question: "Jaki jest cel stałych w Redux?",
    answer:
      "Stałe pozwalają łatwo znaleźć wszystkie użycia określonej funkcjonalności w całym projekcie, gdy korzystasz z IDE. Zapobiegają również pojawianiu się głupich błędów spowodowanych literówkami – w takim przypadku otrzymasz natychmiastowy ReferenceError. Zazwyczaj zapisujemy je w pojedynczym pliku (constants.js lub actionTypes.js). Przykład: export const ADD_TODO = 'ADD_TODO'; export const DELETE_TODO = 'DELETE_TODO'; export const EDIT_TODO = 'EDIT_TODO'; export const COMPLETE_TODO = 'COMPLETE_TODO'; export const COMPLETE_ALL = 'COMPLETE_ALL'; export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';",
  },
  {
    question: "Jakie są różne sposoby napisania mapDispatchToProps()?",
    answer:
      "Istnieje kilka sposobów powiązania kreatorów akcji z dispatch() w mapDispatchToProps(). Oto możliwe opcje: const mapDispatchToProps = (dispatch) => ({ action: () => dispatch(action()), }); const mapDispatchToProps = (dispatch) => ({ action: bindActionCreators(action, dispatch), }); const mapDispatchToProps = { action }; Trzecia opcja jest skrótem dla pierwszej.",
  },
  {
    question:
      "Jaka jest rola parametru ownProps w mapStateToProps() i mapDispatchToProps()?",
    answer:
      "Jeśli parametr ownProps jest określony, React Redux przekaże do twoich funkcji connect propsy przekazane do komponentu. Jeśli używasz połączonego komponentu:",
  },
  {
    question: "Jak strukturyzować główne katalogi Redux?",
    answer:
      "Większość aplikacji posiada kilka głównych katalogów, jak poniżej:",
  },
  {
    question: "Co to jest redux-saga?",
    answer:
      "redux-saga to biblioteka, która ma na celu ułatwienie i poprawę obsługi efektów ubocznych (asynchroniczne operacje, takie jak pobieranie danych, i nieczyste operacje, takie jak dostęp do pamięci podręcznej przeglądarki) w aplikacjach React/Redux.",
  },
  {
    question: "Jaki jest model mentalny redux-saga?",
    answer:
      "Saga to jak oddzielny wątek w twojej aplikacji, który jest odpowiedzialny wyłącznie za efekty uboczne. redux-saga jest middleware Redux, co oznacza, że ten wątek można uruchamiać, wstrzymywać i anulować z głównej aplikacji za pomocą normalnych akcji Redux, ma dostęp do pełnego stanu aplikacji Redux i może również wysyłać akcje Redux.",
  },
  {
    question: "Jakie są różnice między call() a put() w redux-saga?",
    answer:
      "Zarówno funkcja call(), jak i put() są funkcjami tworzenia efektów. Funkcja call() służy do tworzenia opisu efektu, który instruuje middleware do wywołania obietnicy. Funkcja put() tworzy efekt, który instruuje middleware do wysłania akcji do magazynu.",
  },
  {
    question: "Co to jest Redux Thunk?",
    answer:
      "Redux Thunk to middleware, które pozwala pisać kreatory akcji, które zwracają funkcję zamiast akcji. Thunk może być używany do opóźniania wysyłania akcji, lub do wysyłania tylko wtedy, gdy spełniony jest określony warunek. Wewnętrzna funkcja otrzymuje metody sklepu dispatch() i getState() jako parametry.",
  },
  {
    question: "Jakie są różnice między redux-saga a redux-thunk?",
    answer:
      "Zarówno Redux Thunk, jak i Redux Saga zajmują się obsługą efektów ubocznych. W większości scenariuszy Thunk używa Promises do obsługi ich, podczas gdy Saga używa Generatorów. Thunk jest prostszy w użyciu, a Promises są znane wielu programistom, Sagas/Generators są bardziej potężne, ale będziesz musiał się ich nauczyć. Ale oba middleware mogą współistnieć, więc możesz zacząć od Thunks i wprowadzić Sagas w razie potrzeby.",
  },
  {
    question: "Co to jest Redux DevTools?",
    answer:
      "Redux DevTools to środowisko edycji na żywo z podróżą w czasie dla Redux, z gorącym przeładowaniem, odtwarzaniem akcji i niestandardowym interfejsem użytkownika. Jeśli nie chcesz trudzić się z instalowaniem Redux DevTools i integracją go z projektem, rozważ użycie rozszerzenia Redux DevTools dla Chrome'a i Firefoksa.",
  },
  {
    question: "Jakie są cechy Redux DevTools?",
    answer: "Niektóre z głównych cech Redux DevTools to:",
  },
  {
    question: "Co to są selektory Redux i dlaczego ich używać?",
    answer:
      "Selektory są funkcjami, które pobierają stan Redux jako argument i zwracają pewne dane, które mają być przekazane do komponentu. Na przykład, aby uzyskać szczegóły użytkownika ze stanu:",
  },
  {
    question: "Co to jest Redux Form?",
    answer:
      "Redux Form współpracuje z React i Redux, umożliwiając formularzowi w Reactie korzystanie z Reduxa do przechowywania całego swojego stanu. Redux Form może być używany z surowymi wejściami HTML5, ale działa również bardzo dobrze z popularnymi frameworkami UI, takimi jak Material UI, React Widgets i React Bootstrap.",
  },
  {
    question: "Jak dodać wiele middleware'ów do Reduxa?",
    answer:
      "Możesz użyć funkcji applyMiddleware(). Na przykład, możesz dodać redux-thunk i logger przekazując je jako argumenty do applyMiddleware():",
  },
  {
    question: "Jak ustawić stan początkowy w Reduxie?",
    answer:
      "Musisz przekazać stan początkowy jako drugi argument do funkcji createStore:",
  },
  {
    question: "W czym różni się Relay od Reduxa?",
    answer:
      "Relay jest podobny do Reduxa w tym, że oba używają jednego magazynu. Główną różnicą jest to, że relay zarządza tylko stanem pochodzącym z serwera, a dostęp do stanu odbywa się za pomocą zapytań GraphQL (do odczytu danych) i mutacji (do zmiany danych). Relay buforuje dane dla ciebie i optymalizuje pobieranie danych, pobierając tylko zmienione dane i nic więcej.",
  },
  {
    question: "Co to jest akcja w Reduxie?",
    answer:
      "Akcje są to zwykłe obiekty JavaScript lub ładunki informacji, które wysyłają dane z twojej aplikacji do twojego magazynu. Są one jedynym źródłem informacji dla magazynu. Akcje muszą mieć właściwość type, która wskazuje typ wykonywanej akcji.",
  },
  {
    question: "Jaka jest różnica między React Native a React?",
    answer:
      "React to biblioteka JavaScript, obsługująca zarówno front-end webowy, jak i działająca po stronie serwera, do tworzenia interfejsów użytkownika i aplikacji internetowych. React Native to framework mobilny, który kompiluje się do komponentów natywnych aplikacji, pozwalając na tworzenie natywnych aplikacji mobilnych (iOS, Android i Windows) w języku JavaScript, który umożliwia korzystanie z React do tworzenia komponentów, a pod spodem implementuje React.",
  },
  {
    question: "Jak testować aplikacje React Native?",
    answer:
      "React Native można testować tylko na symulatorach mobilnych, takich jak iOS i Android. Możesz uruchomić aplikację na swoim urządzeniu mobilnym, korzystając z aplikacji expo (https://expo.io), która synchronizuje się za pomocą kodu QR, twój telefon i komputer powinny być w tej samej sieci bezprzewodowej.",
  },
  {
    question: "Jak dokonywać logowania w React Native?",
    answer:
      "Możesz użyć console.log, console.warn itp. Od React Native v0.29 można po prostu uruchomić poniższe polecenie, aby zobaczyć logi w konsoli:",
  },
  {
    question: "Jak debugować swoje aplikacje React Native?",
    answer:
      "Należy postępować zgodnie z poniższymi krokami, aby debugować aplikację React Native:",
  },
  {
    question: "Co to jest reselect i jak działa?",
    answer:
      "Reselect to biblioteka selektorów (dla Reduxa), która wykorzystuje koncepcję memoizacji. Początkowo napisano go do obliczania danych pochodzących z Redux-like stanu aplikacji, ale nie może być związany z żadną architekturą ani biblioteką.",
  },
  {
    question: "Co to jest Flow?",
    answer:
      "Flow to statyczny sprawdzacz typów zaprojektowany do znajdowania błędów typów w JavaScript. Typy Flow mogą wyrażać znacznie bardziej drobne rozróżnienia niż tradycyjne systemy typów.",
  },
  {
    question: "Jaka jest różnica między Flow a PropTypes?",
    answer:
      "Flow to narzędzie analizy statycznej (sprawdzacz statyczny), które używa nadzbiory języka, pozwalając na dodawanie adnotacji typów do całego kodu i łapanie całego rodzaju błędów podczas kompilacji. PropTypes to podstawowy sprawdzacz typów (sprawdzacz czasu wykonania), który został dołączony do Reacta. Nie może sprawdzać niczego poza typami przekazywanych do danego komponentu właściwości. Jeśli chcesz bardziej elastycznego sprawdzania typów dla całego projektu, Flow/TypeScript są odpowiednimi wyborami.",
  },
  {
    question: "Jak używać ikon Font Awesome w React?",
    answer: "Poniżej przedstawiono kroki dołączenia Font Awesome w Reactie:",
  },
  {
    question: "Co to są narzędzia deweloperskie React?",
    answer:
      "Narzędzia deweloperskie React umożliwiają inspekcję hierarchii komponentów, w tym właściwości i stanu komponentów. Istnieją zarówno jako rozszerzenie przeglądarki (dla Chrome'a i Firefoksa), jak i samodzielna aplikacja (działa w innych środowiskach, w tym Safari, IE i React Native).",
  },
  {
    question: "Dlaczego karta React nie pojawia się w DevTools?",
    answer:
      "Gdy strona jest ładowana, narzędzia deweloperskie React ustawiają globalną nazwę __REACT_DEVTOOLS_GLOBAL_HOOK__, a następnie React komunikuje się z tym hakiem podczas inicjalizacji. Jeśli strona internetowa nie używa Reacta lub jeśli React nie może komunikować się z narzędziami deweloperskimi, to karta nie pojawi się.",
  },
  {
    question: "Co to są styled-components?",
    answer:
      "styled-components to biblioteka JavaScript do stylizacji aplikacji React. Usuwa mapowanie między stylami a komponentami i pozwala pisać właściwe CSS wzbogacone o JavaScript.",
  },
  {
    question: "Podaj przykład użycia styled-components.",
    answer:
      "Stwórzmy komponenty <Title> i <Wrapper> z określonymi stylami dla każdego z nich.",
  },
  {
    question: "Co to jest Relay?",
    answer:
      "Relay to framework JavaScript zapewniający warstwę danych i komunikację klient-serwer dla aplikacji internetowych z użyciem warstwy widoku React.",
  },
  {
    question: "Jakie są główne cechy biblioteki Reselect?",
    answer: "Poniżej przedstawiono główne cechy biblioteki Reselect:",
  },
  {
    question: "Podaj przykład użycia Reselect.",
    answer:
      "Poniżej przedstawiono przykładowe obliczenia i różne kwoty zamówienia przesyłki z uproszczonym użyciem Reselect:",
  },
  {
    question: "Czy Redux może być używany tylko z React?",
    answer:
      "Redux może być używany jako magazyn danych dla dowolnej warstwy interfejsu użytkownika. Najczęstszym użyciem jest z React i React Native, ale istnieją także biblioteki dla Angulara, Angulara 2, Vue, Mithril i więcej. Redux po prostu udostępnia mechanizm subskrypcji, który może być używany przez dowolny inny kod.",
  },
  {
    question:
      "Czy do użytku Reduxa potrzebny jest określony narzędzie do budowy?",
    answer:
      "Redux jest pierwotnie napisany w ES6 i transpilowany na produkcję do ES5 za pomocą narzędzi takich jak Webpack i Babel. Powinieneś móc go używać bez względu na swój proces kompilacji JavaScript. Redux oferuje również wersję UMD, którą można użyć bez żadnego procesu kompilacji.",
  },
  {
    question: "Jak wartości początkowe Redux Form są aktualizowane ze stanu?",
    answer:
      "Musisz dodać ustawienie `enableReinitialize: true`.\n\n```javascript\nconst InitializeFromStateForm = reduxForm({\n  form: 'initializeFromState',\n  enableReinitialize: true,\n})(UserEdit);\n```\nJeśli wartość initialValues zostanie zaktualizowana, formularz również się zaktualizuje.",
  },
  {
    question:
      "Jak PropTypes w React pozwalają na różne typy jednej właściwości?",
    answer:
      "Możesz użyć metody `oneOfType()` z PropTypes.\n\nNa przykład, właściwość `height` może być zdefiniowana jako typ string lub number, jak poniżej:\n\n```javascript\nComponent.propTypes = {\n  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\n};\n```",
  },
  {
    question: "Czy mogę importować plik SVG jako komponent React?",
    answer:
      "Możesz importować SVG bezpośrednio jako komponent zamiast ładować go jako plik. Ta funkcja jest dostępna w react-scripts@2.0.0 i nowszych.\n\n```javascript\nimport { ReactComponent as Logo } from './logo.svg';\n\nconst App = () => (\n  <div>\n    {/* Logo to rzeczywisty komponent React */}\n    <Logo />\n  </div>\n);\n```",
  },
  {
    question: "Czym jest przejmowanie renderowania w React?",
    answer:
      "Pojęcie przejmowania renderowania to zdolność kontrolowania tego, co komponent wyświetli od innego komponentu. Oznacza to, że dekorujesz swój komponent, owijając go w komponent wyższego rzędu (HOC). Poprzez owijanie możesz wstrzyknąć dodatkowe właściwości lub wprowadzić inne zmiany, co może zmienić logikę renderowania. Nie powoduje to faktycznego przejmowania, ale używając HOC, sprawiasz, że twój komponent zachowuje się inaczej.",
  },
  {
    question: "Jak przekazywać liczby do komponentu React?",
    answer:
      "Możemy przekazywać liczby jako właściwości do komponentu React za pomocą nawiasów klamrowych {}, podczas gdy ciągi są w podwójnych cudzysłowach \"\" lub pojedynczych apostrofach ''\n\n```javascript\nimport React from 'react';\nconst ChildComponent = ({ name, age }) => {\n  return (\n    <>\n      Mam na imię {name}, a wiek {age}\n    </>\n  );\n};\n\nconst ParentComponent = () => {\n  return (\n    <>\n      <ChildComponent name='Chetan' age={30} />\n    </>\n  );\n};\n\nexport default ParentComponent;\n```",
  },
  {
    question:
      "Czy powinienem trzymać cały stan w Reduxie? Czy powinienem kiedykolwiek używać wewnętrznego stanu Reacta?",
    answer:
      "To zależy od decyzji programisty, czyli od programisty zależy, jakie rodzaje stanu składają się na Twoją aplikację i gdzie powinien znajdować się każdy fragment stanu. Niektórzy użytkownicy wolą trzymać każdy pojedynczy kawałek danych w Reduxie, aby utrzymać w pełni serializowalną i kontrolowaną wersję swojej aplikacji przez cały czas. Inni wolą trzymać nieistotne lub stan UI, takie jak „czy ten dropdown jest obecnie otwarty”, wewnątrz stanu komponentu.",
  },
  {
    question: "Jaki jest cel registerServiceWorker w React?",
    answer:
      "React domyślnie tworzy dla Ciebie service workera bez żadnej konfiguracji. Service worker to interfejs webowy API, który pomaga w cachowaniu zasobów i innych plików, dzięki czemu użytkownik może nadal widzieć wyniki na ekranie, gdy jest offline lub w wolnej sieci. Pomaga to zbudować lepsze doświadczenie użytkownika.",
  },
  {
    question: "Czym jest funkcja React.memo?",
    answer:
      "Komponenty klasowe mogą być ograniczone przed ponownym renderowaniem, gdy ich wejściowe właściwości są takie same za pomocą PureComponent lub shouldComponentUpdate. Teraz możesz to samo zrobić z komponentami funkcyjnymi, owijając je w React.memo.\n\n```javascript\nconst MyComponent = React.memo(function MyComponent(props) {\n  /* renderuje się tylko jeśli zmienią się propsy */\n});\n```",
  },
  {
    question: "Czym jest funkcja React.lazy?",
    answer:
      "Funkcja React.lazy pozwala renderować dynamiczny import jako zwykły komponent. Automatycznie załaduje pakiet zawierający OtherComponent, gdy komponent zostanie wyrenderowany. Funkcja ta musi zwrócić obietnicę, która rozwiązuje się do modułu z domyślnym eksportem zawierającym komponent React.\n\n```javascript\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <OtherComponent />\n    </div>\n  );\n}\n```",
  },
  {
    question: "Jak zapobiegać niepotrzebnym aktualizacjom za pomocą setState?",
    answer:
      "Możesz porównać bieżącą wartość stanu z istniejącą wartością stanu i zdecydować, czy ponownie renderować stronę czy nie. Jeśli wartości są takie same, możesz zwrócić null, aby zatrzymać ponowne renderowanie, w przeciwnym razie zwróć najnowszą wartość stanu.\n\nNa przykład, informacje o profilu użytkownika są renderowane warunkowo, jak poniżej:\n\n```javascript\ngetUserProfile = (user) => {\n  const latestAddress = user.address;\n  this.setState((state) => {\n    if (state.address === latestAddress) {\n      return null;\n    } else {\n      return { title: latestAddress };\n    }\n  });\n};\n```",
  },
  {
    question:
      "Jak renderować tablice, ciągi znaków i liczby w wersji React 16?",
    answer:
      "Tablice: W odróżnieniu od starszych wersji, w React 16 nie musisz upewniać się, że metoda render zwraca pojedynczy element. Możesz zwracać wiele elementów rodzeństwa bez owijania ich w inny element, zwracając tablicę.\n\nNa przykład, przyjmijmy poniższą listę programistów:\n\n```javascript\nconst ReactJSDevs = () => {\n  return [\n    <li key='1'>John</li>,\n    <li key='2'>Jackie</li>,\n    <li key='3'>Jordan</li>,\n  ];\n};\n```",
  },
  {
    question: "Czym są haki?",
    answer:
      "Haki (hooks) to specjalne funkcje języka JavaScript, które pozwalają używać stanu i innych funkcji React bez pisania klasy. Ten wzorzec został wprowadzony jako nowa funkcja w React 16.8 i pomógł w izolacji logiki stanu od komponentów.",
  },
  {
    question: "Jakie zasady należy przestrzegać przy korzystaniu z haków?",
    answer:
      "Aby używać haków, należy przestrzegać dwóch zasad:\n\n1. Wywołuj haki tylko na najwyższym poziomie funkcji Reacta: Zawsze powinieneś używać haków na najwyższym poziomie funkcji Reacta przed jakimikolwiek wczesnymi powrotami. Nie powinieneś wywoływać haków w pętlach, warunkach ani zagnieżdżonych funkcjach. Zapewni to, że haki są wywoływane w tej samej kolejności za każdym razem, gdy komponent renderuje się ponownie, i zachowuje stan haków między wieloma ponownymi renderowaniami z powodu wywołań useState i useEffect.\n\n2. Wywołuj haki tylko z funkcji React: Nie powinieneś wywoływać haków zwykłych funkcji JavaScript lub komponentów klasowych. Zamiast tego powinieneś je wywoływać albo z funkcji komponentów, albo z własnych haków.",
  },
  {
    question: "Jak zapewnić przestrzeganie zasad haków w swoim projekcie?",
    answer:
      'Zespół React wydał plugin ESLint o nazwie eslint-plugin-react-hooks, który narzuca reguły haków. Jest to część API haków. Możesz dodać ten plugin do swojego projektu za pomocą poniższej komendy:\n\n```bash\nnpm install eslint-plugin-react-hooks --save-dev\n```\n\nA następnie zastosuj poniższą konfigurację w pliku konfiguracyjnym ESLint:\n\n```json\n// Twoja konfiguracja ESLint\n{\n  "plugins": [\n    // ...\n    "react-hooks"\n  ],\n  "rules": {\n    // ...\n    "react-hooks/rules-of-hooks": "error"\n  }\n}\n```\n\nZalecana konfiguracja eslint-config-react-app już zawiera reguły haków tego pluginu.',
  },
  {
    question: "Jakie są różnice między Flux a Reduxem?",
    answer:
      "Poniżej znajdują się główne różnice między Fluxem a Reduxem:\n\nFlux\tRedux\nStan jest zmienny\tStan jest niezmienny\nMagazyn zawiera zarówno stan, jak i logikę zmian\tMagazyn i logika zmian są oddzielne\nIstnieje wiele magazynów\tIstnieje tylko jeden magazyn\nWszystkie magazyny są odłączone i płaskie\tJeden magazyn z hierarchicznymi reducerami\nMa singleton dispatcher\tNie ma koncepcji dispatcher\nKomponenty React subskrybują magazyn\tKomponenty kontenerów używają funkcji connect",
  },
  {
    question: "Jakie są korzyści z użycia React Router V4?",
    answer:
      "Poniżej znajdują się główne korzyści z modułu React Router V4:\n\nW React Router v4 (wersja 4), API opiera się wyłącznie na komponentach. Router może być zobrazowany jako pojedynczy komponent (<BrowserRouter>), który zawiera określone komponenty podrzędne routera (<Route>).\nNie musisz ręcznie ustawiać historii. Moduł routera będzie zarządzał historią, owijając trasy komponentami <BrowserRouter>.\nRozmiar aplikacji jest zmniejszany przez dodanie tylko określonego modułu routera (Web, core lub native).",
  },
  {
    question:
      "Czy możesz opisać sygnaturę metody cyklu życia componentDidCatch?",
    answer:
      "Metoda cyklu życia componentDidCatch jest wywoływana po tym, jak błąd został zgłoszony przez komponent potomny. Metoda ta otrzymuje dwa parametry:\n\nerror: - Obiekt błędu, który został zgłoszony\ninfo: - Obiekt z kluczem componentStack zawierający informacje o tym, który komponent zgłosił błąd.\nStruktura metody wyglądałaby tak:\n\n```javascript\ncomponentDidCatch(error, info);\n```",
  },
  {
    question: "W jakich scenariuszach granice błędów nie przechwytują błędów?",
    answer:
      "Poniżej znajdują się przypadki, w których granice błędów nie działają:\n\nWewnątrz obsług zdarzeń\nKod asynchroniczny za pomocą wywołań zwrotnych setTimeout lub requestAnimationFrame\nPodczas renderowania po stronie serwera\nKiedy błędy są zgłaszane w kodzie granicy błędów samym w sobie",
  },
  {
    question: "Jaki jest zachowanie nieprzechwyconych błędów w React 16?",
    answer:
      "W React 16 błędy, które nie zostały przechwycone przez żadną granicę błędów, skutkują odłączeniem całego drzewa komponentów React. Powodem tej decyzji jest to, że gorsze jest pozostawienie uszkodzonego interfejsu użytkownika niż całkowite jego usunięcie. Na przykład gorzej jest dla aplikacji płatności wyświetlać nieprawidłową kwotę niż w ogóle nic nie renderować.",
  },
  {
    question: "Jaki jest odpowiedni miejsc na granice błędów?",
    answer:
      "Rozdrobnienie użycia granic błędów zależy od potrzeb projektowych programisty. Możesz postępować zgodnie z jednym z tych podejść:\n\nMożesz owinąć komponenty szlaków najwyższego poziomu, aby wyświetlić ogólne komunikaty o błędach dla całej aplikacji.\nMożesz również owinąć poszczególne komponenty w granice błędów, aby chronić je przed awarią reszty aplikacji.",
  },
  {
    question:
      "Jaka jest korzyść z wyświetlania śladu stosu komponentu z granicą błędu?",
    answer:
      "Oprócz komunikatów o błędach i stosu JavaScript, React 16 wyświetli ślad stosu komponentu z nazwami plików i numerami wierszy za pomocą koncepcji granicy błędu.",
  },
  {
    question: "Co to są domyślne właściwości (default props)?",
    answer:
      "defaultProps mogą być zdefiniowane jako właściwość komponentu w celu ustawienia domyślnych wartości dla propsów. Te domyślne propsy są używane, gdy nie są dostarczone propsy (tj. propsy są undefined), ale nie dla null propsów.",
  },
  {
    question: "Jaki jest cel właściwości klasy displayName?",
    answer:
      "String displayName jest używany w wiadomościach debugowania. Zazwyczaj nie trzeba go ustawiać jawnie, ponieważ jest on wywnioskowany z nazwy funkcji lub klasy definiującej komponent. Można go ustawić jawnie, jeśli chcesz wyświetlić inną nazwę dla celów debugowania lub gdy tworzysz komponent wyższego rzędu.",
  },
  {
    question: "Jakie jest wsparcie przeglądarki dla aplikacji React?",
    answer:
      "React obsługuje wszystkie popularne przeglądarki, w tym Internet Explorer 9 i nowsze, chociaż wymagane są niektóre polifilmy dla starszych przeglądarek, takich jak IE 9 i IE 10. Jeśli używasz polifilów es5-shim i es5-sham, obsługujesz nawet stare przeglądarki, które nie obsługują metod ES5.",
  },
  {
    question: "Co to jest dzielenie kodu (code-splitting)?",
    answer:
      "Dzielenie kodu (code-splitting) to funkcja obsługiwana przez bundlery takie jak Webpack i Browserify, które mogą tworzyć wiele bundli, które mogą być dynamicznie ładowane w czasie działania. Projekt React obsługuje dzielenie kodu za pomocą funkcji dynamicznego importowania ().",
  },
  {
    question: "Co to są Fragmenty z kluczami (Keyed Fragments)?",
    answer:
      "Fragmenty deklarowane za pomocą jawnego składni <React.Fragment> mogą mieć klucze. Ogólny przypadek użycia to mapowanie kolekcji na tablicę fragmentów.",
  },
  {
    question: "Czy React obsługuje wszystkie atrybuty HTML?",
    answer:
      "Od wersji React 16, są w pełni obsługiwane zarówno standardowe, jak i niestandardowe atrybuty DOM. React stosuje konwencję camelCase, podobnie jak w przypadku interfejsów DOM.",
  },
  {
    question: "Kiedy właściwości komponentu domyślnie przyjmują wartość true?",
    answer:
      "Jeśli nie przekazano wartości dla danej właściwości, domyślnie przyjmuje ona wartość true. Nie jest zalecane korzystanie z tego podejścia, ponieważ może być mylące w połączeniu z obiektową składnią ES6.",
  },
  {
    question: "Co to jest NextJS i jakie są jego główne cechy?",
    answer:
      "Next.js to popularny i lekki framework do tworzenia aplikacji statycznych i renderowanych po stronie serwera zbudowanych z React. Oferuje także rozwiązania do stylizacji i routingu. Główne cechy NextJS to renderowanie po stronie serwera, automatyczne dzielenie kodu, proste routowanie po stronie klienta, wsparcie dla HMR oraz możliwość implementacji z użyciem Express lub dowolnego innego serwera HTTP w Node.js.",
  },
  {
    question: "Jak przekazać obsługę zdarzeń do komponentu?",
    answer:
      "Obsługę zdarzeń i inne funkcje można przekazywać jako propsy do komponentów potomnych. Funkcje można przekazywać do komponentu potomnego w ten sposób.",
  },
  {
    question: "Jak zapobiec wielokrotnemu wywołaniu funkcji?",
    answer:
      "Jeśli używasz obsługi zdarzeń, takiej jak onClick lub onScroll, i chcesz zapobiec zbyt szybkiemu wywołaniu zwrotu, możesz ograniczyć częstotliwość, z jaką jest wywoływany zwrot. Można to osiągnąć na kilka sposobów.",
  },
  {
    question: "Jak JSX zapobiega atakom typu injection?",
    answer:
      "React DOM unika wstrzykiwania wartości osadzonych w JSX przed ich renderowaniem. Zapewnia to, że nigdy nie można wstrzyknąć niczego, co nie zostało wyraźnie zapisane w aplikacji.",
  },
  {
    question: "Jak zaktualizować wyrenderowane elementy?",
    answer:
      "Możesz zaktualizować interfejs użytkownika (reprezentowany przez wyrenderowany element), przekazując nowo utworzony element do metody render ReactDOM.",
  },
  {
    question: "Jak powiedzieć, że właściwości są tylko do odczytu?",
    answer:
      "Gdy deklarujesz komponent jako funkcję lub klasę, nigdy nie powinien on modyfikować swoich własnych właściwości. React ma zasadę mówiącą, że „Wszystkie komponenty React muszą działać jak czyste funkcje względem swoich właściwości”.",
  },
  {
    question: "Jakie są warunki bezpiecznego użycia indeksu jako klucza?",
    answer:
      "Istnieją trzy warunki, aby upewnić się, że bezpiecznie można używać indeksu jako klucza.",
  },
  {
    question: "Czy klucze powinny być globalnie unikalne?",
    answer:
      "Klucze używane w tablicach powinny być unikalne wśród swoich rodzeństwa, ale nie muszą być globalnie unikalne. Można użyć tych samych kluczy w dwóch różnych tablicach.",
  },
  {
    question: "Jaki jest popularny wybór do obsługi formularzy?",
    answer:
      "Formik to biblioteka formularzy dla React, która zapewnia rozwiązania takie jak walidacja, śledzenie odwiedzonych pól i obsługa przekazywania formularza.",
  },
  {
    question: "Jakie są zalety Formik w porównaniu z biblioteką Redux Form?",
    answer:
      "Poniżej przedstawiamy główne powody, dla których warto zalecać Formik w porównaniu z biblioteką Redux Form: 1. Stan formularza jest z natury krótkoterminowy i lokalny, dlatego śledzenie go w Reduxie (lub jakiejkolwiek innej bibliotece Flux) jest zbędne. 2. Redux-Form wywołuje cały reducer Reduxa na każdy pojedynczy klawisz. 3. Biblioteka Redux-Form zajmuje 22,5 kB skompresowane, podczas gdy Formik zajmuje 12,7 kB.",
  },
  {
    question: "Dlaczego nie jest wymagane używanie dziedziczenia?",
    answer:
      "W React zaleca się stosowanie kompozycji zamiast dziedziczenia w celu ponownego użycia kodu między komponentami. Zarówno Propsy, jak i kompozycja dają ci wszelką elastyczność, którą potrzebujesz, aby dostosować wygląd i zachowanie komponentu. Natomiast jeśli chcesz ponownie użyć funkcjonalności spoza interfejsu użytkownika między komponentami, zaleca się wyodrębnienie jej do osobnego modułu JavaScript. Późniejsze komponenty importują go i używają tej funkcji, obiektu lub klasy bez rozszerzania go.",
  },
  {
    question: "Czy mogę użyć komponentów webowych w aplikacji React?",
    answer:
      "Tak, można używać komponentów webowych w aplikacji React. Chociaż wielu deweloperów nie będzie używać tej kombinacji, może to być konieczne, szczególnie jeśli korzystasz z komponentów interfejsu użytkownika osób trzecich napisanych przy użyciu komponentów webowych.",
  },
  {
    question: "Co to jest dynamiczne importowanie?",
    answer:
      "Możesz osiągnąć dzielenie kodu w swojej aplikacji za pomocą dynamicznego importowania.",
  },
  {
    question: "Co to są komponenty ładujące?",
    answer:
      "Z wydaniem React 18, React.lazy i Suspense są teraz dostępne do renderowania po stronie serwera. Jednak przed wydaniem React 18 zalecano stosowanie komponentów ładujących do dzielenia kodu w aplikacji renderowanej po stronie serwera, ponieważ React.lazy i Suspense nie były dostępne do renderowania po stronie serwera.",
  },
  {
    question: "Co to jest komponent suspense?",
    answer:
      "Jeśli moduł zawierający dynamiczne importowanie nie został jeszcze załadowany w chwili renderowania komponentu nadrzędnego, należy wyświetlić jakiś zawartość tymczasową, czekając na jego załadowanie za pomocą komponentu Suspense.",
  },
  {
    question: "Co to jest dzielenie kodu na podstawie tras?",
    answer:
      "Jedno z najlepszych miejsc do dzielenia kodu to trasy. Cała strona zostanie ponownie wyrenderowana naraz, więc użytkownicy nie będą prawdopodobnie oddziaływać na inne elementy na stronie w tym samym czasie.",
  },
  {
    question: "Jaki jest cel wartości domyślnej w kontekście?",
    answer:
      "Argument defaultValue jest używany tylko wtedy, gdy komponent nie ma pasującego dostawcy powyżej w drzewie. Może to być pomocne przy testowaniu komponentów w izolacji, bez ich opakowywania.",
  },
  {
    question: "Co to jest algorytm różnicujący?",
    answer:
      "React musi używać algorytmów, aby dowiedzieć się, jak efektywnie zaktualizować interfejs użytkownika, aby pasował do najnowszego drzewa. Algorytmy różnicujące generują minimalną liczbę operacji potrzebnych do przekształcenia jednego drzewa w drugie.",
  },
  {
    question: "Jakie są reguły pokrywane przez algorytm różnicujący?",
    answer:
      "Podczas różnicowania dwóch drzew React najpierw porównuje dwa elementy korzeniowe. Zachowanie różni się w zależności od rodzajów elementów korzeniowych.",
  },
  {
    question: "Kiedy należy użyć refs?",
    answer: "Istnieje kilka przypadków użycia refs.",
  },
  {
    question: "Czy prop musi być nazwany jako render w przypadku render props?",
    answer:
      "Chociaż wzorzec nazywa się render props, nie musisz używać propa o nazwie render, aby użyć tego wzorca. Każdy prop, który jest funkcją, którą komponent używa do określenia, co renderować, jest technicznie „propem renderowym”.",
  },
  {
    question:
      "Jakie są problemy z używaniem render props w czystych komponentach?",
    answer:
      "Jeśli tworzysz funkcję wewnątrz metody render, neguje to cel czystego komponentu. Ponieważ płytkie porównanie prop zawsze zwraca false dla nowych propsów, każde renderowanie w tym przypadku generuje nową wartość dla render propa.",
  },
  {
    question: "Co to jest technika okienkowania?",
    answer:
      "Okienkowanie to technika, która renderuje tylko mały podzbiór twoich wierszy w danym momencie i może znacząco zmniejszyć czas potrzebny na ponowne renderowanie komponentów oraz liczbę utworzonych węzłów DOM.",
  },
  {
    question: "Jak wydrukować fałszywe wartości w JSX?",
    answer:
      "Fałszywe wartości, takie jak false, null, undefined i true, są prawidłowymi dziećmi, ale nie renderują niczego. Jeśli nadal chcesz je wyświetlić, musisz je przekonwertować na łańcuch.",
  },
  {
    question: "Jaki jest typowy przypadek użycia portali?",
    answer:
      "Portale React są bardzo przydatne, gdy komponent nadrzędny ma overflow: hidden lub ma właściwości, które wpływają na kontekst układu (np. z-index, position, opacity) i musisz wizualnie „wyjść” z jego kontenera.",
  },
  {
    question: "Jak ustawić domyślną wartość dla niekontrolowanego komponentu?",
    answer:
      "W React wartość atrybutu na elementach formularza zastąpi wartość w DOM-ie. W przypadku niekontrolowanego komponentu możesz chcieć, aby React określił wartość początkową, ale pozostawił kolejne aktualizacje niekontrolowane. Aby obsłużyć ten przypadek, możesz użyć atrybutu defaultValue zamiast value.",
  },
  {
    question: "Jaki jest Twój ulubiony stos technologiczny w React?",
    answer:
      "Choć stos technologiczny może się różnić w zależności od programisty, najbardziej popularny stos jest używany w kodzie projektowym boilerplate React. Głównie wykorzystuje Redux i redux-saga do zarządzania stanem i efektami ubocznymi asynchronicznymi, react-router do celów routingu, styled-components do stylizacji komponentów React, axios do wywoływania interfejsu REST api oraz inne obsługiwane narzędzia takie jak webpack, reselect, ESNext, Babel. Możesz sklonować projekt ze strony https://github.com/react-boilerplate/react-boilerplate i rozpocząć pracę nad dowolnym nowym projektem w React.",
  },
  {
    question: "Jaka jest różnica między prawdziwym DOM a wirtualnym DOM-em?",
    answer:
      "Poniżej przedstawiamy główne różnice między prawdziwym DOM-em a wirtualnym DOM-em: 1. Aktualizacje są wolne dla prawdziwego DOM-u, ale szybkie dla wirtualnego DOM-u. 2. Manipulacja DOM-em jest bardzo kosztowna, podczas gdy manipulacja DOM-em jest bardzo łatwa. 3. Można aktualizować HTML bezpośrednio dla prawdziwego DOM-u, ale nie można bezpośrednio aktualizować HTML dla wirtualnego DOM-u. 4. Prowadzi to do zbyt dużego marnowania pamięci dla prawdziwego DOM-u, podczas gdy nie ma marnowania pamięci dla wirtualnego DOM-u. 5. Tworzy nowy DOM, jeśli element jest aktualizowany dla prawdziwego DOM-u, ale aktualizuje JSX, jeśli element jest aktualizowany dla wirtualnego DOM-u.",
  },
  {
    question: "Jak dodać Bootstrap do aplikacji React?",
    answer:
      "Bootstrap można dodać do aplikacji React na trzy możliwe sposoby: 1. Korzystając z Bootstrap CDN: Jest to najprostszy sposób na dodanie Bootstrap. Dodaj zarówno arkusze CSS, jak i zasoby JS do tagu head. 2. Bootstrap jako zależność: Jeśli korzystasz z narzędzia do budowy lub pakietu modułów takiego jak Webpack, to jest preferowany sposób dodawania Bootstrap do aplikacji React. 3. Pakiet React Bootstrap: W tym przypadku Bootstrap można dodać do aplikacji React, korzystając z pakietu, który przebudowuje komponenty Bootstrapa tak, aby działały szczególnie jako komponenty React. Poniższe pakiety są popularne w tej kategorii: - react-bootstrap - reactstrap",
  },
  {
    question:
      "Czy możesz wymienić najlepsze strony internetowe lub aplikacje korzystające z React jako frameworku front-endowego?",
    answer:
      "Oto 10 najlepszych stron internetowych korzystających z React jako ich frameworku front-endowego: 1. Facebook 2. Uber 3. Instagram 4. WhatsApp 5. Khan Academy 6. Airbnb 7. Dropbox 8. Flipboard 9. Netflix 10. PayPal",
  },
  {
    question: "Czy zaleca się stosowanie techniki CSS In JS w React?",
    answer:
      "React nie ma żadnego zdania na temat tego, w jaki sposób style są definiowane, ale jeśli jesteś początkującym, dobrym punktem wyjścia jest zdefiniowanie styli w osobnym pliku *.css, jak zwykle, i odniesienie się do nich za pomocą className. Ta funkcjonalność nie jest częścią Reacta, ale pochodzi z bibliotek osób trzecich. Ale jeśli chcesz wypróbować inne podejście (CSS-In-JS), to biblioteka styled-components jest dobrym wyborem.",
  },
  {
    question:
      "Czy muszę przepisać wszystkie moje komponenty klasowe na haki (hooks)?",
    answer:
      "Nie. Ale możesz wypróbować haki (hooks) w kilku komponentach (lub nowych komponentach) bez przepisywania istniejącego kodu. Ponieważ nie ma planów usuwania klas w ReactJS.",
  },
  {
    question: "Jak pobrać dane za pomocą haka (hooks) w React?",
    answer:
      "Hak efektu o nazwie useEffect może być używany do pobierania danych z interfejsu API i ustawiania danych w lokalnym stanie komponentu za pomocą funkcji aktualizacji hooka useState.",
  },
  {
    question: "Czy haki (hooks) obejmują wszystkie przypadki użycia klas?",
    answer:
      "Haki (hooks) nie obejmują wszystkich przypadków użycia klas, ale istnieje plan dodania ich wkrótce. Obecnie nie ma odpowiedników haków (hooks) do rzadkich cykli życia getSnapshotBeforeUpdate i componentDidCatch.",
  },
  {
    question: "Jaka jest stabilna wersja obsługi haków (hooks)?",
    answer:
      "React zawiera stabilną implementację haków (hooks) w wersji 16.8 dla poniższych pakietów: - React DOM - React DOM Server - React Test Renderer - React Shallow Renderer",
  },
  {
    question:
      "Dlaczego używamy destrukturyzacji tablicy (notacji kwadratowej) w useState?",
    answer:
      "Kiedy deklarujemy zmienną stanu za pomocą useState, zwraca ona parę — tablicę z dwoma elementami. Pierwszy element to bieżąca wartość, a drugi to funkcja aktualizacji wartości. Użycie [0] i [1] do dostępu do nich jest trochę mylące, ponieważ mają one określone znaczenie. Dlatego używamy zamiast tego destrukturyzacji tablicy.",
  },
  {
    question: "Z jakich źródeł korzystano przy wprowadzaniu haków (hooks)?",
    answer:
      "Haki (hooks) czerpią pomysły z kilku różnych źródeł. Oto niektóre z nich: - Poprzednie eksperymenty z funkcjonalnymi interfejsami API w repozytorium react-future - Eksperymenty społeczności z interfejsami API opartymi na render prop, takimi jak Reactions Component - Zmienne stanu i komórki stanu w DisplayScript. - Subskrypcje w Rx - Składniki Reducera w ReasonReact",
  },
  {
    question:
      "Jak uzyskać dostęp do imperatywnego interfejsu API komponentów webowych?",
    answer:
      "Komponenty internetowe często udostępniają imperatywny interfejs API do implementacji swoich funkcji. Aby uzyskać dostęp do imperatywnego interfejsu API komponentu internetowego, należy użyć refa do bezpośredniego interakcji z węzłem DOM. Jeśli jednak korzystasz z komponentów internetowych osób trzecich, najlepszym rozwiązaniem jest napisanie komponentu Reacta, który zachowuje się jak opakowanie dla Twojego komponentu internetowego.",
  },
  {
    question: "Co to jest Formik?",
    answer:
      "Formik to mała biblioteka formularzy React, która pomaga w rozwiązywaniu trzech głównych problemów: - Pobieranie wartości do i z stanu formularza - Walidacja i komunikaty o błędach - Obsługa wysyłania formularza",
  },
  {
    question:
      "Jakie są typowe wybory middleware do obsługi asynchronicznych wywołań w Reduxie?",
    answer:
      "Niektóre z popularnych wyborów middleware do obsługi asynchronicznych wywołań w ekosystemie Redux to Redux Thunk, Redux Promise, Redux Saga.",
  },
  {
    question: "Czy przeglądarki rozumieją kod JSX?",
    answer:
      "Nie, przeglądarki nie mogą zrozumieć kodu JSX. Potrzebny jest transpilator do przekształcenia JSX na zwykły JavaScript, który przeglądarki mogą zrozumieć. Obecnie najczęściej używanym transpilatorem jest Babel.",
  },
  {
    question: "Opisz przepływ danych w React?",
    answer:
      "React implementuje jednokierunkowy reaktywny przepływ danych za pomocą props, co zmniejsza powtarzalność i jest łatwiejsze do zrozumienia niż tradycyjne dwukierunkowe wiązanie danych.",
  },
  {
    question: "Czym jest MobX?",
    answer:
      "MobX to proste, skalowalne i przetestowane rozwiązanie do zarządzania stanem aplikacji przy użyciu funkcyjnego programowania reaktywnego (TFRP). Dla aplikacji w ReactJs, musisz zainstalować poniższe paczki, npm install mobx --save npm install mobx-react --save",
  },
  {
    question: "Jakie są różnice między Redux a MobX?",
    answer:
      "Poniżej znajdują się główne różnice między Redux a MobX, Definicja Jest to biblioteka języka JavaScript do zarządzania stanem aplikacji Jest to biblioteka do reaktywnego zarządzania stanem Twoich aplikacji. Programowanie Głównie napisany w ES6 Napisany w JavaScript (ES5) Magazyn danych Istnieje tylko jeden duży magazyn danych Istnieje więcej niż jeden magazyn do przechowywania Użycie Głównie używane do dużych i złożonych aplikacji Używane do prostych aplikacji Wydajność Potrzeba poprawy Zapewnia lepszą wydajność Sposób przechowywania Używa obiektu JS do przechowywania Używa obserwacji do przechowywania danych",
  },
  {
    question: "Czy powinienem nauczyć się ES6 przed nauką ReactJS?",
    answer:
      "Nie, nie musisz uczyć się es2015/es6, aby nauczyć się react. Ale możesz znaleźć wiele zasobów lub ekosystemu React używających ES6 obszernie. Zobaczmy niektóre często używane funkcje ES6, Destrukturyzacja: Aby uzyskać propsy i użyć ich w komponencie // w es 5 var someData = this.props.someData; var dispatch = this.props.dispatch; // w es6 const { someData, dispatch } = this.props; Operator spread: Pomaga przekazywać propsy do komponentu // w es 5 <SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} /> // w es6 <SomeComponent {...this.props} /> Funkcje strzałkowe: Tworzy zwięzłą składnię // es 5 var users = usersList.map(function (user) { return <li>{user.name}</li>; }); // es 6 const users = usersList.map((user) => <li>{user.name}</li>);",
  },
  {
    question: "Czym jest Równoległe Renderowanie?",
    answer:
      "Równoległe renderowanie sprawia, że aplikacje React są bardziej responsywne poprzez renderowanie drzew komponentów bez blokowania głównego wątku interfejsu użytkownika. Pozwala Reactowi przerwać długo działający proces renderowania, aby obsłużyć zdarzenie o wysokim priorytecie. tj. Gdy włączysz tryb równoległy, React będzie śledził inne zadania, które trzeba wykonać, i jeśli coś ma wyższy priorytet, wstrzyma to, co obecnie renderuje, i pozwoli innemu zadaniu najpierw się zakończyć. Możesz to włączyć na dwa sposoby, // 1. Część aplikacji przez owinięcie w ConcurrentMode <React.unstable_ConcurrentMode> <Something /> </React.unstable_ConcurrentMode>; // 2. Cała aplikacja za pomocą createRoot ReactDOM.unstable_createRoot(domNode).render(<App />);",
  },
  {
    question:
      "Jaka jest różnica między trybem asynchronicznym a trybem równoległym?",
    answer:
      "Oba odnoszą się do tego samego. Wcześniej Tryb równoległy był określany przez zespół React jako „Tryb asynchroniczny”. Nazwa została zmieniona, aby podkreślić zdolność Reacta do wykonywania pracy na różnych poziomach priorytetu. Unika to zamieszania z innymi podejściami do Asynchronicznego Renderowania.",
  },
  {
    question: "Czy mogę używać adresów URL w języku JavaScript w react16.9?",
    answer:
      "Tak, możesz używać adresów URL w języku JavaScript, ale spowoduje to zapisanie ostrzeżenia w konsoli. Ponieważ adresy URL rozpoczynające się od javascript: są niebezpieczne, dodając nieoczyszczone dane wyjściowe w tagu jak <a href> i tworzą lukę w bezpieczeństwie. const companyProfile = { website: \"javascript: alert('Twoja witryna została zhakowana')\", }; // To zapisze ostrzeżenie <a href={companyProfile.website}> Więcej szczegółów </a>; Pamiętaj, że przyszłe wersje będą zgłaszać błąd dla adresów URL w języku JavaScript.",
  },
  {
    question: "Jaki jest cel wtyczki eslint dla haków?",
    answer:
      "Wtyczka ESLint narzuca zasady dotyczące Haków, aby uniknąć błędów. Zakłada, że ​​każda funkcja zaczynająca się od „use” i wielkiej litery bezpośrednio po niej jest Hakiem. W szczególności reguła narzuca, że, Wywołania Haka są albo wewnątrz funkcji PascalCase (przyjętej za komponent) albo innej funkcji useSomething (przyjętej za niestandardowy Hak). Haki są wywoływane w tej samej kolejności podczas każdego renderowania.",
  },
  {
    question: "Jaka jest różnica między imperatywnym a deklaratywnym w React?",
    answer:
      "Wyobraź sobie prosty komponent interfejsu użytkownika, takie jak przycisk „Lubię”. Po jego naciśnięciu staje się niebieski, jeśli wcześniej był szary, i szary, jeśli wcześniej był niebieski. Imperatywny sposób robienia tego byłby: if (user.likes()) { if (hasBlue()) { removeBlue(); addGrey(); } else { removeGrey(); addBlue(); } } W zasadzie musisz sprawdzić, co jest obecnie na ekranie i obsłużyć wszystkie konieczne zmiany, aby narysować go ponownie w bieżącym stanie, w tym cofanie zmian z poprzedniego stanu. Możesz sobie wyobrazić, jak skomplikowane to może być w prawdziwej sytuacji. W przeciwieństwie do tego, deklaratywny podejście byłoby: if (this.state.liked) { return <blueLike />; } else { return <greyLike />; } Ponieważ podejście deklaratywne oddziela zagadnienia, ta jego część musi tylko obsługiwać, jak powinien wyglądać interfejs użytkownika w określonym stanie, i dlatego jest znacznie prostsze do zrozumienia.",
  },
  {
    question: "Jakie są korzyści z korzystania z TypeScript z ReactJS?",
    answer:
      "Poniżej znajdują się niektóre korzyści płynące z korzystania z TypeScript z Reactjs, Możliwe jest korzystanie z najnowszych funkcji języka JavaScript Użycie interfejsów do złożonych definicji typów Edytory takie jak VS Code zostały stworzone dla TypeScriptu Unikanie błędów z łatwością odczytu i walidacji",
  },
  {
    question:
      "Jak zagwarantować, że użytkownik pozostaje uwierzytelniony po odświeżeniu strony przy użyciu zarządzania stanem Context API?",
    answer:
      'Gdy użytkownik się loguje i odświeża stronę, aby zachować stan zazwyczaj dodajemy akcję wczytywania użytkownika w hookach useEffect w głównym App.js. Podczas korzystania z Redux, akcję wczytywania użytkownika można łatwo uzyskać. App.js import { loadUser } from "../actions/auth"; store.dispatch(loadUser()); Ale korzystając z Context API, aby uzyskać dostęp do kontekstu w App.js, oplataj AuthState w index.js, aby App.js mógł uzyskać dostęp do kontekstu autoryzacji. Teraz za każdym razem, gdy strona jest odświeżana, bez względu na to, na jakim jesteś, użytkownik zostanie uwierzytelniony, ponieważ akcja loadUser zostanie wywołana przy każdym ponownym renderowaniu. index.js import React from "react"; import ReactDOM from "react-dom"; import App from "./App"; import AuthState from "./context/auth/AuthState"; ReactDOM.render( <React.StrictMode> <AuthState> <App /> </AuthState> </React.StrictMode>, document.getElementById("root") ); App.js const authContext = useContext(AuthContext); const { loadUser } = authContext; useEffect(() => { loadUser(); }, []); loadUser const loadUser = async () => { const token = sessionStorage.getItem("token"); if (!token) { dispatch({ type: ERROR, }); } setAuthToken(token); try { const res = await axios("/api/auth"); dispatch({ type: USER_LOADED, payload: res.data.data, }); } catch (err) { console.error(err); } };',
  },
  {
    question: "Jakie są korzyści nowej transformacji JSX?",
    answer:
      "Istnieją trzy główne korzyści z nowej transformacji JSX, Możliwe jest korzystanie z JSX bez importowania pakietów Reacta Skompilowany wynik może poprawić rozmiar paczki w niewielkim stopniu Przyszłe ulepszenia zapewniają elastyczność w celu zmniejszenia liczby pojęć do nauki React.",
  },
  {
    question: "Jak nowa transformacja JSX różni się od starej transformacji??",
    answer:
      'Nowa transformacja JSX nie wymaga, aby React był w zasięgu. Innymi słowy, nie musisz importować pakietu Reacta dla prostych scenariuszy. Przyjmijmy przykład, aby zobaczyć główne różnice między starą a nową transformacją, Stara transformacja: import React from "react"; function App() { return <h1>Good morning!!</h1>; } Teraz transformacja JSX przekształca powyższy kod na zwykły JavaScript, jak poniżej, import React from "react"; function App() { return React.createElement("h1", null, "Good morning!!"); } Nowa transformacja: Nowa transformacja JSX nie wymaga żadnych importów Reacta function App() { return <h1>Good morning!!</h1>; } Pod spodem transformacja JSX kompiluje do poniższego kodu import { jsx as _jsx } from "react/jsx-runtime"; function App() { return _jsx("h1", { children: "Good morning!!" }); } Uwaga: Nadal musisz importować Reacta, aby używać Haków.',
  },
  {
    question: "Czym są Komponenty Serwerowe React?",
    answer:
      "Komponent React Server to sposób na napisanie komponentu React, który jest renderowany po stronie serwera w celu poprawy wydajności aplikacji React. Te komponenty pozwalają nam ładować komponenty z backendu. Uwaga: Komponenty serwerowe React są wciąż w trakcie rozwoju i jeszcze nie są zalecane do użytku w produkcji.",
  },
  {
    question: "Czym jest przekazywanie propsów?",
    answer:
      "Przekazywanie propsów to proces, w którym przekazujesz dane z jednego komponentu drzewa komponentów React do innego, przechodząc przez inne komponenty, które nie potrzebują danych, ale tylko pomagają je przekazywać dalej.",
  },
  {
    question: "Jaka jest różnica między hakiem useState a useRef?",
    answer:
      "useState powoduje ponowne renderowanie komponentów po aktualizacji stanu, podczas gdy useRef nie powoduje ponownego renderowania komponentu po zmianie wartości lub stanu. W zasadzie useRef jest jak „pudełko”, które może przechowywać zmienną mutowalną w swojej właściwości (.current). useState pozwala nam aktualizować stan wewnątrz komponentów. Natomiast useRef pozwala odnosić się do elementów DOM.",
  },
  {
    question: "Czym jest komponent opakowujący?",
    answer:
      'Opakowanie w React to komponent, który otacza inny komponent lub grupę komponentów. Może być używany do różnych celów, takich jak dodawanie dodatkowej funkcjonalności, stylizacji lub układu do opakowanych komponentów. Na przykład, rozważ prosty komponent wyświetlający wiadomość: const Message = ({ text }) => { return <p>{text}</p>; }; Możemy utworzyć komponent opakowujący, który doda obramowanie do komponentu wiadomości: const MessageWrapper = (props) => { return ( <div style={{ border: "1px solid black" }}> <Message {...props} /> </div> ); }; Teraz możemy używać komponentu MessageWrapper zamiast komponentu Message, a wiadomość będzie wyświetlana z obramowaniem: <MessageWrapper text="Hello World" /> Komponent opakowujący może również przyjmować własne propsy i przekazywać je do opakowanego komponentu, na przykład możemy utworzyć komponent opakowujący, który doda tytuł do komponentu wiadomości: const MessageWrapperWithTitle = ({title, ...props}) => { return ( <div> <h3>{title}</h3> <Message {...props} /> </div> ); }; Teraz możemy używać komponentu MessageWrapperWithTitle i przekazać propsy tytułu: <MessageWrapperWithTitle title="My Message" text="Hello World" /> W ten sposób komponent opakowujący może dodawać dodatkową funkcjonalność, stylizację lub układ do opakowanego komponentu, zachowując jednocześnie prostotę i ponowne wykorzystywalność opakowanego komponentu.',
  },
  {
    question: "Jakie są różnice między hakami useEffect a useLayoutEffect?",
    answer:
      "useEffect i useLayoutEffect są oba hakami React, które można użyć do synchronizacji komponentu z systemem zewnętrznym, takim jak interfejs przeglądarki lub biblioteka stron trzecich. Jednak istnieją pewne różnice między nimi: Czasowanie: useEffect uruchamia się po tym, jak przeglądarka zakończyła malowanie, podczas gdy useLayoutEffect uruchamia się synchronicznie przed malowaniem przeglądarki. Oznacza to, że useLayoutEffect może być używany do pomiaru i aktualizacji układu w sposób bardziej synchroniczny dla użytkownika. Malowanie przeglądarki: useEffect pozwala przeglądarce na namalowanie zmian przed uruchomieniem efektu, dlatego może to powodować pewne migotanie wizualne. useLayoutEffect synchronicznie uruchamia efekt przed malowaniem przeglądarki i dlatego uniknie to migotania wizualnego. Kolejność wykonania: Kolejność, w jakiej są wykonywane różne haki useEffect, jest określana przez Reacta i może nie być przewidywalna. Jednak kolejność wykonywania wielu haków useLayoutEffect jest określana przez kolejność, w jakiej zostały one wywołane. Obsługa błędów: useEffect ma wbudowany mechanizm obsługi błędów, które występują podczas wykonywania efektu, aby nie powodowały one awarii całej aplikacji. useLayoutEffect nie ma tego mechanizmu, a błędy, które występują podczas wykonywania efektu, spowodują awarię całej aplikacji. Ogólnie rzecz biorąc, zaleca się jak najczęstsze korzystanie z useEffect, ponieważ jest bardziej wydajny i mniej podatny na błędy. useLayoutEffect powinien być używany tylko wtedy, gdy musisz modyfikować układ w sposób synchroniczny z malowaniem przeglądarki, co zwykle nie jest konieczne w większości aplikacji React.",
  },
  {
    question: "Czym jest MobX?",
    answer:
      "MobX to proste, skalowalne i przetestowane w boju rozwiązanie do zarządzania stanem, stosujące funkcjonalne programowanie reaktywne (TFRP). Dla aplikacji ReactJs musisz zainstalować poniższe pakiety:",
  },
  {
    question: "Jakie są różnice między Redux a MobX?",
    answer: "Poniżej przedstawione są główne różnice między Redux a MobX:",
  },
  {
    question: "Czy powinienem nauczyć się ES6 przed nauką ReactJS?",
    answer:
      "Nie, nie musisz uczyć się es2015/es6, aby nauczyć się React. Ale możesz znaleźć wiele zasobów lub ekosystem React, które szeroko wykorzystują ES6.",
  },
  {
    question: "Co to jest renderowanie równoczesne?",
    answer:
      "Renderowanie równoczesne sprawia, że aplikacje React są bardziej responsywne poprzez renderowanie drzew komponentów bez blokowania głównego wątku interfejsu użytkownika. ",
  },
  {
    question: "Jakie są różne metody cyklu życia komponentu w React?",
    answer:
      "W React są trzy fazy cyklu życia komponentu: Montowanie, Aktualizacja i Odmontowanie.",
  },
  {
    question: "Czym są HOC w React?",
    answer:
      "HOC (Higher Order Components) to funkcje, które przyjmują komponenty jako argumenty i zwracają nowe komponenty.",
  },
  {
    question: "Co to są hooki w React?",
    answer:
      "Hooki to nowa funkcjonalność wprowadzona w wersji 16.8 Reacta, która pozwala na używanie stanu i innych funkcji Reacta w komponentach funkcyjnych.",
  },
  {
    question: "Jakie są zalety użycia TypeScript z React?",
    answer:
      "TypeScript zapewnia statyczną analizę typów, co pozwala na wykrywanie błędów w trakcie kompilacji oraz zwiększa czytelność kodu poprzez deklarowanie typów danych.",
  },
  {
    question: "Jakie są główne zasady JSX?",
    answer:
      "Główne zasady JSX to: zwracanie pojedynczego elementu nadrzędnego, zamykanie wszystkich tagów, używanie składni camelCase dla atrybutów.",
  },
  {
    question: "Czym jest Virtual DOM w React?",
    answer:
      "Virtual DOM w React to wirtualne odwzorowanie struktury DOM w pamięci, które React używa do efektywnego aktualizowania rzeczywistego DOM.",
  },
  {
    question: "Co to jest React.StrictMode?",
    answer:
      "React.StrictMode to komponent Reacta, który umożliwia włączenie dodatkowych sprawdzeń i ostrzeżeń podczas tworzenia komponentów.",
  },
  {
    question: "Dlaczego React.StrictMode renderuje się dwukrotnie?",
    answer:
      "React.StrictMode renderuje komponenty dwukrotnie w trybie deweloperskim, aby wykrywać problemy w kodzie i ostrzegać o nich.",
  },
  {
    question: "Jak React aktualizuje ekran w aplikacji?",
    answer:
      "React aktualizuje interfejs użytkownika w trzech etapach: inicjowanie renderowania, renderowanie komponentów i zatwierdzanie zmian w DOM.",
  },
  {
    question: "Jak React grupuje wiele aktualizacji stanu?",
    answer:
      "React grupuje wiele aktualizacji stanu w jednym wywołaniu, co nazywane jest grupowaniem, aby zwiększyć wydajność aplikacji.",
  },
  {
    question: "Czym jest hydratacja w React?",
    answer:
      "Hydratacja w React to proces dodawania interaktywności JavaScript do wstępnie wygenerowanego statycznego HTML generowanego przez serwer.",
  },
  {
    question: "Jak zaktualizować obiekty w stanie?",
    answer:
      "Obiekty w stanie nie mogą być aktualizowane bezpośrednio. Zamiast tego, należy utworzyć nowy obiekt i zaktualizować stan za pomocą tego nowego obiektu.",
  },
  {
    question: "Jak zaktualizować zagnieżdżone obiekty w stanie?",
    answer:
      "Zagnieżdżone obiekty w stanie również należy aktualizować za pomocą nowego obiektu, który zawiera kopie zaktualizowanych zagnieżdżonych obiektów.",
  },
  {
    question: "Jak zaktualizować tablice w stanie?",
    answer:
      "Tablice w stanie również należy aktualizować za pomocą nowej tablicy zawierającej kopię oryginalnej tablicy oraz nowe elementy.",
  },
  {
    question: "Jak używać biblioteki Immer do aktualizacji stanu?",
    answer:
      "Biblioteka Immer pozwala na łatwe i bezpieczne aktualizowanie stanu, stosując mechanizm kopiowania przy zapisie.",
  },
  {
    question: "Jaka jest różnica między useMemo a useCallback w React?",
    answer:
      "useMemo zapamiętuje wynik wywołania funkcji, natomiast useCallback zapamiętuje samą funkcję.",
  },
  {
    question: "Czym są zdarzenia fazy przechwytywania?",
    answer:
      "Zdarzenia fazy przechwytywania to zdarzenia w React, które są przechwytywane na początku procesu propagacji zdarzeń, niezależnie od logicznej propagacji zdarzeń.",
  },
  {
    question: "Czy klucze są potrzebne tylko dla elementów listy?",
    answer:
      "Klucze w React są używane przede wszystkim do renderowania list elementów, ale mogą być również używane do odróżniania innych komponentów.",
  },
  {
    question: "Jak wykorzystać useMemo w React?",
    answer:
      "Hook useMemo w React pozwala na pamiętanie wyniku drogiej obliczeniowo funkcji i ponowne użycie go w kolejnych renderach komponentu.",
  },
  {
    question: "Czym są portale w React?",
    answer:
      "Portale w React pozwalają na renderowanie elementów dziecka do innego węzła DOM spoza hierarchii rodzica komponentu.",
  },
  {
    question: "Czym są hooki niestandardowe w React?",
    answer:
      "Hooki niestandardowe w React to własnoręcznie zdefiniowane hooki, które pozwalają na separację logiki od komponentów.",
  },
  {
    question: "Jak radzić sobie z obiektami w stanie w React?",
    answer:
      "W React, obiekty w stanie powinny być aktualizowane za pomocą nowych obiektów, aby zapewnić niemutowalność stanu i uniknąć błędów.",
  },
  {
    question: "Czym jest hook useEffect w React?",
    answer:
      "Hook useEffect w React to hook, który pozwala na wykonywanie efektów ubocznych w komponentach funkcyjnych.",
  },
  {
    question: "Co to jest hook useContext w React?",
    answer:
      "Hook useContext w React pozwala na pobieranie wartości kontekstu z drzewa komponentów bezpośrednio do komponentów potomnych.",
  },
  {
    question: "Jak używać hooka useState w React?",
    answer:
      "Hook useState w React pozwala na korzystanie ze stanu lokalnego w komponentach funkcyjnych.",
  },
  {
    question: "Czym jest hook useRef w React?",
    answer:
      "Hook useRef w React pozwala na tworzenie referencji do elementów DOM oraz innych wartości, które będą zachowywały się między renderowaniami.",
  },
  {
    question: "Czym są hooki w React?",
    answer:
      "Hooki to nowa funkcjonalność wprowadzona w wersji 16.8 Reacta, która pozwala na używanie stanu i innych funkcji Reacta w komponentach funkcyjnych.",
  },
  {
    question: "Jak uniknąć mutacji stanu w React?",
    answer:
      "Aby uniknąć mutacji stanu w React, należy zawsze tworzyć kopie stanu i aktualizować stan za pomocą tych kopii, zamiast mutować stan bezpośrednio.",
  },
  {
    question: "Czym jest hook useCallback w React?",
    answer:
      "Hook useCallback w React pozwala na pamiętanie funkcji w pamięci podręcznej, aby uniknąć ich ponownego renderowania podczas każdego renderowania komponentu.",
  },
  {
    question: "Jak działa hook useContext w React?",
    answer:
      "Hook useContext w React pozwala na pobranie wartości kontekstu z drzewa komponentów bezpośrednio do komponentów potomnych, bez konieczności przekazywania ich jako props.",
  },
  {
    question: "Czym jest hook useMemo w React?",
    answer:
      "Hook useMemo w React pozwala na pamiętanie wartości obliczonych przez funkcje i ponowne użycie ich w kolejnych renderach komponentu, tylko wtedy, gdy zmieniają się ich zależności.",
  },
  {
    question: "Czym jest hook useRef w React?",
    answer:
      "Hook useRef w React pozwala na tworzenie referencji do elementów DOM oraz innych wartości, które będą zachowywały się między renderowaniami komponentu.",
  },
  {
    question: "Jak używać hooka useState w React?",
    answer:
      "Hook useState w React pozwala na korzystanie ze stanu lokalnego w komponentach funkcyjnych.",
  },
  {
    question: "Jak działa hook useEffect w React?",
    answer:
      "Hook useEffect w React pozwala na wykonywanie efektów ubocznych w komponentach funkcyjnych, takich jak żądania sieciowe, subskrypcje do danych, czy manipulacje DOM.",
  },
  {
    question: "Jak używać hooka useReducer w React?",
    answer:
      "Hook useReducer w React pozwala na zarządzanie stanem komponentu za pomocą reducerów, podobnie jak w Reduxie.",
  },
  {
    question: "Czym jest hook useLayoutEffect w React?",
    answer:
      "Hook useLayoutEffect w React działa podobnie jak useEffect, ale wykonywany jest synchronicznie po aktualizacji DOM, zanim zostanie wyrenderowana zawartość na ekranie.",
  },
  {
    question: "Czym jest hook useImperativeHandle w React?",
    answer:
      "Hook useImperativeHandle w React pozwala na dostosowanie instancji ref do obsługi zewnętrznych operacji, takich jak focus, scroll, czy inne akcje.",
  },
  {
    question: "Czym są hooki niestandardowe w React?",
    answer:
      "Hooki niestandardowe w React to własnoręcznie zdefiniowane hooki, które pozwalają na separację logiki od komponentów oraz na ponowne użycie logiki w wielu komponentach.",
  },
  {
    question: "Jak używać hooka useDebugValue w React?",
    answer:
      "Hook useDebugValue w React pozwala na dostarczanie dodatkowych informacji debugujących dla własnych hooków niestandardowych.",
  },
  {
    question: "Jakie zasady należy przestrzegać podczas pisania reduktorów?",
    answer:
      "Reduktory muszą być czyste, bez modyfikowania stanu. Oznacza to, że ten sam wejście zawsze zwraca ten sam wynik. Reduktory te działają podczas renderowania podobnie jak funkcje aktualizacji stanu. Dlatego te funkcje nie powinny wysyłać żądania, planować opóźnień ani wykonywać innych skutków ubocznych. Każde działanie powinno opisywać pojedyncze interakcje użytkownika, nawet jeśli wprowadzane są wielokrotne zmiany w danych. Na przykład, jeśli „resetujesz” formularz rejestracyjny, który ma wiele pól wejściowych użytkownika zarządzanych przez reduktor, zaleca się wysłanie jednego działania „reset” zamiast tworzenia oddzielnego działania dla każdego pola.",
  },
  {
    question: "Co to jest hook useReducer? Czy możesz opisać jego użycie?",
    answer:
      "useReducer to Hook, który jest używany do zarządzania stanem w React. Przyjmuje funkcję reduktora z bieżącym stanem i akcją, a następnie zwraca nowy stan wraz z metodą dyspozytorni. Jest podobny do useState, ale bardziej odpowiedni do zarządzania logiką stanu, która obejmuje wiele podwartości lub gdy następny stan zależy od poprzedniego. Jest powszechnie używany w złożonych scenariuszach zarządzania stanem.",
  },
  {
    question: "Jak porównujesz useState i useReducer?",
    answer:
      "useState to prostszy podstawowy Hook do zarządzania stanem w komponentach funkcyjnych. Jest odpowiedni do podstawowych potrzeb zarządzania stanem. Z drugiej strony, useReducer jest bardziej potężny i elastyczny. Jest odpowiedni do zarządzania złożoną logiką stanu, która obejmuje wiele podwartości lub gdy następny stan zależy od poprzedniego. Oferuje również lepsze opcje optymalizacji wydajności.",
  },
  {
    question: "Jak działa kontekst przy użyciu hooka useContext?",
    answer:
      "Kontekst w React zapewnia sposób na przekazywanie danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie. W przypadku hooka useContext możemy użyć kontekstu do odczytywania wartości kontekstu w komponentach funkcyjnych.",
  },
  {
    question: "Jakie są przypadki użycia hooka useContext?",
    answer:
      "Hook useContext jest przydatny w przypadkach, gdy dane muszą być dostępne globalnie w całej aplikacji, takie jak dane uwierzytelniające użytkownika, ustawienia lokalizacji, motywy interfejsu użytkownika itp.",
  },
  {
    question: "Dlaczego nie powinno się aktualizować stanu bezpośrednio?",
    answer:
      "Jeśli spróbujesz aktualizować stan bezpośrednio, to nie spowoduje to ponownego renderowania komponentu. Na przykład, zamiast zapisu stanu bezpośrednio, użyj metody setState(). Metoda ta planuje aktualizację obiektu stanu komponentu. Gdy stan się zmienia, komponent reaguje, ponownie renderując się.",
  },
  {
    question:
      "Jaki jest cel funkcji zwrotnej jako argumentu metody setState()?",
    answer:
      "Funkcja zwrotna jest wywoływana po zakończeniu aktualizacji stanu i ponownym renderowaniu komponentu. Ponieważ setState() działa asynchronicznie, funkcja zwrotna jest używana do wykonywania działań po aktualizacji.",
  },
  {
    question:
      "Jak powiązać metody lub obsługiwacze zdarzeń w wywołaniach zwrotnych JSX?",
    answer:
      "Istnieją 3 możliwe sposoby osiągnięcia tego w komponentach klasowych: 1. Wiązanie w konstruktorze: W klasach JavaScript, metody nie są domyślnie powiązane. Ta sama zasada dotyczy obsługiwaczy zdarzeń Reacta zdefiniowanych jako metody klasy. Zazwyczaj wiązane są one w konstruktorze. 2. Składnia publicznych pól klasy: Jeśli nie chcesz korzystać z podejścia związania, można użyć składni publicznych pól klasy, aby prawidłowo powiązać wywołania zwrotne. Create React App domyślnie włącza tę składnię. 3. Funkcje strzałkowe w wywołaniach zwrotnych: Można również użyć funkcji strzałkowych bezpośrednio w wywołaniach zwrotnych.",
  },
  {
    question:
      "Jak przekazać parametr do obsługi zdarzeń lub wywołania zwrotnego?",
    answer:
      "Możesz użyć funkcji strzałkowej, aby opakować obsługiwacz zdarzeń i przekazać parametry: <button onClick={() => this.handleClick(id)} /> Jest to równoważne z wywołaniem .bind: <button onClick={this.handleClick.bind(this, id)} /> Oprócz tych dwóch podejść, można także przekazać argumenty do funkcji zdefiniowanej jako funkcja strzałkowa: <button onClick={this.handleClick(id)} />; handleClick = (id) => () => { console.log('Witaj, twój numer biletu to', id); };",
  },
  {
    question: "Jaka jest rola refs?",
    answer:
      "Ref służy do zwrócenia referencji do elementu. Powinny być one unikane w większości przypadków, jednak mogą być przydatne, gdy potrzebny jest bezpośredni dostęp do elementu DOM lub instancji komponentu.",
  },
  {
    question: "Jak tworzyć refs?",
    answer:
      "Istnieją dwie metody: 1. Metoda createRef(): Refs są tworzone za pomocą metody React.createRef() i dołączane do elementów React za pomocą atrybutu ref. Aby korzystać z refs w całym komponencie, po prostu przypisz ref do właściwości instancji w konstruktorze. 2. Refs z wywołaniami zwrotnymi: Bez względu na wersję Reacta, można użyć podejścia z wywołaniami zwrotnymi do tworzenia refs. Na przykład element wejściowy paska wyszukiwania można uzyskać w następujący sposób.",
  },
  {
    question: "Co to są przekierowania refs?",
    answer:
      "Przekazywanie refów to funkcja, która pozwala niektórym komponentom przyjąć ref, który otrzymują, i przekazać go dalej do dziecka.",
  },
  {
    question:
      "Która opcja jest preferowana: refs w wywołaniach zwrotnych czy findDOMNode()?",
    answer:
      "Zaleca się używanie refs w wywołaniach zwrotnych zamiast interfejsu API findDOMNode(). Ponieważ findDOMNode() uniemożliwia pewne ulepszenia w React w przyszłości.",
  },
  {
    question: "Dlaczego refy na stringach są przestarzałe?",
    answer:
      "Refy na stringach są przestarzałe, ponieważ: 1. Wymuszają, aby React śledził bieżący komponent. Jest to problematyczne, ponieważ sprawia, że moduł react staje się stanowy, co powoduje dziwne błędy, gdy moduł react jest duplikowany w paczce. 2. Nie są komponowalne - jeśli biblioteka umieszcza ref na przekazywanym dziecku, użytkownik nie może umieścić na nim innego refa. Refy zwrotne są doskonale komponowalne. 3. Nie działają z analizą statyczną, taką jak Flow. Flow nie może zgadnąć magii, którą wykonuje ramka, aby wyświetlić ref na this.refs, jak również jego typ (który może być inny). Refy zwrotne są bardziej przyjazne dla analizy statycznej.",
  },
  {
    question: "Jakie są różne fazy cyklu życia komponentu?",
    answer:
      "Cykl życia komponentu ma trzy różne fazy: Montowanie: Komponent jest gotowy do montażu w drzewie DOM przeglądarki. Ta faza obejmuje inicjalizację z metody konstruktora(), getDerivedStateFromProps(), render(), i componentDidMount(). Aktualizacja: W tej fazie komponent zostaje zaktualizowany na dwa sposoby: wysyłając nowe propsy i aktualizując stan za pomocą setState() lub forceUpdate(). Ta faza obejmuje getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() i componentDidUpdate(). Odmontowywanie: W tej ostatniej fazie komponent nie jest już potrzebny i zostaje odmontowany z drzewa DOM przeglądarki. Ta faza obejmuje componentWillUnmount().",
  },
  {
    question: "Jakie są metody cyklu życia React?",
    answer:
      "Przed React v16.3: componentWillMount: Wywoływana przed renderowaniem i służy do konfiguracji poziomu aplikacji w komponencie głównym. componentDidMount: Wywoływana po pierwszym renderowaniu i tutaj powinny wystąpić wszystkie żądania AJAX, aktualizacje DOM lub stanu oraz ustawienia nasłuchiwania zdarzeń. componentWillReceiveProps: Wywoływana, gdy konkretny props zostanie zaktualizowany, aby wywołać przejścia stanu. shouldComponentUpdate: Określa, czy komponent zostanie zaktualizowany. Domyślnie zwraca true. Jeśli jesteś pewien, że komponent nie musi się renderować po aktualizacji stanu lub props, możesz zwrócić false. Jest to doskonałe miejsce do poprawy wydajności, ponieważ umożliwia uniknięcie ponownego renderowania, jeśli komponent otrzymuje nowy props. componentWillUpdate: Wywoływana przed ponownym renderowaniem komponentu, gdy zmiany w propsach i stanie są potwierdzone przez shouldComponentUpdate(), który zwraca true. componentDidUpdate: Przeważnie służy do aktualizacji DOM w odpowiedzi na zmiany propsów lub stanu. componentWillUnmount: Będzie używane do anulowania wszystkich wychodzących żądań sieciowych lub usunięcia wszystkich nasłuchiwaczy zdarzeń związanych z komponentem.",
  },
  {
    question: "Jak utworzyć proxy właściwości dla komponentu HOC?",
    answer:
      "Możesz dodać/edytować przekazywane do komponentu właściwości za pomocą wzorca proxy, na przykład:",
  },
  {
    question: "Co to jest kontekst?",
    answer:
      "Kontekst w React umożliwia przekazywanie danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie.",
  },
  {
    question: "Jaki jest cel użycia konstruktora super z argumentem props?",
    answer:
      "Konstruktor klasy podrzędnej nie może korzystać z referencji this, dopóki nie zostanie wywołana metoda super(). To samo dotyczy podklas ES6. Głównym powodem przekazywania argumentu props do wywołania super() jest dostęp do this.props w konstruktorze potomka.",
  },
  {
    question: "Jak ustawić stan ze zmienną nazwą klucza?",
    answer:
      "Jeśli korzystasz z ES6, możesz użyć składni obiektowej: this.setState({[name]: value}); Ta składnia obiektowa pozwala na dynamiczne tworzenie kluczy obiektu.",
  },
  {
    question: "Jak działa kod split()?",
    answer:
      "Metoda split() jest używana do dzielenia obiektu łańcuchowego na tablicę ciągów według określonego separatora i zwraca nową tablicę. Na przykład: const str = 'React JavaScript'; const arr = str.split(' '); // ['React', 'JavaScript']",
  },
  {
    question: "Co to są portale?",
    answer:
      "Portale to funkcja w React, która pozwala na renderowanie dzieci komponentu do innego miejsca w drzewie DOM, które znajduje się poza hierarchią rodzica komponentu.",
  },
  {
    question: "Jakie są wytyczne dotyczące pisania reduktorów?",
    answer:
      "Istnieją dwie wytyczne, których należy przestrzegać podczas pisania reduktorów w kodzie.\n\n1. Reduktory muszą być czyste, bez mutowania stanu. Oznacza to, że ten sam input zawsze zwraca ten sam output. Reduktory te uruchamiane są podczas renderowania, podobnie jak funkcje aktualizujące stan. Dlatego te funkcje nie powinny wysyłać żadnych żądań, planować opóźnień ani wywoływać innych skutków ubocznych.\n\n2. Każda akcja powinna opisywać pojedyncze zdarzenie interakcji użytkownika, nawet jeśli na danych jest wykonywanych wiele zmian. Na przykład, jeśli „resetujesz” formularz rejestracyjny, który ma wiele pól wprowadzania danych zarządzanych przez reduktor, zaleca się wysłanie jednej akcji „resetowania” zamiast tworzenia osobnej akcji dla każdego pola. Właściwe uporządkowanie akcji powinno odzwierciedlać interakcje użytkownika w przeglądarce, co bardzo ułatwia proces debugowania.",
  },
  {
    question: "Co to jest hook useReducer? Czy możesz opisać jego użycie?",
    answer:
      "Hook useReducer jest alternatywą dla useState. Przyjmuje reduktor zwracający nowy stan na podstawie aktualnego stanu oraz akcji. Zwraca bieżący stan oraz funkcję dyspozytora, którą można użyć do wysyłania akcji do reduktora. Używany jest zwykle do zarządzania bardziej złożonymi stanami, które wymagają logiki biznesowej poza standardowym użyciem useState. Użycie useReducer polega na przekazywaniu akcji do reduktora, który decyduje, jak stan komponentu powinien się zmienić w odpowiedzi na daną akcję. Jest to szczególnie użyteczne, gdy stan komponentu jest bardziej skomplikowany i może być bardziej czytelne niż tradycyjne użycie wielu setState().",
  },
  {
    question: "Jak porównać useState i useReducer?",
    answer:
      "useState i useReducer są hookami służącymi do zarządzania stanem w React. Oto kilka różnic między nimi:\n\n1. useState jest prostsze w użyciu i zwykle wystarczające do zarządzania prostymi stanami komponentów. Jednakże, gdy komponent ma bardziej złożony stan, useReducer może być bardziej czytelny i elastyczny.\n\n2. useState jest zalecane do używania w prostych przypadkach, gdy stan komponentu nie wymaga złożonej logiki biznesowej ani wielu wartości stanu.\n\n3. useReducer jest zalecany do zarządzania bardziej złożonymi stanami, które wymagają logiki biznesowej poza standardowym użyciem useState. Jest szczególnie użyteczny w przypadku stanów, które mają wiele możliwych przypadków przejścia lub wymagają różnych akcji na różnych częściach stanu.\n\n4. useState ma proste API i jest łatwy w użyciu, zwłaszcza dla początkujących. Natomiast useReducer może wymagać większej wiedzy o programowaniu funkcyjnym i wzorcach projektowych.",
  },
  {
    question: "Jak działa context za pomocą hooka useContext?",
    answer:
      "Context w React pozwala na przekazywanie danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie. Hook useContext służy do odczytywania kontekstu w komponencie funkcyjnym. Pozwala to na dostęp do wartości kontekstu z dowolnego miejsca w komponencie, co jest szczególnie przydatne, gdy dane kontekstu są używane w wielu miejscach w aplikacji. Użycie useContext sprawia, że kod jest bardziej czytelny i uporządkowany, ponieważ eliminuje potrzebę przekazywania propsów przez wiele poziomów komponentów.",
  },
  {
    question: "Jakie są przypadki użycia hooka useContext?",
    answer:
      "Hook useContext jest przydatny w wielu przypadkach, w których chcemy uzyskać dostęp do danych kontekstu z dowolnego miejsca w komponencie funkcyjnym. Kilka przykładów użycia to:\n\n1. Uzyskiwanie dostępu do globalnej konfiguracji aplikacji, takiej jak preferencje użytkownika, ustawienia lokalizacji, itp.\n\n2. Przekazywanie danych autoryzacji lub stanu uwierzytelnienia do wielu komponentów w całej aplikacji.\n\n3. Udostępnianie metod i funkcji pomocniczych, które są używane w wielu komponentach, takich jak funkcje formatujące daty, sortowania tablic itp.\n\n4. Implementacja mechanizmu zarządzania stanem aplikacji, który jest dostępny dla wielu komponentów, na przykład koszyk zakupów w sklepie internetowym lub stan globalnego UI.",
  },
  {
    question: "Dlaczego nie należy bezpośrednio aktualizować stanu?",
    answer:
      'Jeśli próbujesz bezpośrednio aktualizować stan, to nie spowoduje to ponownego renderowania komponentu.\n\n//Niepoprawnie\nthis.state.message = "Witaj świecie";\n\nZamiast tego użyj metody setState(). Planuje ona aktualizację obiektu stanu komponentu. Gdy stan zostanie zmieniony, komponent odpowiada ponownym renderowaniem.\n\n//Poprawnie\nthis.setState({ message: "Witaj Świecie" });\n\nUwaga: Możesz bezpośrednio przypisać wartość do obiektu stanu zarówno w konstruktorze, jak i za pomocą najnowszej składni deklaracji pola klasy w JavaScript.',
  },
  {
    question:
      "Jaki jest cel funkcji zwrotnej jako argumentu metody setState()?",
    answer:
      'Funkcja zwrotna jest wywoływana, gdy metoda setState() zakończy działanie, a komponent zostanie ponownie przeliczony. Ponieważ setState() jest asynchroniczny, funkcja zwrotna jest używana do wykonywania jakichkolwiek działań po zakończeniu setState().\n\nUwaga: Zaleca się używanie metody cyklu życia zamiast tej funkcji zwrotnej.\n\nsetState({ name: "John" }, () =>\n  console.log("Nazwa została zaktualizowana, a komponent został ponownie przeliczony")\n);',
  },
  {
    question: "Jak zbindować metody lub obsługiwacze zdarzeń w zwrotach JSX?",
    answer:
      "Istnieją 3 możliwe sposoby osiągnięcia tego w komponentach klasowych:\n\n1. Wiązanie w konstruktorze: W klasach JavaScript, metody nie są domyślnie wiązane. Ta sama zasada dotyczy obsługiwaczy zdarzeń React zdefiniowanych jako metody klasy. Zwykle wiążemy je w konstruktorze.\n\n2. Składnia publicznych pól klasy: Jeśli nie lubisz podejścia za pomocą bind, to składnia publicznych pól klasy może być używana do prawidłowego wiązania zwrotów. Create React App domyślnie włącza tę składnię.\n\n3. Funkcje strzałkowe w zwrotach: Możliwe jest bezpośrednie użycie funkcji strzałkowych w zwrotach.",
  },
  {
    question: "Jak przekazać parametr do obsługi zdarzenia lub zwrotu?",
    answer:
      'Możesz użyć funkcji strzałkowej, aby owiązać obsługę zdarzenia i przekazać parametry:\n\n<button onClick={() => this.handleClick(id)} />\n\nTo jest równoważne wywołaniu .bind:\n\n<button onClick={this.handleClick.bind(this, id)} />\n\nOprócz tych dwóch podejść, można również przekazywać argumenty do funkcji zdefiniowanej jako funkcja strzałkowa.\n\n<button onClick={this.handleClick(id)} />;\nhandleClick = (id) => () => {\n  console.log("Witaj, Twój numer biletu to", id);\n};',
  },
  {
    question: "Jaki jest cel użycia refs?",
    answer:
      "Ref jest używany do zwracania referencji do elementu. Należy ich unikać w większości przypadków, jednak mogą być przydatne, gdy potrzebny jest bezpośredni dostęp do elementu DOM lub instancji komponentu.",
  },
  {
    question: "Jak tworzyć refs?",
    answer:
      "Istnieją dwie metody:\n\n1. Jest to niedawno dodane podejście. Refy są tworzone za pomocą metody React.createRef() i przypisywane do elementów React za pomocą atrybutu ref. Aby używać refów w całym komponencie, wystarczy przypisać ref do właściwości instancji w konstruktorze.\n\n2. Można również użyć podejścia zwrotnego refów, niezależnie od wersji React. Na przykład, element wejściowy komponentu paska wyszukiwania jest dostępny w następujący sposób:\n\nthis.setInputSearchRef = (e) => {\n  this.txtSearch = e;\n};",
  },
  {
    question: "Co to są przekazywanie refs?",
    answer:
      'Przekazywanie refów to funkcja, która pozwala niektórym komponentom przenosić ref, który otrzymują, i przekazywać go dalej do dziecka.\n\nconst ButtonElement = React.forwardRef((props, ref) => (\n  <button ref={ref} className="CustomButton">\n    {props.children}\n  </button>\n));\n\n// Utwórz odwołanie do przycisku DOM:\nconst ref = React.createRef();\n<ButtonElement ref={ref}>{"Przekazanie refa"}</ButtonElement>;',
  },
  {
    question:
      "Która opcja jest preferowana w przypadku refów zwrotnych i findDOMNode()?",
    answer:
      "Preferowane jest użycie refów zwrotnych zamiast interfejsu API findDOMNode(). Ponieważ findDOMNode() uniemożliwia pewne ulepszenia w React w przyszłości.\n\nStare podejście polegające na użyciu findDOMNode:\n\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView();\n  }\n\n  render() {\n    return <div />;\n  }\n}\n\nZalecane podejście to:\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.node = createRef();\n  }\n  componentDidMount() {\n    this.node.current.scrollIntoView();\n  }\n\n  render() {\n    return <div ref={this.node} />;\n  }\n}",
  },
  {
    question: "Dlaczego refy typu string są przestarzałe?",
    answer:
      'Refy typu string zostały usunięte w React v16. Praca z nimi ma kilka problemów i uważane jest za przestarzałe. Oto dlaczego:\n\n1. Zmuszają React do śledzenia aktualnie wykonywanego komponentu. Jest to problematyczne, ponieważ sprawia, że moduł react staje się stanowy, co powoduje dziwne błędy, gdy moduł react jest duplikowany w bundlu.\n\n2. Nie są komponowalne - jeśli biblioteka dodaje refa do przekazanego dziecka, użytkownik nie może dodać do niego kolejnego refa. Refy zwrotne są doskonale komponowalne.\n\n3. Nie działają z analizą statyczną, taką jak Flow. Flow nie może domyślić się magii, którą wykonuje framework, aby ref typu string pojawił się na this.refs, jak również jego typ (który może być inny). Refy zwrotne są bardziej przyjazne dla analizy statycznej.\n\nNie działa tak, jak większość osób by się spodziewała w przypadku wzorca „render callback” (np. )\n\nclass MyComponent extends Component {\n  renderRow = (index) => {\n    // To nie zadziała. Ref zostanie dołączony do DataTable zamiast MyComponent:\n    return <input ref={"input-" + index} />;\n\n    // To jednak zadziała! Refy zwrotne są niesamowite.\n    return <input ref={(input) => (this["input-" + index] = input)} />;\n  };\n\n  render() {\n    return (\n      <DataTable data={this.props.data} renderRow={this.renderRow} />\n    );\n  }\n}',
  },
  {
    question: "Jakie są różne fazy cyklu życia komponentu?",
    answer:
      "Cykl życia komponentu składa się z trzech głównych faz:\n\n1. Montowanie: Komponent jest gotowy do zamontowania w drzewie DOM przeglądarki. Faza ta obejmuje inicjalizację z konstruktora(), getDerivedStateFromProps(), render() i componentDidMount().\n\n2. Aktualizacja: W tej fazie komponent jest aktualizowany na dwa sposoby: wysyłając nowe właściwości i aktualizując stan za pomocą setState() lub forceUpdate(). Ta faza obejmuje metody cyklu życia getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() i componentDidUpdate().\n\n3. Odmontowywanie: W tej ostatniej fazie komponent nie jest już potrzebny i zostaje odmontowany z drzewa DOM przeglądarki. Ta faza obejmuje metodę cyklu życia componentWillUnmount().",
  },
  {
    question: "Jakie są metody cyklu życia React?",
    answer:
      "Przed React 16.3\n\n1. componentWillMount: Wykonywane przed renderowaniem i jest używane do konfiguracji na poziomie aplikacji w komponencie głównym.\n2. componentDidMount: Wykonywane po pierwszym renderowaniu i tutaj powinny występować wszystkie żądania AJAX, aktualizacje DOM lub stanu oraz dodawanie nasłuchiwaczy zdarzeń.\n3. componentWillReceiveProps: Wykonywane, gdy określona właściwość zostanie zaktualizowana, aby wywołać przejścia stanu.\n4. shouldComponentUpdate: Określa, czy komponent zostanie zaktualizowany czy nie. Domyślnie zwraca true. Jeśli jesteś pewien, że komponent nie musi się renderować po aktualizacji stanu lub właściwości, możesz zwrócić wartość false. Jest to świetne miejsce do poprawy wydajności, ponieważ pozwala uniknąć ponownego renderowania, jeśli komponent otrzymuje nową właściwość.\n5. componentWillUpdate: Wykonywane przed ponownym renderowaniem komponentu, gdy zmiany stanu i właściwości są potwierdzone przez shouldComponentUpdate(), która zwraca true.\n6. componentDidUpdate: Najczęściej używane do aktualizacji DOM w odpowiedzi na zmiany stanu lub właściwości.\n7. componentWillUnmount: Będzie używane do anulowania wszystkich wychodzących żądań sieciowych lub usuwania wszystkich nasłuchiwaczy zdarzeń powiązanych z komponentem.\n\nReact 16.3+\n\n1. getDerivedStateFromProps: Wywoływane tuż przed wywołaniem render() i wywoływane podczas każdego renderowania. Istnieje dla rzadkich przypadków, gdy potrzebujesz pochodnego stanu. Warto przeczytać, jeśli potrzebujesz stanu pochodnego.\n2. componentDidMount: Wykonywane po pierwszym renderowaniu i tu powinny występować wszystkie żądania AJAX, aktualizacje DOM lub stanu oraz dodawanie nasłuchiwaczy zdarzeń.\n3. shouldComponentUpdate: Określa, czy komponent zostanie zaktualizowany czy nie. Domyślnie zwraca true. Jeśli jesteś pewien, że komponent nie musi się renderować po aktualizacji stanu lub właściwości, możesz zwrócić wartość false. Jest to świetne miejsce do poprawy wydajności, ponieważ pozwala uniknąć ponownego renderowania, jeśli komponent otrzymuje nową właściwość.\n4. getSnapshotBeforeUpdate: Wywoływane tuż przed zobowiązaniem wynikowego renderowania do DOM. Wartość zwrócona przez tę metodę zostanie przekazana do componentDidUpdate(). Jest to przydatne do przechwytywania informacji z DOM, np. pozycję przewijania.\n5. componentDidUpdate: Najczęściej używane do aktualizacji DOM w odpowiedzi na zmiany stanu lub właściwości. Nie będzie wywoływane, jeśli shouldComponentUpdate() zwróci false.\n6. componentWillUnmount: Będzie używane do anulowania wszystkich wychodzących żądań sieciowych lub usuwania wszystkich nasłuchiwaczy zdarzeń powiązanych z komponentem.",
  },
  {
    question: "Jak tworzyć proxy props dla komponentu HOC?",
    answer:
      "Możesz dodać/edytować przekazywane do komponentu propsy za pomocą wzorca proxy props, na przykład:\n\nfunction HOC(WrappedComponent) {\n  return class Test extends Component {\n    render() {\n      const newProps = {\n        test: 'test prop',\n        ...this.props\n      };\n      return <WrappedComponent {...newProps} />;\n    }\n  };\n}",
  },
  {
    question: "Jaki jest cel HOC (Higher Order Component)?",
    answer:
      "Komponenty HOC są jednym z zaawansowanych wzorców React. Służą do ponownego wykorzystania kodu, logiki i stanu komponentów. Głównym celem HOC jest ułatwienie ponownego użycia logiki komponentów oraz wywołanie tej logiki w różnych miejscach aplikacji. Przykłady użycia obejmują logowanie, konteksty, obsługę błędów, autoryzację itp.",
  },
  {
    question: "Jak zastosować HOC (Higher Order Component)?",
    answer:
      "Aby zastosować HOC, należy utworzyć funkcję, która przyjmuje komponent jako argument i zwraca nowy komponent. Oto ogólny szkielet:\n\nfunction withHOC(WrappedComponent) {\n  return class HOC extends Component {\n    render() {\n      return <WrappedComponent {...this.props} />;\n    }\n  };\n}\n\nNastępnie można użyć go do owinięcia dowolnego komponentu:\n\nconst EnhancedComponent = withHOC(MyComponent);\n\nTeraz komponent z HOC będzie miał dostęp do wszystkich właściwości i metod przekazanych do MyComponent.",
  },
  {
    question: "Jaka jest różnica między state a props w React?",
    answer:
      "Propsy (skrót od „properties”) oraz state to dwa podstawowe koncepty w React. Propsy to dane przekazywane do komponentu z zewnątrz, podczas gdy state to dane, które są przechowywane i zarządzane wewnątrz komponentu. Propsy są przekazywane tylko do komponentów w jednym kierunku (z góry na dół), natomiast state jest wewnętrznym stanem komponentu, który może się zmieniać w czasie życia komponentu.",
  },
  {
    question:
      "Jaka jest różnica między klasowymi komponentami a komponentami funkcyjnymi w React?",
    answer:
      "Klasowe komponenty to starszy sposób pisania komponentów w React, które dziedziczą po klasie Component. Mają one pełną możliwość korzystania z metod cyklu życia React i stanu. Z drugiej strony, komponenty funkcyjne są funkcjami, które zwracają elementy JSX. Przed wprowadzeniem hooków, komponenty funkcyjne były bardziej ograniczone, ale teraz z użyciem hooków takich jak useState i useEffect, mogą one zarządzać stanem i cyklem życia, co czyni je bardziej elastycznymi.",
  },
  {
    question: "Co to jest hook useState w React i jak go używać?",
    answer:
      "useState to hook, który pozwala komponentom funkcyjnym w React zarządzać stanem. Przy użyciu hooka useState, możesz dodawać stan do swoich komponentów funkcyjnych. useState zwraca parę wartość stanu oraz funkcję, którą można użyć do jego aktualizacji. Na przykład: const [count, setCount] = useState(0); - ta linia kodu tworzy stan „count” początkowo ustawiony na 0 oraz funkcję „setCount”, która pozwala na jego aktualizację.",
  },
  {
    question:
      "Jak obsługuje się cykl życia komponentów w klasowych komponentach w React?",
    answer:
      "Klasowe komponenty w React posiadają różne metody cyklu życia, które pozwalają na wykonywanie operacji na różnych etapach cyklu życia komponentu. Kilka najważniejszych metod cyklu życia komponentów to: componentDidMount(), componentDidUpdate(), componentWillUnmount(). componentDidMount() jest wywoływane zaraz po tym, jak komponent został zamontowany. componentDidUpdate() jest wywoływane zaraz po zaktualizowaniu komponentu. componentWillUnmount() jest wywoływane przed usunięciem komponentu z drzewa DOM. Te metody pozwalają na wykonywanie działań w odpowiednich momentach cyklu życia komponentu.",
  },
  {
    question:
      "Jaka jest różnica między kontrolowanymi a niekontrolowanymi elementami formularzy w React?",
    answer:
      "W kontrolowanych elementach formularzy w React wartość elementu formularza jest zarządzana przez stan React. Wartość elementu formularza jest ustawiana przez stan React, a zmiany w elemencie formularza powodują aktualizację stanu. W przypadku niekontrolowanych elementów formularza wartość elementu formularza jest zarządzana przez DOM, a nie przez React. W niekontrolowanych elementach formularza wartość elementu formularza jest odczytywana z DOM, a nie z wartości stanu React.",
  },
  {
    question: "Co to jest hook useEffect w React i jak go używać?",
    answer:
      "useEffect to hook, który pozwala komponentom funkcyjnym w React wykonywać efekty uboczne wewnątrz komponentu. useEffect jest wywoływany po każdym renderowaniu komponentu i zastępuje metody cyklu życia komponentów klasowych takie jak componentDidMount, componentDidUpdate, componentWillUnmount. useEffect może być używany do zarządzania działaniami związanych z efektami ubocznymi, takimi jak żądania sieciowe, subskrypcje czy manipulacja DOM.",
  },
  {
    question:
      "Jakie są zalety i wady korzystania z klasowych komponentów w porównaniu do komponentów funkcyjnych w React?",
    answer:
      "Zalety korzystania z klasowych komponentów to m.in. pełna możliwość korzystania z metod cyklu życia React oraz stanu, łatwiejsze debugowanie dzięki nazwanym funkcjom oraz bardziej intuicyjne środowisko deweloperskie w niektórych przypadkach. Wady klasowych komponentów to m.in. większa skłonność do pojawiania się problemów związanych z kontekstem this, skomplikowana struktura kodu oraz trudność w testowaniu. Komponenty funkcyjne, z drugiej strony, charakteryzują się prostszą składnią, lepszą wydajnością i łatwiejszym testowaniem.",
  },
  {
    question: "Co to jest context?",
    answer:
      "Kontekst umożliwia przekazywanie danych przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie. Na przykład, uwierzytelnieni użytkownicy, preferencje lokalne, motywy interfejsu użytkownika muszą być dostępne w aplikacji przez wiele komponentów.",
  },
  {
    question: "Jaki jest cel użycia super konstruktora z argumentem props?",
    answer:
      "Konstruktor klasy podrzędnej nie może używać odwołania this dopóki nie zostanie wywołana metoda super(). Dotyczy to również klas podrzędnych ES6. Głównym powodem przekazywania parametru props do wywołania super() jest dostęp do this.props w konstruktorach klasy podrzędnej.",
  },
  {
    question: "Jak ustawić stan z dynamiczną nazwą klucza?",
    answer:
      "Jeśli używasz ES6 lub transpilatora Babel do przekształcania kodu JSX, możesz to osiągnąć za pomocą nazw właściwości obliczeniowych.",
  },
  {
    question:
      "Jaki błąd jest powszechny przy wywoływaniu funkcji za każdym razem, gdy komponent jest renderowany?",
    answer:
      "Należy upewnić się, że funkcja nie jest wywoływana podczas przekazywania jej jako parametru.",
  },
  {
    question: "Czym są granice błędów w React v16?",
    answer:
      "Granice błędów są komponentami, które przechwytują błędy JavaScript gdziekolwiek w drzewie komponentów potomnych, rejestrują te błędy i wyświetlają interfejs użytkownika zamiast drzewa komponentów, które uległo awarii.",
  },
  {
    question: "Jak obsługiwane są granice błędów w React v15?",
    answer:
      "React v15 zapewniał bardzo podstawowe wsparcie dla granic błędów, używając metody unstable_handleError. Została ona przemianowana na componentDidCatch w React v16.",
  },
  {
    question: "Jaki jest cel metody render w react-dom?",
    answer:
      "Ta metoda służy do renderowania elementu React w drzewie DOM w podanym kontenerze i zwraca odwołanie do komponentu. Jeśli element React został wcześniej wyrenderowany w kontenerze, zostanie on zaktualizowany, a drzewo DOM zostanie zmienione tylko w tych miejscach, które są niezbędne do odzwierciedlenia najnowszych zmian.",
  },
  {
    question: "Co się stanie, jeśli użyjesz metody setState() w konstruktorze?",
    answer:
      "Kiedy używasz setState(), oprócz przypisania do stanu obiektu React ponownie renderuje komponent i wszystkie jego dzieci. Otrzymasz błąd typu: Można aktualizować tylko zamontowany lub montujący się komponent. Dlatego musimy użyć this.state do inicjalizacji zmiennych w konstruktorze.",
  },
  {
    question:
      "Czy dobrze jest używać setState() w metodzie componentWillMount()?",
    answer:
      "Tak, jest bezpieczne używanie setState() wewnątrz metody componentWillMount(). Ale jednocześnie zaleca się unikanie asynchronicznej inicjalizacji w metodzie cyklu życia componentWillMount(). Metoda componentWillMount() jest wywoływana bezpośrednio przed montowaniem komponentu. Jest ona wywoływana przed render(), dlatego ustawienie stanu w tej metodzie nie spowoduje ponownego renderowania. Należy unikać wprowadzania efektów ubocznych lub subskrypcji w tej metodzie. Należy upewnić się, że asynchroniczne wywołania inicjalizacyjne komponentu nastąpią w componentDidMount() zamiast w componentWillMount().",
  },
  {
    question: "Co się stanie, jeśli użyjesz propsów w początkowym stanie?",
    answer:
      "Jeśli propsy komponentu zostaną zmienione bez odświeżania komponentu, nowa wartość propsów nigdy nie zostanie wyświetlona, ponieważ funkcja konstruktora nigdy nie zaktualizuje bieżącego stanu komponentu. Inicjalizacja stanu na podstawie propsów jest wykonywana tylko przy pierwszym tworzeniu komponentu.",
  },
  {
    question: "Jak używasz dekoratorów w React?",
    answer:
      "Możesz dekorować komponenty klasowe, co jest takie samo jak przekazywanie komponentu do funkcji. Dekoratory są elastycznym i czytelnym sposobem modyfikowania funkcjonalności komponentu.",
  },
  {
    question: "Czym jest CRA i jakie są jego korzyści?",
    answer:
      "CLI create-react-app pozwala szybko tworzyć i uruchamiać aplikacje React bez kroku konfiguracyjnego. Obejmuje on wszystko, co potrzebne do budowy aplikacji React: wsparcie dla Reacta, JSX, ES6, oraz Flow, wsparcie dla dodatków językowych poza ES6, takich jak operator rozproszenia obiektu, automatyczne prefiksowanie CSS, szybki interaktywny runner testów jednostkowych z wbudowanym wsparciem dla raportowania pokrycia, szybki serwer deweloperski z ostrzeżeniami o powszechnych błędach, skrypt budowania do pakowania JS, CSS i obrazów do produkcji z haszami i sourcemaps.",
  },
  {
    question: "Jaka jest kolejność metod cyklu życia w montowaniu komponentu?",
    answer:
      "Metody cyklu życia są wywoływane w następującej kolejności, gdy instancja komponentu jest tworzona i wstawiana do DOMu: constructor(), static getDerivedStateFromProps(), render(), componentDidMount().",
  },
  {
    question: "Jakie metody cyklu życia zostaną wycofane w React v16?",
    answer:
      "Następujące metody cyklu życia będą uznane za niebezpieczne praktyki programistyczne i staną się bardziej problematyczne w przypadku asynchronicznego renderowania: componentWillMount(), componentWillReceiveProps(), componentWillUpdate(). Począwszy od React v16.3 te metody są aliasowane z prefiksem UNSAFE_ i wersja bez prefiksu zostanie usunięta w React v17.",
  },
  {
    question: "Jaki jest cel metody cyklu życia getDerivedStateFromProps()?",
    answer:
      "Nowa statyczna metoda cyklu życia getDerivedStateFromProps() jest wywoływana zarówno po utworzeniu komponentu, jak i przed jego ponownym renderowaniem. Może zwrócić obiekt do aktualizacji stanu lub null, aby wskazać, że nowe propsy nie wymagają aktualizacji stanu.",
  },
  {
    question: "Jaki jest cel metody cyklu życia getSnapshotBeforeUpdate()?",
    answer:
      "Nowa metoda cyklu życia getSnapshotBeforeUpdate() jest wywoływana tuż przed aktualizacją DOMu. Wartość zwrócona z tej metody zostanie przekazana jako trzeci parametr do metody componentDidUpdate().",
  },
  {
    question: "Jaki jest zalecany sposób nazewnictwa komponentów?",
    answer:
      "Zaleca się nazwanie komponentu odwołując się do jego referencji zamiast używania displayName.",
  },
  {
    question: "Jaka jest zalecana kolejność metod w klasie komponentu?",
    answer:
      "Zalecana kolejność metod od montowania do etapu renderowania to: metody statyczne, constructor(), getChildContext(), componentWillMount(), componentDidMount(), componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate(), componentWillUnmount(), obsługa kliknięć lub zdarzeń, np. onClickSubmit() lub onChangeDescription(), metody getter dla renderowania, takie jak getSelectReason() lub getFooterContent(), opcjonalne metody renderowania, takie jak renderNavigation() lub renderProfilePicture(), render().",
  },
  {
    question: "Dlaczego musimy przekazać funkcję do setState()?",
    answer:
      "Powodem jest to, że setState() jest operacją asynchroniczną. React grupuje zmiany stanu w celu poprawy wydajności, więc stan może nie zmieniać się natychmiast po wywołaniu setState(). Oznacza to, że nie powinieneś polegać na bieżącym stanie podczas wywoływania setState(), ponieważ nie możesz być pewny, jaki będzie ten stan. Rozwiązaniem jest przekazanie funkcji do setState(), z poprzednim stanem jako argumentem. Dzięki temu można uniknąć problemów związanych z uzyskiwaniem przez użytkownika starej wartości stanu z powodu asynchronicznej natury setState().",
  },
  {
    question: "Dlaczego funkcja jest preferowana nad obiektem dla setState()?",
    answer:
      "React może grupować wiele wywołań setState() w pojedynczą aktualizację w celu poprawy wydajności. Ponieważ this.props i this.state mogą być aktualizowane asynchronicznie, nie powinieneś polegać na ich wartościach przy obliczaniu następnego stanu. Ten przykład licznika nie zostanie zaktualizowany zgodnie z oczekiwaniami: this.setState({ counter: this.state.counter + this.props.increment, }). Zalecanym podejściem jest wywołanie setState() z funkcją, a nie z obiektem. Ta funkcja otrzyma poprzedni stan jako pierwszy argument i propsy w momencie stosowania aktualizacji jako drugi argument.",
  },
  {
    question:
      "Dlaczego isMounted() jest antywzorcem i jaka jest właściwa rozwiązanie?",
    answer:
      "Podstawowym zastosowaniem isMounted() jest unikanie wywoływania setState() po odmontowaniu komponentu, ponieważ wyemituje to ostrzeżenie. Sprawdzanie isMounted() przed wywołaniem setState() eliminuje ostrzeżenie, ale jednocześnie usuwa cel ostrzeżenia. Użycie isMounted() jest oznaką kodu, ponieważ jedynym powodem, dla którego sprawdzisz, jest to, że myślisz, że możesz trzymać referencję po odmontowaniu komponentu. Optymalnym rozwiązaniem byłoby znalezienie miejsc, w których setState() może być wywoływane po odmontowaniu komponentu i ich naprawienie. Takie sytuacje najczęściej występują ze względu na zwroty, gdy komponent oczekuje na jakieś dane i zostaje odmontowany przed ich przybyciem. Idealnie byłoby, gdyby wszelkie zwroty zostały anulowane w componentWillUnmount(), przed odmontowaniem.",
  },
  {
    question: "Jaka jest różnica między constructor a getInitialState?",
    answer:
      "Stan powinien być inicjowany w konstruktorze przy użyciu klas ES6 oraz w metodzie getInitialState() przy użyciu React.createClass().",
  },
  {
    question:
      "Czy można wymusić ponowne renderowanie komponentu bez wywoływania setState?",
    answer:
      "Domyślnie, gdy stan lub propsy komponentu się zmieniają, komponent zostanie ponownie wyrenderowany. Jeśli metoda render() zależy od jakichś innych danych, możesz powiedzieć Reactowi, że komponent wymaga ponownego renderowania, wywołując forceUpdate().",
  },
  {
    question:
      "Jaka jest różnica między super() a super(props) w React przy użyciu klas ES6?",
    answer:
      "Gdy chcesz uzyskać dostęp do this.props w constructor() to powinieneś przekazać props do metody super().",
  },
  {
    question: "Jaka jest różnica między metodami setState() i replaceState()?",
    answer:
      "Kiedy używasz setState(), bieżący i poprzedni stan są scalane. replaceState() odrzuca bieżący stan i zastępuje go tylko tym, co podajesz. Zazwyczaj używa się setState(), chyba że naprawdę trzeba usunąć wszystkie poprzednie klucze z jakiegoś powodu. Możesz także ustawić stan na false/null w setState() zamiast używania replaceState().",
  },
  {
    question: "Jak nasłuchiwać zmian stanu?",
    answer:
      "Metoda cyklu życia componentDidUpdate zostanie wywołana, gdy stan się zmieni. Możesz porównać dostarczone wartości stanu i propsów z bieżącymi stanem i propsami, aby określić, czy coś istotnego się zmieniło.",
  },
  {
    question:
      "Jaki jest zalecany sposób usuwania elementu tablicy w stanie React?",
    answer: "Lepszym podejściem jest użycie metody Array.prototype.filter().",
  },
  {
    question: "Czy można używać Reacta bez renderowania HTML?",
    answer: "Jest to możliwe. Poniżej przedstawiamy możliwe opcje:",
  },
  {
    question: "Jakie są możliwe sposoby aktualizowania obiektów w stanie?",
    answer:
      "Wywołanie setState() z obiektem do scalenia ze stanem, użycie Object.assign() do utworzenia kopii obiektu lub wywołanie setState() z funkcją.",
  },
  {
    question: "Jak włączyć https zamiast http w create-react-app?",
    answer:
      "Wystarczy użyć konfiguracji HTTPS=true. Możesz edytować sekcję skryptów w package.json:",
  },
  {
    question:
      "Jak uniknąć używania względnych importów ścieżek w create-react-app?",
    answer:
      "Utwórz plik o nazwie (na przykład) .env w głównym katalogu projektu i zapisz ścieżkę importu:",
  },
  {
    question: "Jak programowo wywołać zdarzenie kliknięcia w React?",
    answer:
      "Możesz użyć atrybutu ref do uzyskania odniesienia do obiektu HTMLInputElement za pomocą zwrotnej funkcji, przechowywać odniesienie jako właściwość klasy, a następnie użyć tego odniesienia do późniejszego wywołania kliknięcia z twoich obsług zdarzeń za pomocą metody HTMLElement.click.",
  },
  {
    question:
      "Jak wykonać wywołanie AJAX, i w których metodach cyklu życia komponentu powinienem wykonać wywołanie AJAX?",
    answer:
      "Możesz użyć bibliotek AJAX, takich jak Axios, jQuery AJAX, lub wbudowany w przeglądarkę fetch. Wywołanie danych powinno być wykonane w metodzie cyklu życia componentDidMount(), aby można było użyć setState() do aktualizacji komponentu po odebraniu danych.",
  },
  {
    question: "Co to są render props?",
    answer:
      "Render props to prosta technika dzielenia się kodem między komponentami przy użyciu właściwości, których wartością jest funkcja. Poniższy komponent używa render props, który zwraca element React.",
  },
  {
    question: "Jak wywołać akcję przy ładowaniu?",
    answer:
      "Akcję można wywołać w metodzie componentDidMount(), a w metodzie render() można zweryfikować dane.",
  },
  {
    question: "Jak używać connect() z React Redux?",
    answer:
      "Aby użyć sklepu w kontenerze, musisz wykonać dwa kroki: użyj mapStateToProps(), aby odwzorować zmienne stanu ze sklepu na określone właściwości. Następnie połącz powyższe właściwości z kontenerem. Możesz zaimportować connect() z react-redux.",
  },
  {
    question: "Jaki jest cel symbolu @ w dekoratorze Redux connect?",
    answer:
      "Symbol @ jest wyrażeniem JavaScriptu używanym do oznaczania dekoratorów. Dekoratory umożliwiają adnotowanie i modyfikowanie klas i właściwości podczas projektowania.",
  },
  {
    question: "Jak używać TypeScript w aplikacji create-react-app?",
    answer:
      "Zaczynając od react-scripts@2.1.0 lub nowszej, istnieje wbudowane wsparcie dla TypeScript. Wcześniejsze wersje react-scripts można uruchomić, przekazując opcję --typescript.",
  },
  {
    question: "Czy obiekty statyczne działają ze klasami ES6 w React?",
    answer:
      "Nie, statyczne działa tylko z React.createClass(). Możesz jednak zdefiniować statyczne obiekty w klasach ES6, takie jak propTypes.",
  },
  {
    question:
      "Dlaczego nie zaleca się używania wywołań zwrotnych lub funkcji ref wewnętrznie?",
    answer:
      "Jeśli wywołanie zwrotne ref jest zdefiniowane jako funkcja w linii, zostanie wywołane dwukrotnie podczas aktualizacji: najpierw z null, a następnie ponownie z elementem DOM.",
  },
  {
    question: "Jakie są implementacje fabryk HOC?",
    answer:
      "Istnieją dwie główne metody implementacji HOC w React: Props Proxy (PP) i Inheritance Inversion (II). Obie te metody wykorzystują różne podejścia do manipulowania WrappedComponent.",
  },
  {
    question: "Jak używać składni deklaracji pól klasy w klasach React?",
    answer:
      "Składniki klas React można uprościć, korzystając z deklaracji pól klasy. Możesz zainicjować lokalny stan bez użycia konstruktora i deklarować metody klasy, używając funkcji strzałkowych bez dodatkowej potrzeby ich wiązania.",
  },
  {
    question:
      "Dlaczego nie trzeba używać granic błędów dla obsługiwanych eventów?",
    answer:
      "Granice błędów nie przechwytują błędów w obsługiwanych eventach. React nie potrzebuje granic błędów do odzyskiwania błędów w obsługiwanych eventach.",
  },
  {
    question: "Jaka jest różnica między blokiem try catch a granicami błędów?",
    answer:
      "Blok try catch działa z błędami w kodzie JavaScript, podczas gdy granice błędów obsługują błędy w metodzie render() i metodach cyklu życia.",
  },
  {
    question: "Jak obsłużyć zdarzenie zmiany wartości pola formularza w React?",
    answer:
      "Aby obsłużyć zmianę wartości pola formularza w React, możesz użyć obsługi zdarzeń onChange(). W handlerze tego zdarzenia możesz aktualizować stan komponentu lub wywoływać inną funkcję w zależności od potrzeb.",
  },
  {
    question: "Co to jest context w React i jak go używać?",
    answer:
      "Kontekst w React to mechanizm, który umożliwia przekazywanie danych do drzewa komponentów bezpośrednio, bez konieczności przekazywania props przez pośrednie komponenty. Możesz używać contextu, aby udostępniać dane globalnie w całej aplikacji.",
  },
  {
    question: "Jak przekazać props w komponentach React?",
    answer:
      "Props w komponentach React są przekazywane jako atrybuty elementów wewnątrz JSX. Możesz przekazać dowolną wartość jako props, w tym stringi, obiekty, funkcje i nawet elementy React.",
  },
  {
    question:
      "Jaka jest wymagana metoda do zdefiniowania dla komponentu klasowego?",
    answer:
      "Metoda render() jest jedyną wymaganą metodą w komponencie klasowym. Inne metody są opcjonalne dla komponentu klasowego.",
  },
  {
    question: "Jakie są możliwe typy zwracane przez metodę render?",
    answer:
      "Poniżej przedstawiono listę następujących typów używanych i zwracanych przez metodę render,\n\n1. Elementy React: Elementy, które instruują React do renderowania węzła DOM. Zawiera elementy HTML, takie jak <div/> i zdefiniowane przez użytkownika elementy.\n2. Tablice i fragmenty: Zwraca wiele elementów do renderowania jako tablice i fragmenty do owinięcia wielu elementów.\n3. Portale: Renderuje dzieci do innego poddrzewa DOM.\n4. Stringi i liczby: Renderuje zarówno stringi, jak i liczby jako węzły tekstowe w DOM.\n5. Booleany lub null: Nie renderuje niczego, ale te typy są używane do warunkowego renderowania zawartości.",
  },
  {
    question: "Jaki jest główny cel konstruktora?",
    answer:
      "Konstruktor jest głównie używany do dwóch celów,\n\n1. Inicjowania lokalnego stanu przez przypisanie obiektu do this.state.\n2. Do wiązania metod obsługi zdarzeń z instancją. Na przykład poniższy kod obejmuje oba powyższe przypadki,\n\nconstructor(props) {\n  super(props);\n  // Nie wywołuj this.setState() tutaj!\n  this.state = { counter: 0 };\n  this.handleClick = this.handleClick.bind(this);\n}",
  },
  {
    question:
      "Czy konstruktor jest obowiązkowy do zdefiniowania dla komponentu React?",
    answer:
      "Nie, nie jest obowiązkowy. Innymi słowy, jeśli nie inicjujesz stanu i nie wiążesz metod, nie musisz implementować konstruktora dla swojego komponentu React.",
  },
  {
    question: "Dlaczego nie należy wywoływać setState w componentWillUnmount?",
    answer:
      "Nie należy wywoływać setState() w componentWillUnmount(), ponieważ po odmontowaniu instancji komponentu nie zostanie ona nigdy ponownie zamontowana.",
  },
  {
    question: "Jaki jest cel getDerivedStateFromError?",
    answer:
      "Ta metoda cyklu życia jest wywoływana po tym, jak błąd został zgłoszony przez komponent podrzędny. Otrzymuje ona zgłoszony błąd jako parametr i powinna zwrócić wartość, aby zaktualizować stan.\n\nSygnatura metody cyklu życia jest następująca,\n\nstatic getDerivedStateFromError(error)\n\nPoniżej przedstawiono przykład użycia tej metody w kontekście granic błędów,\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Zaktualizuj stan, aby następne renderowanie pokazało awaryjny interfejs użytkownika.\n    return { hasError: true };\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // Możesz renderować dowolny niestandardowy interfejs awaryjny\n      return <h1>Coś poszło nie tak.</h1>;\n    }\n\n    return this.props.children;\n  }\n}",
  },
  {
    question: "Jakie są metody wywoływane podczas obsługi błędów?",
    answer:
      "Poniższe metody są wywoływane, gdy wystąpi błąd podczas renderowania, w metodzie cyklu życia lub w konstruktorze dowolnego komponentu podrzędnego.\n\nstatic getDerivedStateFromError()\ncomponentDidCatch()",
  },
  {
    question: "Jaki jest cel metody unmountComponentAtNode?",
    answer:
      "Ta metoda jest dostępna z pakietu react-dom i usuwa zamontowany komponent React z DOM i czyści jego obsługę zdarzeń i stan. Jeśli żaden komponent nie był zamontowany w kontenerze, wywołanie tej funkcji nie robi nic. Zwraca true, jeśli komponent został odmontowany, i false, jeśli nie było komponentu do odmontowania.\n\nSygnatura metody jest następująca,\n\nReactDOM.unmountComponentAtNode(container);",
  },
  {
    question: "Jakie są ograniczenia związane z HOC?",
    answer:
      "Komponenty Higher-order (HOC) mają kilka zastrzeżeń poza swoimi korzyściami. Poniżej znajdują się wymienione w kolejności,\n\n1. Nie używaj HOC wewnątrz metody render: Nie zaleca się stosowania HOC do komponentu wewnątrz metody render komponentu.\n2. Metody statyczne muszą być kopiowane: Gdy stosujesz HOC do komponentu, nowy komponent nie posiada żadnych metod statycznych oryginalnego komponentu.\n3. Refsy nie są przekazywane: Dla HOC musisz przekazać wszystkie propsy do opakowanego komponentu, ale nie działa to dla refsy.",
  },
  {
    question: "Jak debugować forwardRefs w narzędziach DevTools?",
    answer:
      "React.forwardRef akceptuje funkcję render jako parametr, a DevTools używa tej funkcji do określenia, co wyświetlić dla komponentu przekazującego ref.\n\nNa przykład, jeśli nie nazwiesz funkcji render lub nie użyjesz właściwości displayName, w DevTools będzie wyświetlane „ForwardRef”.\n\nMożesz ustawić właściwość displayName dla funkcji forwardRef jako alternatywę,\n\nfunction logProps(Component) {\n  class LogProps extends React.Component {\n    // ...\n  }\n\n  function forwardRef(props, ref) {\n    return <LogProps {...props} forwardedRef={ref} />;\n  }\n\n  // Nadaj temu komponentowi bardziej pomocną nazwę wyświetlaną w DevTools.\n  // np. „ForwardRef(logProps(MyComponent))”\n  const name = Component.displayName || Component.name;\n  forwardRef.displayName = `logProps(${name})`;\n\n  return React.forwardRef(forwardRef);\n}",
  },
  {
    question:
      "Czy to dobre praktyka używać funkcji strzałkowych w metodach render?",
    answer:
      'Tak, możesz używać. Jest to często najprostszy sposób przekazywania parametrów do funkcji zwrotnych. Jednakże, musisz zoptymalizować wydajność podczas ich używania.\n\nclass Foo extends Component {\n  handleClick() {\n    console.log("Kliknięcie nastąpiło");\n  }\n  render() {\n    return <button onClick={() => this.handleClick()}>Kliknij mnie</button>;\n  }\n}\nUwaga: Używanie funkcji strzałkowych w metodzie render tworzy nową funkcję za każdym razem, gdy komponent renderuje się ponownie, co może mieć skutki dla wydajności.',
  },
  {
    question: "Jak powiedzieć, że aktualizacje stanu są scalane?",
    answer:
      "Gdy wywołujesz setState() w komponencie, React scala obiekt, który podajesz do bieżącego stanu.\n\nNa przykład, przyjmijmy użytkownika Facebooka z postami i komentarzami jako zmiennymi stanu,\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      posts: [],\n      comments: []\n    };\n  }\nTeraz możesz je aktualizować niezależnie za pomocą osobnych wywołań setState() jak poniżej,\n\n componentDidMount() {\n    fetchPosts().then(response => {\n      this.setState({\n        posts: response.posts\n      });\n    });\n\n    fetchComments().then(response => {\n      this.setState({\n        comments: response.comments\n      });\n    });\n  }\nJak wspomniano powyżej, this.setState({comments}) aktualizuje tylko zmienną comments bez modyfikowania lub zastępowania zmiennej posts.",
  },
  {
    question: "Jak przekazać argumenty do obsługi zdarzeń?",
    answer:
      "Podczas iteracji lub pętli często występuje potrzeba przekazania dodatkowego parametru do obsługi zdarzeń. Można to osiągnąć za pomocą funkcji strzałkowych lub metody bind.\n\nPrzykład aktualizacji szczegółów użytkownika w siatce,\n\n<button onClick={(e) => this.updateUser(userId, e)}>Zaktualizuj dane użytkownika</button>\n<button onClick={this.updateUser.bind(this, userId)}>Zaktualizuj dane użytkownika</button>\nW obu podejściach syntetyczny argument e jest przekazywany jako drugi argument. Musisz go przekazać jawnie dla funkcji strzałkowych, a dla metody bind zostanie przekazany automatycznie.",
  },
  {
    question: "Jak zapobiec renderowaniu komponentu?",
    answer:
      "Możesz zapobiec renderowaniu komponentu, zwracając null na podstawie określonego warunku. W ten sposób można warunkowo renderować komponent.\n\nfunction Greeting(props) {\n  if (!props.loggedIn) {\n    return null;\n  }\n\n  return <div className=\"greeting\">Witaj, {props.name}</div>;\n}\n\nclass User extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {loggedIn: false, name: 'John'};\n  }\n\n  render() {\n   return (\n       <div>\n         //Zapobiegnij renderowaniu komponentu, jeśli nie jest zalogowany\n         <Greeting loggedIn={this.state.loggedIn} />\n         <UserDetails name={this.state.name}>\n       </div>\n   );\n  }\nW powyższym przykładzie komponent powitania pomija sekcję renderowania, stosując warunek i zwracając wartość null.",
  },
  {
    question: "Podaj przykład użycia kontekstu.",
    answer:
      'Kontekst jest przeznaczony do udostępniania danych, które można uznać za globalne dla drzewa komponentów React.\n\nNa przykład w poniższym kodzie ręcznie przekazujemy „theme” jako props, aby stylować komponent Button.\n\n// Utwórz kontekst z domyślną wartością motywu „luna”\nconst ThemeContext = React.createContext("luna");\n// Utwórz komponent App, gdzie używa on dostawcy, aby przekazać wartość motywu w drzewie\nclass App extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Provider value="nova">\n        <Toolbar />\n      </ThemeContext.Provider>\n    );\n  }\n}\n// Środkowy komponent, w którym nie musisz już przekazywać propa tematu\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n// Odczytaj wartość tematu w komponencie przycisku, aby ją użyć\nclass ThemedButton extends React.Component {\n  static contextType = ThemeContext;\n  render() {\n    return <Button theme={this.context} />;\n  }\n}',
  },
  {
    question: "Jak używać contextType?",
    answer:
      "ContextType służy do konsumowania obiektu kontekstu. Właściwość contextType może być używana na dwa sposoby,\n\n1. contextType jako właściwość klasy: Właściwość contextType na klasie może być przypisana obiektowi Context utworzonemu przez React.createContext(). Następnie można konsumować najbliższą bieżącą wartość tego typu kontekstu, używając this.context w dowolnej z metod cyklu życia i funkcji render.\n\n2. Pole statyczne: Możesz użyć statycznego pola klasy do zainicjowania contextType za pomocą składni publicznych pól klasy.\n\nPoniższy przykład przedstawia oba podejścia,\n\nclass MyClass extends React.Component {\n  componentDidMount() {\n    let value = this.context;\n    /* wykonaj skutki uboczne podczas montowania, używając wartości MyContext */\n  }\n  componentDidUpdate() {\n    let value = this.context;\n    /* ... */\n  }\n  componentWillUnmount() {\n    let value = this.context;\n    /* ... */\n  }\n  render() {\n    let value = this.context;\n    /* renderuj coś na podstawie wartości MyContext */\n  }\n}\nMyClass.contextType = MyContext;",
  },
  {
    question: "Co to jest konsument?",
    answer:
      "Konsument jest komponentem React, który subskrybuje zmiany kontekstu. Wymaga funkcji jako dziecka, która otrzymuje bieżącą wartość kontekstu jako argument i zwraca węzeł React. Argument wartości przekazany do funkcji będzie równy wartości prop najbliższego dostawcy dla tego kontekstu powyżej w drzewie.\n\nPrzykład użycia konsumenta,\n\n<MyContext.Consumer>\n  {value => /* renderuj coś na podstawie wartości kontekstu */}\n</MyContext.Consumer>",
  },
  {
    question:
      "Jak rozwiązać przypadki narożne wydajności podczas korzystania z kontekstu?",
    answer:
      'Kontekst używa tożsamości referencyjnej do określenia, kiedy ponownie renderować. Istnieją pewne pułapki, które mogą wywołać niezamierzone renderowanie konsumentów, gdy rodzic dostawcy renderuje ponownie.\n\nNa przykład poniższy kod będzie renderować wszystkie konsumenty za każdym razem, gdy dostawca renderuje ponownie, ponieważ za każdym razem tworzony jest nowy obiekt dla wartości.\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Provider value={{ something: "something" }}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}\nMożna to rozwiązać przez podniesienie wartości do stanu rodzica,\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: { something: "something" },\n    };\n  }\n\n  render() {\n    return (\n      <Provider value={this.state.value}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}',
  },
  {
    question: "Jaki jest cel forward ref w HOC?",
    answer:
      'Refy nie zostaną przekazane, ponieważ ref nie jest propem. Jest on obsługiwany inaczej przez React, podobnie jak klucz. Jeśli dodasz ref do HOC, ref będzie odnosił się do zewnętrznego komponentu kontenera, a nie do opakowanego komponentu. W tym przypadku możesz użyć API Forward Ref. Na przykład możemy jawnie przekazywać refy do wewnętrznego komponentu FancyButton za pomocą API React.forwardRef.\n\nPoniższy HOC rejestruje wszystkie propsy,\n\nfunction logProps(Component) {\n  class LogProps extends React.Component {\n    componentDidUpdate(prevProps) {\n      console.log("stare propsy:", prevProps);\n      console.log("nowe propsy:", this.props);\n    }\n\n    render() {\n      const { forwardedRef, ...rest } = this.props;\n\n      // Przypisz niestandardowy prop „forwardedRef” jako ref\n      return <Component ref={forwardedRef} {...rest} />;\n    }\n  }\n\n  return React.forwardRef((props, ref) => {\n    return <LogProps {...props} forwardedRef={ref} />;\n  });\n}\nSkorzystajmy z tego HOC, aby zarejestrować wszystkie propsy przekazywane do naszego „fancy button” komponentu,\n\nclass FancyButton extends React.Component {\n  focus() {\n    // ...\n  }\n\n  // ...\n}\nexport default logProps(FancyButton);\nTeraz utwórzmy ref i przekażmy go do komponentu FancyButton. W tym przypadku możesz ustawić fokus na element przycisku.\n\nimport FancyButton from "./FancyButton";\n\nconst ref = React.createRef();\nref.current.focus();\n<FancyButton label="Kliknij mnie" handleClick={handleClick} ref={ref} />;',
  },
  {
    question:
      "Czy argument ref jest dostępny dla wszystkich funkcji lub komponentów klasowych?",
    answer:
      "Zwykłe funkcje lub komponenty klasowe nie otrzymują argumentu ref, a ref nie jest również dostępne w propsach. Drugi argument ref istnieje tylko wtedy, gdy definiujesz komponent za pomocą wywołania React.forwardRef.",
  },
  {
    question:
      "Dlaczego potrzebujesz dodatkowej uwagi dla bibliotek komponentów podczas korzystania z forward refs?",
    answer:
      "Kiedy zaczniesz używać forwardRef w bibliotece komponentów, powinieneś traktować to jako zmianę naruszającą zgodność wsteczną i wydać nową wersję główną swojej biblioteki. Wynika to z tego, że twoja biblioteka prawdopodobnie ma inne zachowanie, takie jak to, do jakich refs są przypisane, i jakie typy są eksportowane. Te zmiany mogą powodować problemy w aplikacjach i innych bibliotekach zależnych od starego zachowania.",
  },
  {
    question: "Jak utworzyć komponenty klasowe przy użyciu forwardRef?",
    answer:
      "Możesz użyć React.forwardRef do przekazywania refów do przekształconych komponentów klasowych. Na przykład, aby uzyskać dostęp do przekazanego refa, możesz użyć forwardRef.\n\nNa przykład, aby utworzyć komponent klasowy, który przyjmuje przekazany ref,\n\nclass MyComponent extends React.Component {\n  render() {\n    return <input ref={this.props.inputRef} />;\n  }\n}\nexport default React.forwardRef((props, ref) => {\n  return <MyComponent inputRef={ref} {...props} />;\n});\nW powyższym przykładzie przekazujemy inputRef jako props, który jest przekazywany przez forwardRef.",
  },
  {
    question: "Czy jest zalecane używanie forwardRef do obsługi refów?",
    answer:
      "Używanie forwardRef jest zalecane, gdy potrzebujesz przekazać ref do wewnętrznych komponentów, które są opakowywane. Pozwala to na zachowanie pełnej funkcjonalności ref w opakowanych komponentach.",
  },
  {
    question:
      "Jak przekazywać refs do przekształconych komponentów funkcyjnych?",
    answer:
      "Aby przekazać refy do przekształconych komponentów funkcyjnych, możesz użyć API React.forwardRef. Oto sposób użycia:\n\nconst MyComponent = React.forwardRef((props, ref) => {\n  return <input ref={ref} />;\n});\nW tym przykładzie ref jest przekazywany do komponentu wejściowego. Teraz możesz przekazać ten komponent, zachowując pełną funkcjonalność ref.",
  },
  {
    question: "Jak przekazać dowolną liczbę refów do komponentu?",
    answer:
      "Nie jest możliwe przekazanie więcej niż jednego refa do komponentu. Jeśli istnieje potrzeba przekazania więcej niż jednego refa do komponentu, możliwe jest użycie domyślnej właściwości ref oraz propsa do przekazania innych referencji.\n\nconst MyComponent = React.forwardRef((props, ref) => {\n  return <input ref={ref} />;\n});\nAby przekazać dodatkowe referencje, możesz użyć propsów,\n\n<MyComponent ref={ref} inputRef={inputRef} />\nW tym przykładzie props inputRef jest przekazywany do wewnętrznego komponentu.",
  },
  {
    question: "Co to jest children prop w komponentach React?",
    answer:
      'children jest specjalnym propem w komponentach React, który umożliwia przekazywanie elementów do komponentów potomnych. Jest to sposób, w jaki React umożliwia umieszczanie dowolnej liczby elementów wewnątrz komponentu. Może to być zarówno pojedynczy węzeł, jak i wiele węzłów.\n\nNa przykład,\n\nfunction Container(props) {\n  return (\n    <div className="container">\n      {props.children}\n    </div>\n  );\n}\nW tym przykładzie props.children są renderowane wewnątrz kontenera. Możesz umieścić dowolny element wewnątrz kontenera, a zostanie on przekazany do children.',
  },
  {
    question: "Jak przekazać propsy do dzieci w komponentach React?",
    answer:
      "Możesz przekazać propsy do dzieci w komponentach React poprzez przekazywanie ich jako własności do komponentu dziecka. Oto sposób użycia,\n\nfunction ParentComponent(props) {\n  return (\n    <div>\n      {React.Children.map(props.children, child => {\n        return React.cloneElement(child, {newProp: true});\n      })}\n    </div>\n  );\n}\nW tym przykładzie props newProp zostanie przekazany do wszystkich dzieci ParentComponent.",
  },
  {
    question: "Co to jest hook efektu ubocznego w React?",
    answer:
      "Hook efektu ubocznego jest specjalną funkcją, która umożliwia korzystanie z efektów ubocznych w komponentach funkcyjnych React. Efekty uboczne mogą obejmować takie czynności jak wywoływanie zapytań do API, subskrypcje, zmiany w lokalnym stanie itp. Hook efektu ubocznego pozwala na zachowanie efektów ubocznych między renderowaniami komponentów.",
  },
  {
    question: "Jak używać hooka efektu ubocznego w React?",
    answer:
      "Aby użyć hooka efektu ubocznego w komponencie React, należy go zaimportować z paczki react. Oto przykład użycia,\n\nimport React, { useEffect } from 'react';\n\nfunction MyComponent() {\n  useEffect(() => {\n    // Kod do wykonania po zrenderowaniu komponentu\n    return () => {\n      // Czyszczenie lub anulowanie subskrypcji\n    };\n  }, []); // Przekazanie pustej tablicy zależności oznacza, że efekt zostanie wywołany tylko raz\n\n  return (\n    <div>\n      {/* zawartość komponentu */}\n    </div>\n  );\n}",
  },
  {
    question:
      "Jak obsłużyć oczekiwanie na dane za pomocą hooka efektu ubocznego?",
    answer:
      "Możesz obsługiwać oczekiwanie na dane za pomocą hooka efektu ubocznego, używając go wraz z asynchronicznymi operacjami, takimi jak wywołania API. Na przykład,\n\nimport React, { useState, useEffect } from 'react';\n\nfunction MyComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      const result = await fetch('https://api.example.com/data');\n      const json = await result.json();\n      setData(json);\n    };\n\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      {data ? (\n        <div>Dane załadowane: {data}</div>\n      ) : (\n        <div>Ładowanie danych...</div>\n      )}\n    </div>\n  );\n}",
  },
];
