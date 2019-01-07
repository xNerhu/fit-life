<img src="https://raw.githubusercontent.com/xnerhu/projekt-fit-life/master/src/shared/resources/icons/logo.png" width="128">

# Projekt Fit Life

Strona [projektu](https://www.projektfitlife.pl/) w ramach konkursu [zwolnienizteorii.pl](https://zwolnienizteorii.pl/) zbudowana na `React`, `Styled-Components` i `Express` z renderowaniem po stronie serwera (`SSR`).

## Krótko o projekcie

Projekt Fit Life to inicjatywa społeczna zachęcająca do prowadzenia zdrowego trybu życia, a tym samym walkę z szerzącym się problemem społecznym.

## Testowanie

Przed użyciem poniższych poleceń, upewnij się, że na masz zainstalowane [`Node.js`](https://nodejs.org/) oraz [`Git`](https://git-scm.com/). Otwórz terminal, następnie postępuj zgodnie z instrukcją.

1. Sklonuj repozytorium

```bash
$ git clone https://github.com/xnerhu/projekt-fit-life
```

2. Otwórz workspace

```bash
$ cd projekt-fit-life
```

3. Zainstaluj potrzebne moduły używając `NPM`

```bash
$ npm install
```

lub używająć [`Yarn`](https://yarnpkg.com/)

```bash
$ yarn
```

4. Włącz tryb deweloperski

```bash
$ yarn dev
```

5. Otwórz [http://localhost:8080/](http://localhost:8080/) w przeglądarce.

## Inne polecenia

```bash
$ npm run <polecenie>
```

lub

```bash
$ yarn <polecenie>
```

| Polecenie | Opis                                                             |
| --------- | ---------------------------------------------------------------- |
| `dev`     | Obserwuje zmiany kodu.                                           |
| `build`   | Generuje kod strony w trybie produkcyjnym                        |
| `start`   | Włącza serwer w tle używając [`PM2`](http://pm2.keymetrics.io/). |
| `stop`    | Wyłącza serwer.                                                  |
| `restart` | Restartuje serwer.                                               |

## Konfiguracja

Aby zmienić klucz API do Google Maps lub port serwera Express, należy edytować plik `.env`.
