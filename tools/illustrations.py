"""Illustrations for sanjoaquintowing.com blog posts.

One visual vocabulary for every drawing on the site: asphalt night sky, tule fog
bands, orchard rows, flare-orange wrecker and flatbed, guide-sign green labels,
Interstate and California route shields. Recombine these parts for new scenes
rather than drawing from scratch, so the set keeps reading as one brand.

    python3 tools/illustrations.py            # writes the scenes below into public/img/blog/

The first-generation drawings (services, hero, early posts) were made with an
earlier copy of these parts and are not regenerated here.
"""
import math
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'img', 'blog')
FONT = "'Overpass','Arial Narrow',Arial,Helvetica,sans-serif"
BODY = "'Public Sans',Arial,Helvetica,sans-serif"

C = dict(
    sky0='#0d0f12', sky1='#1b1f24', ground='#15181b', road='#24282d', roadEdge='#3a3f45',
    lane='#e7e4d6', fog='#d6ded4', accent='#ff6b2c', amber='#ffb03a', ink='#121417',
    panel='#1f2328', white='#eceeea', slate='#a6aca5', sign='#17673f', line='#4a5048',
    red='#e5484d', blue='#3b82f6', green='#3fb950', body='#c9cec6', body2='#8e958c',
    glass='#2f3b44', tree='#1d2a22', steam='#dfe6e2',
)

W, H = 1200, 480


def svg(w, h, inner, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
            f'role="img" aria-label="{title}">\n<title>{title}</title>\n<defs>\n'
            f'<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{C["sky0"]}"/>'
            f'<stop offset="1" stop-color="{C["sky1"]}"/></linearGradient>\n'
            f'<linearGradient id="hot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1a12"/>'
            f'<stop offset="1" stop-color="#1b1f24"/></linearGradient>\n'
            f'<filter id="blur" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="18"/></filter>\n'
            f'<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>\n'
            f'<radialGradient id="flare"><stop offset="0" stop-color="{C["accent"]}" stop-opacity=".75"/>'
            f'<stop offset="1" stop-color="{C["accent"]}" stop-opacity="0"/></radialGradient>\n'
            f'<radialGradient id="amberGlow"><stop offset="0" stop-color="{C["amber"]}" stop-opacity=".6"/>'
            f'<stop offset="1" stop-color="{C["amber"]}" stop-opacity="0"/></radialGradient>\n'
            f'<radialGradient id="lamp"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".35"/>'
            f'<stop offset="1" stop-color="#ffcf8a" stop-opacity="0"/></radialGradient>\n'
            f'<radialGradient id="sun"><stop offset="0" stop-color="#ffcf8a" stop-opacity=".55"/>'
            f'<stop offset="1" stop-color="#ffcf8a" stop-opacity="0"/></radialGradient>\n'
            f'<marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
            f'<path d="M0 0L10 5L0 10z" fill="{C["accent"]}"/></marker>\n'
            f'<marker id="arrW" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
            f'<path d="M0 0L10 5L0 10z" fill="{C["slate"]}"/></marker>\n'
            f'</defs>\n{inner}\n</svg>\n')


# ---------- parts ----------

def sky(w, h, horizon, grad='sky'):
    return (f'<rect width="{w}" height="{h}" fill="url(#{grad})"/>'
            f'<rect x="0" y="{horizon}" width="{w}" height="{h - horizon}" fill="{C["ground"]}"/>')


def fog(w, y, h=60, op=.16):
    return f'<rect x="-100" y="{y}" width="{w + 200}" height="{h}" fill="{C["fog"]}" opacity="{op}" filter="url(#blur)"/>'


def orchard(x0, x1, y, size=13, gap=30, seed=0):
    out, x, i = [], x0, 0
    while x < x1:
        r = size + ((i * 7 + seed) % 5) - 2
        out.append(f'<ellipse cx="{x}" cy="{y - r * .75:.0f}" rx="{r}" ry="{r * .8:.0f}" fill="{C["tree"]}"/>')
        x += gap
        i += 1
    return ''.join(out)


