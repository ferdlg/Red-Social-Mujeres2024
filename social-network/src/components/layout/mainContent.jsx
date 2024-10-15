import React from 'react';
import "../../assets/styles/components/layout/layout.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="post-input">
        <input type="text" placeholder="¿Qué tienes en mente, amigo?" />
        <button>Publicar</button>
      </div>
      <div className="post">
        <div className="user-info">
          <span className="user-avatar"></span>
          <span className="user-name">Usuario amigable</span>
          <span className="post-time">Hace 2 horas</span>
        </div>
        <div className="post-content">
          ¡Pasé un tiempo increíble con mis amigos! La puesta de sol en la playa fue absolutamente impresionante. ¡No puedo esperar a nuestra próxima aventura!
          <span className="hashtags"> #FriendoLife #BeachVibes</span>
        </div>
        <div className="post-image-placeholder"></div>
        <div className="post-actions">
          <button>Me gusta</button>
          <button>Comentar</button>
          <button>Compartir</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
