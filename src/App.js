import './App.css';

const invite = {
  hostNote: {
    en: 'The city that creates knowledge',
    de: 'Die Stadt, die Wissen schafft!',
  },
  date: 'Wednesday, 20 May',
  time: '6 PM',
  address: 'Göttingen',
  menu: [
    'White asparagus with hollandaise',
    'Duck breast with cherry sauce & spring potatoes',
    'Rhubarb crumble with vanilla ice cream',
  ],
  thankYou:
    'You are most warmly welcome — we would so love to have you join us at our table.',
  signature: 'With love, your hosts',
  rsvp: {
    email: 'g.babij@googlemail.com',
    subject: "I'll be there!",
    body: 'Count me in for dinner on Wednesday, 20 May.',
    label: "I'll be there!",
    telegram: 'gebab88',
    telegramLabel: 'Message on Telegram',
  },
  imageSrc: `${process.env.PUBLIC_URL}/house.svg`,
  imageAlt: 'A small cozy house at dusk with warm-lit windows',
};

function mapsHref(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function mailtoHref({ email, subject, body }) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function telegramHref(handle) {
  return `https://t.me/${handle.replace(/^@/, '')}`;
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.5 3.2 2.4 10.6c-1 .4-1 1.8.1 2.1l4.7 1.5 1.8 5.8c.2.8 1.2 1 1.8.4l2.6-2.5 4.6 3.4c.8.6 2 .2 2.2-.8l3-15.2c.3-1.3-1-2.4-2.2-2.1ZM10 14.6l-.5 4 1.1-3.6 8-7.4-8.6 7Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M3.5 6.5h17v11h-17z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="m3.5 7 8.5 6 8.5-6"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="invite">
      <img className="invite-image" src={invite.imageSrc} alt={invite.imageAlt} />

      <h1 className="invite-title">Dinner at our house</h1>

      <p className="invite-note">
        <span className="invite-note-en">{invite.hostNote.en}</span>
        <span className="invite-note-de" lang="de">{invite.hostNote.de}</span>
        <span className="invite-note-source">Original german slogan</span>
      </p>

      <p className="invite-when">
        <span>{invite.date}</span>
        <span className="invite-dot"> · </span>
        <span>{invite.time}</span>
      </p>

      <address className="invite-where">
        <a href={mapsHref(invite.address)} target="_blank" rel="noopener noreferrer">
          📍 {invite.address} — open in Google Maps
        </a>
      </address>

      <ul className="invite-menu">
        {invite.menu.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <p className="invite-thanks">{invite.thankYou}</p>
      <p className="invite-signature">{invite.signature}</p>

      <div className="invite-rsvp-group">
        <p className="invite-rsvp-caption">RSVP: I'll be there!</p>
        <div className="invite-rsvp-icons">
          <a
            className="invite-icon"
            href={telegramHref(invite.rsvp.telegram)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reply on Telegram"
            title="Telegram"
          >
            <TelegramIcon />
          </a>
          <a
            className="invite-icon"
            href={mailtoHref(invite.rsvp)}
            aria-label="Reply by email"
            title="Email"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