def road(w, y, h=90, dash=True):
    s = f'<rect x="0" y="{y}" width="{w}" height="{h}" fill="{C["road"]}"/>'
    s += f'<rect x="0" y="{y}" width="{w}" height="3" fill="{C["roadEdge"]}"/>'
    s += f'<rect x="0" y="{y + h - 6}" width="{w}" height="4" fill="{C["lane"]}" opacity=".55"/>'
    if dash:
        s += (f'<line x1="0" y1="{y + h * .42}" x2="{w}" y2="{y + h * .42}" stroke="{C["lane"]}" '
              f'stroke-width="4" stroke-dasharray="46 54" opacity=".5"/>')
    return s


def lamp_post(x, ground, h=150):
    top = ground - h
    return (f'<circle cx="{x + 30}" cy="{top + 6}" r="110" fill="url(#lamp)"/>'
            f'<path d="M{x} {ground}V{top}h28" stroke="#3a3f45" stroke-width="5" fill="none"/>'
            f'<rect x="{x + 22}" y="{top}" width="18" height="7" rx="3" fill="#ffcf8a"/>')


def car(x, y, s=1.0, col=None, flip=False, damaged=False, hood=False):
    """Side-view sedan. (x, y) = rear tire contact point."""
    col = col or C['body']
    tr = f'translate({x},{y}) scale({-s if flip else s},{s})'
    front = (' L262 -46 Q284 -42 286 -22 L286 -14 L-10 -14 Z' if not damaged
             else ' L246 -48 L258 -36 L250 -30 L268 -26 L270 -14 L-10 -14 Z')
    body = 'M-10 -20 Q-12 -46 12 -50 L40 -50 L70 -84 Q78 -92 92 -92 L170 -92 Q184 -92 194 -82 L226 -52' + front
    g = f'<g transform="{tr}"><path d="{body}" fill="{col}" stroke="{C["ink"]}" stroke-width="2"/>'
    g += (f'<path d="M62 -52 L84 -80 Q88 -84 96 -84 L128 -84 L128 -52 Z" fill="{C["glass"]}"/>'
          f'<path d="M136 -84 L168 -84 Q178 -84 186 -76 L206 -52 L136 -52 Z" fill="{C["glass"]}"/>')
    if hood:
        g += f'<path d="M226 -52 L232 -96 L284 -60" fill="{col}" stroke="{C["ink"]}" stroke-width="2"/>'
    g += f'<rect x="270" y="-40" width="12" height="7" rx="2" fill="#f3e9c6"/>'
    g += f'<rect x="-10" y="-40" width="9" height="8" rx="2" fill="{C["red"]}"/>'
    for cx in (40, 224):
        g += f'<circle cx="{cx}" cy="-14" r="24" fill="{C["ink"]}"/><circle cx="{cx}" cy="-14" r="11" fill="{C["body2"]}"/>'
    return g + '</g>'


def light_bar(x, y, w=56):
    return (f'<ellipse cx="{x + w / 2}" cy="{y}" rx="{w * 2}" ry="{w * 1.1}" fill="url(#amberGlow)"/>'
            f'<rect x="{x}" y="{y - 6}" width="{w}" height="10" rx="3" fill="{C["amber"]}"/>')


def cab(cx, top=-160):
    """Tow truck cab facing right, rear wall at local x=cx."""
    g = (f'<path d="M{cx} -60 L{cx} {top + 8} Q{cx} {top} {cx + 8} {top} L{cx + 74} {top} Q{cx + 86} {top} {cx + 92} {top + 12} '
         f'L{cx + 118} -98 Q{cx + 124} -88 {cx + 124} -76 L{cx + 124} -40 L{cx} -40 Z" fill="{C["white"]}" stroke="{C["ink"]}" stroke-width="2"/>')
    g += f'<path d="M{cx + 14} {top + 12} L{cx + 74} {top + 12} L{cx + 98} -102 L{cx + 14} -102 Z" fill="{C["glass"]}"/>'
    g += f'<rect x="{cx + 110}" y="-84" width="14" height="10" rx="2" fill="#f3e9c6"/>'
    return g + light_bar(cx + 10, top - 6, 66)


def wheels(x, y, s, xs, flip=False):
    g = ''
    for wx in xs:
        px = x + (-wx if flip else wx) * s
        g += f'<circle cx="{px}" cy="{y - 26 * s}" r="{26 * s}" fill="{C["ink"]}"/><circle cx="{px}" cy="{y - 26 * s}" r="{11 * s}" fill="{C["body2"]}"/>'
    return g


def flatbed(x, y, s=1.0, tilt=0, cargo=''):
    tr = f'translate({x},{y}) scale({s})'
    g = f'<g transform="{tr}">'
    g += f'<rect x="40" y="-60" width="380" height="22" rx="3" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="2"/>'
    g += f'<g transform="rotate({-tilt} 300 -70)">'
    g += f'<rect x="-30" y="-82" width="330" height="16" rx="2" fill="{C["accent"]}"/>'
    g += f'<rect x="-30" y="-70" width="330" height="4" fill="{C["ink"]}" opacity=".3"/>{cargo}</g>'
    g += cab(300) + '</g>'
    return g + wheels(x, y, s, (110, 170, 380))


def wrecker(x, y, s=1.0):
    """Wheel-lift wrecker facing right; lift arm at the rear (left)."""
    L = 320
    g = f'<g transform="translate({x},{y}) scale({s})">'
    g += f'<rect x="20" y="-56" width="{L - 20}" height="22" rx="3" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="2"/>'
    g += f'<path d="M30 -56 L30 -112 L{L - 130} -112 L{L - 130} -56 Z" fill="{C["accent"]}"/>'
    g += f'<path d="M40 -112 L120 -160 L134 -150 L60 -106 Z" fill="#3a3f45"/>'
    g += f'<path d="M30 -40 L-34 -40 L-34 -24 L-6 -24" stroke="#5b6159" stroke-width="9" fill="none" stroke-linejoin="round"/>'
    g += cab(L - 130, -158).replace('-60 L', '-56 L', 1) + '</g>'
    return g + wheels(x, y, s, (80, L - 50))


def i_shield(x, y, num, s=1.0):
    return (f'<g transform="translate({x},{y}) scale({s})">'
            f'<path d="M-32 -30 Q-16 -38 0 -30 Q16 -38 32 -30 Q36 4 0 38 Q-36 4 -32 -30 Z" fill="#1f4f9a" stroke="{C["white"]}" stroke-width="3"/>'
            f'<path d="M-30 -22 Q-16 -30 0 -22 Q16 -30 30 -22 L31 -14 L-31 -14 Z" fill="{C["red"]}"/>'
            f'<text x="0" y="16" text-anchor="middle" font-family="{FONT}" font-weight="900" font-size="{28 if len(num) < 3 else 22}" fill="{C["white"]}">{num}</text></g>')


def ca_shield(x, y, num, s=1.0):
    return (f'<g transform="translate({x},{y}) scale({s})">'
            f'<path d="M-30 -34 Q-22 -40 -14 -34 Q-6 -28 0 -36 Q6 -28 14 -34 Q22 -40 30 -34 L28 6 Q22 28 0 40 Q-22 28 -28 6 Z" '
            f'fill="{C["sign"]}" stroke="{C["white"]}" stroke-width="3"/>'
            f'<text x="0" y="12" text-anchor="middle" font-family="{FONT}" font-weight="900" font-size="30" fill="{C["white"]}">{num}</text></g>')


def guide_sign(x, y, w, h, lines, ground=None):
    s = ''
    if ground:
        for px in (x + w * .2, x + w * .8 - 7):
            s += f'<rect x="{px}" y="{y + h}" width="7" height="{ground - y - h}" fill="#3a3f45"/>'
    s += f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="9" fill="{C["sign"]}"/>'
    s += f'<rect x="{x + 5}" y="{y + 5}" width="{w - 10}" height="{h - 10}" rx="6" fill="none" stroke="{C["white"]}" stroke-width="3"/>'
    for i, (txt, size) in enumerate(lines):
        ty = y + h * (i + 1) / (len(lines) + 1) + size * .35
        s += f'<text x="{x + w / 2}" y="{ty:.0f}" text-anchor="middle" font-family="{FONT}" font-weight="800" font-size="{size}" fill="{C["white"]}">{txt}</text>'
    return s


def road_flare(x, y):
    return (f'<circle cx="{x}" cy="{y}" r="46" fill="url(#flare)"/>'
            f'<rect x="{x - 12}" y="{y - 3}" width="24" height="6" rx="2" fill="{C["accent"]}" transform="rotate(-12 {x} {y})"/>')


def label(x, y, txt, size=20, col=None, anchor='start', weight=700, font=None):
    return (f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="{font or BODY}" font-weight="{weight}" '
            f'font-size="{size}" fill="{col or C["white"]}">{txt}</text>')


def tag(x, y, txt):
    w = len(txt) * 9.6 + 30
    return (f'<rect x="{x}" y="{y}" width="{w:.0f}" height="32" rx="5" fill="{C["sign"]}"/>'
            f'<rect x="{x + 3}" y="{y + 3}" width="{w - 6:.0f}" height="26" rx="3" fill="none" stroke="{C["white"]}" stroke-width="1.5"/>'
            f'<text x="{x + w / 2:.0f}" y="{y + 22}" text-anchor="middle" font-family="{FONT}" font-weight="800" font-size="15" '
            f'letter-spacing="1.2" fill="{C["white"]}">{txt}</text>')


def steps_panel(title, steps, h=520, hi=None, side=''):
    """Numbered vertical checklist: the house diagram format for how-to posts."""
    s = f'<rect width="{W}" height="{h}" fill="{C["ink"]}"/>'
    s += label(60, 70, title, 30, C['white'], 'start', 900, FONT)
    gap = (h - 130) / len(steps)
    for i, (head, sub) in enumerate(steps):
        y = 110 + i * gap
        on = hi is not None and i in hi
        s += f'<circle cx="86" cy="{y + 24:.0f}" r="24" fill="{C["accent"] if on else C["sign"]}"/>'
        s += label(86, y + 33, str(i + 1), 24, C['ink'] if on else C['white'], 'middle', 900, FONT)
        s += label(132, y + 22, head, 22, C['white'], 'start', 800, FONT)
        s += label(132, y + 48, sub, 17, C['slate'], 'start', 500)
    return s + side


def save(name, w, h, inner, title):
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, name), 'w') as f:
        f.write(svg(w, h, inner, title))


# ---------- scenes ----------

def accident():
    s = sky(W, H, 300) + orchard(-10, W + 20, 302, seed=3) + fog(W, 250, 80, .14)
    s += lamp_post(80, 340, 190)
    s += guide_sign(780, 110, 300, 120, [('March Ln', 32), ('EXIT 1/2 MILE', 18)], ground=320)
    s += i_shield(1040, 84, '5', .9)
    s += road(W, 330, 110)
    s += f'<circle cx="200" cy="360" r="70" fill="{C["red"]}" opacity=".10"/><circle cx="270" cy="360" r="70" fill="{C["blue"]}" opacity=".10"/>'
    s += (f'<g transform="translate(120,420)"><path d="M0 -20 Q0 -46 20 -50 L60 -50 L90 -80 L190 -80 L220 -50 L250 -46 Q270 -42 270 -22 L270 -14 L0 -14 Z" '
          f'fill="{C["white"]}" stroke="{C["ink"]}" stroke-width="2"/><rect x="118" y="-92" width="40" height="12" fill="{C["red"]}"/>'
          f'<rect x="158" y="-92" width="40" height="12" fill="{C["blue"]}"/>'
          f'<circle cx="54" cy="-14" r="22" fill="{C["ink"]}"/><circle cx="216" cy="-14" r="22" fill="{C["ink"]}"/></g>')
    s += car(430, 424, .9, col='#7f8a96', damaged=True)
    s += car(760, 424, .9, damaged=True, flip=True)
    for gx, gy in [(735, 412), (748, 418), (726, 420), (760, 410)]:
        s += f'<circle cx="{gx}" cy="{gy}" r="3" fill="{C["white"]}" opacity=".7"/>'
    s += road_flare(1000, 432) + road_flare(1060, 436)
    s += tag(28, 28, 'I-5 · STOCKTON')
    save('accident-i5-scene.svg', W, H, s,
         'Two damaged cars stopped on the right shoulder of I-5 near Stockton with hazard lights, a patrol car behind them and road flares on the pavement')

    steps = [('Check for injuries, call 911 if needed', 'Fire, fuel leak, anyone hurt or a car stuck in a lane: 911 first.'),
             ('Get out of traffic', 'Shoulder or next exit if the cars still drive. Hazards on.'),
             ('Photograph everything', 'All four corners of each car, plates, the road and debris.'),
             ('Exchange information', 'Name, phone, insurer and policy number. Stick to facts.'),
             ('Get the report number', 'CHP on freeways, Stockton Police on city streets.'),
             ('Tow to the shop you choose', 'Not required to use the rotation yard if you arrange your own.')]
    save('accident-steps.svg', W, 560, steps_panel('After an accident on I-5 or Highway 99', steps, 560, hi={0},
                                                  side=i_shield(1060, 150, '5', 1.1) + ca_shield(1060, 270, '99', 1.1)),
         'Six steps after an accident: check for injuries and call 911 if needed, get out of traffic, photograph everything, exchange information, get the report number, then tow to the shop you choose')


def overheating():
    s = sky(W, H, 300, 'hot')
    s += f'<circle cx="980" cy="110" r="160" fill="url(#sun)"/><circle cx="980" cy="110" r="38" fill="#ffcf8a" opacity=".85"/>'
    s += orchard(-10, W + 20, 302, seed=1)
    for i in range(5):
        s += f'<path d="M{120 + i * 210} 290 q14 -12 0 -24 q-14 -12 0 -24" stroke="{C["accent"]}" stroke-width="2.5" fill="none" opacity=".35"/>'
    s += road(W, 330, 110)
    s += car(420, 424, 1.0, hood=True)
    for i, (sx, sy) in enumerate([(690, 300), (720, 270), (700, 240), (735, 215)]):
        s += f'<circle cx="{sx}" cy="{sy}" r="{26 + i * 6}" fill="{C["steam"]}" opacity="{.35 - i * .06:.2f}" filter="url(#soft)"/>'
    s += ca_shield(140, 120, '99', 1.0)
    s += label(190, 132, '105°F', 34, C['white'], 'start', 900, FONT)
    g = 'translate(980,330)'
    s += f'<g transform="{g}"><circle r="70" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="4"/>'
    s += f'<path d="M-50 30 A58 58 0 1 1 50 30" stroke="#3a3f45" stroke-width="10" fill="none"/>'
    s += f'<path d="M46 -8 A58 58 0 0 1 50 30" stroke="{C["red"]}" stroke-width="10" fill="none"/>'
    s += label(-52, 56, 'C', 20, C['slate'], 'middle', 900, FONT) + label(52, 56, 'H', 20, C['red'], 'middle', 900, FONT)
    s += f'<path d="M0 0 L46 14" stroke="{C["white"]}" stroke-width="5" stroke-linecap="round"/><circle r="8" fill="{C["white"]}"/></g>'
    s += tag(28, 28, 'HWY 99 · JULY')
    save('overheating-99.svg', W, H, s,
         'A car stopped on the shoulder of Highway 99 near Stockton on a 105 degree afternoon with its hood up, steam rising and the temperature gauge in the red')

    steps = [('Turn the A/C off', 'The compressor adds load and heat.'),
             ('Turn the heater on full', 'The heater core pulls heat away from the engine.'),
             ('Get out of slow traffic', 'Next exit or the widest shoulder you can reach.'),
             ('Engine off if the gauge is red', 'Steam or a sweet smell: shut it off, do not idle it.'),
             ('Wait at least 30 minutes', 'Let the whole cooling system come down in pressure.'),
             ('Check coolant only when cold', 'Low with no leak: top up. Leaking or climbing again: tow.')]
    warn = (f'<rect x="820" y="150" width="330" height="170" rx="10" fill="{C["panel"]}" stroke="{C["red"]}" stroke-width="3"/>'
            + label(985, 200, 'NEVER', 30, C['red'], 'middle', 900, FONT)
            + label(985, 236, 'open the radiator cap', 20, C['white'], 'middle', 700)
            + label(985, 264, 'on a hot engine', 20, C['white'], 'middle', 700)
            + label(985, 296, 'Pressurized coolant can burn', 15, C['slate'], 'middle', 500))
    save('overheating-steps.svg', W, 560, steps_panel('When the temperature gauge climbs', steps, 560, hi={3}, side=warn),
         'Six steps when a car overheats: A/C off, heater on full, get out of slow traffic, engine off if the gauge is red, wait 30 minutes, check coolant only when cold, with a warning never to open the radiator cap on a hot engine')


def ev():
    s = sky(W, H, 320) + fog(W, 270, 70, .12)
    s += lamp_post(880, 360, 230) + lamp_post(140, 360, 200)
    s += road(W, 350, 100, dash=False)
    ev_car = car(14, -92, .84, col='#d8dde2')
    ev_car += (f'<g transform="translate(14,-92) scale(.84)"><circle cx="150" cy="-60" r="14" fill="{C["ink"]}"/>'
               f'<path d="M152 -70 L144 -58 L152 -58 L146 -48" stroke="{C["green"]}" stroke-width="3" fill="none" stroke-linejoin="round"/></g>')
    s += flatbed(300, 440, 1.0, cargo=ev_car)
    s += f'<g transform="translate(130,110)"><rect width="200" height="110" rx="12" fill="{C["panel"]}" stroke="{C["line"]}" stroke-width="2"/>'
    s += label(100, 40, 'TRANSPORT', 18, C['slate'], 'middle', 800, FONT) + label(100, 64, 'MODE', 18, C['slate'], 'middle', 800, FONT)
    s += f'<rect x="64" y="76" width="72" height="22" rx="11" fill="{C["green"]}"/><circle cx="125" cy="87" r="8" fill="{C["white"]}"/></g>'
    s += tag(28, 28, 'EV · ALL FOUR WHEELS UP')
    save('ev-flatbed.svg', W, H, s,
         'An electric car loaded on a flatbed tow truck with all four wheels on the deck under a streetlight, beside a panel showing transport mode switched on')

    h = 500
    s = f'<rect width="{W}" height="{h}" fill="{C["ink"]}"/>'
    s += f'<line x1="600" y1="40" x2="600" y2="{h - 40}" stroke="{C["line"]}" stroke-width="2" stroke-dasharray="8 8"/>'
    s += label(300, 64, 'RIGHT: flatbed', 26, C['green'], 'middle', 900, FONT)
    s += label(900, 64, 'WRONG: wheels on the road', 26, C['red'], 'middle', 900, FONT)
    s += f'<rect x="20" y="360" width="560" height="6" fill="{C["roadEdge"]}"/><rect x="620" y="360" width="560" height="6" fill="{C["roadEdge"]}"/>'
    s += f'<g transform="translate(-10,0) scale(.62) translate(120,580)">' + flatbed(0, 0, 1.0, cargo=car(14, -92, .84, col='#d8dde2')) + '</g>'
    s += label(300, 420, 'All four wheels on the deck.', 18, C['white'], 'middle', 700)
    s += label(300, 446, 'Motors cannot spin.', 16, C['slate'], 'middle', 500)
    s += f'<g transform="translate(610,0) scale(.62) translate(520,580)">' + wrecker(0, 0, 1.0) + '</g>'
    s += f'<g transform="translate(610,0) scale(.62) translate(196,580) rotate(-7 260 -14)">' + car(0, 0, .84, col='#d8dde2') + '</g>'
    for cx, cy in [(735, 352)]:
        s += f'<circle cx="{cx}" cy="{cy}" r="22" fill="none" stroke="{C["red"]}" stroke-width="4"/>'
        s += f'<path d="M{cx - 34} {cy + 6} a34 34 0 0 1 10 -28" stroke="{C["red"]}" stroke-width="3" fill="none" marker-end="url(#arr)"/>'
    s += label(900, 420, 'Drive wheels turning on the road', 18, C['white'], 'middle', 700)
    s += label(900, 446, 'can damage the motor and inverter.', 16, C['slate'], 'middle', 500)
    save('ev-tow-right-wrong.svg', W, h, s,
         'Right and wrong ways to tow an electric car: on a flatbed with all four wheels on the deck marked right, and on a wheel-lift with the drive wheels turning on the road marked wrong')


def wont_start():
    s = sky(W, H, 320)
    s += f'<rect x="0" y="0" width="{W}" height="220" fill="#ffcf8a" opacity=".05"/>'
    s += f'<path d="M0 320 L0 190 L200 120 L400 190 L400 320 Z" fill="#1b1f23"/><rect x="60" y="210" width="120" height="110" fill="#262a2f"/>'
    s += f'<rect x="230" y="220" width="70" height="50" fill="#ffcf8a" opacity=".55"/>'
    s += f'<rect x="0" y="320" width="{W}" height="160" fill="#202328"/>'
    s += car(470, 430, 1.0, hood=True)
    s += wrecker(840, 440, .78)
    s += label(560, 230, '?', 64, C['accent'], 'middle', 900, FONT)
    s += tag(28, 28, 'LINCOLN VILLAGE · 6:40 AM')
    save('wont-start-driveway.svg', W, H, s,
         'A car in a Stockton driveway at dawn with its hood up and a warning light on the dash, while a roadside truck with amber lights pulls up to help')

    h = 600
    s = f'<rect width="{W}" height="{h}" fill="{C["ink"]}"/>'

    def box(x, y, w, hh, t1, t2='', col=None):
        b = f'<rect x="{x}" y="{y}" width="{w}" height="{hh}" rx="10" fill="{C["panel"]}" stroke="{col or C["line"]}" stroke-width="{3 if col else 2}"/>'
        b += label(x + w / 2, y + (hh / 2 + 2 if not t2 else hh / 2 - 6), t1, 21, C['white'], 'middle', 800, FONT)
        if t2:
            b += label(x + w / 2, y + hh / 2 + 20, t2, 15, C['slate'], 'middle', 500)
        return b
    s += box(400, 30, 400, 80, 'Turn the key. What happens?', 'Listen first: the sound tells you the cause', C['accent'])
    s += f'<path d="M600 110 L600 140 M200 140 L1000 140 M200 140 L200 170 M600 140 L600 170 M1000 140 L1000 170" stroke="{C["slate"]}" stroke-width="3" fill="none"/>'
    cols = [(40, 'Rapid clicking', 'Dim or flickering dash lights',
             [('Weak or dead battery', 'Check terminals for looseness'), ('Jump start', 'Starts and stays running? Test the battery')]),
            (440, 'Nothing at all', 'Dash lights still come on',
             [('Park, brake, key fob', 'Shifter in Park, brake down, fob on button'), ('Still nothing?', 'Terminals, then a jump')]),
            (840, 'Cranks, never fires', 'Engine turns at normal speed',
             [('Fuel, spark or sensor', 'Check the fuel gauge first'), ('Tow to a mechanic', 'Do not keep cranking it')])]
    for x, t1, t2, rows in cols:
        s += box(x, 170, 320, 80, t1, t2)
        y = 250
        for r1, r2 in rows:
            s += f'<path d="M{x + 160} {y} L{x + 160} {y + 36}" stroke="{C["slate"]}" stroke-width="3" marker-end="url(#arrW)"/>'
            s += box(x, y + 42, 320, 80, r1, r2)
            y += 122
    s += label(600, 580, 'Starts with a jump, then dies again? Suspect the alternator.', 18, C['accent'], 'middle', 700)
    save('wont-start-flow.svg', W, h, s,
         'Flowchart for a car that will not start: rapid clicking points to the battery and a jump start, no sound points to the gear selector, brake and key fob, and cranking without starting points to fuel or ignition and a tow to a mechanic')


if __name__ == '__main__':
    accident()
    overheating()
    ev()
    wont_start()
    print('ok')
