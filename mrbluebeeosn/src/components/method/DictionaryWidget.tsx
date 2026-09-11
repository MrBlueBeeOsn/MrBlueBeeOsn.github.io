import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

// 1. Tạo kho từ vựng nội bộ (Mock Data) - Không lo lỗi mạng, CORS hay proxy sập
const LOCAL_DICTIONARY: Record<string, { phonetic: string; partOfSpeech: string; definitions: string[] }[]> = {
  love: [
    { phonetic: "/lʌv/", partOfSpeech: "noun", definitions: ["An intense feeling of deep affection.", "A great interest and pleasure in something."] },
    { phonetic: "/lʌv/", partOfSpeech: "verb", definitions: ["Feel deep affection for (someone).", "Like or enjoy very much."] }
  ],
  meaningful: [
    { phonetic: "/ˈmɪːnɪŋfʊl/", partOfSpeech: "adjective", definitions: ["Having a serious, important, or useful quality or purpose.", "Communicating meaning; significant."] }
  ],
  hello: [
    { phonetic: "/həˈləʊ/", partOfSpeech: "exclamation", definitions: ["Used as a greeting in a conversation."] }
  ],
  world: [
    { phonetic: "/wɜːld/", partOfSpeech: "noun", definitions: ["The earth, together with all of its countries and peoples.", "A particular region or group of countries."] }
  ],
  ephemeral: [
    { phonetic: "/ɪˈfɛmərəl/", partOfSpeech: "adjective", definitions: ["Lasting for a very short time."] }
  ]
};

export const DictionaryWidget: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const word = searchTerm.trim().toLowerCase();
    if (!word) return;

    setError('');
    setResult(null);

    // Kiểm tra xem từ có nằm trong kho dữ liệu nội bộ không
    if (LOCAL_DICTIONARY[word]) {
      setResult({
        word: word,
        meanings: LOCAL_DICTIONARY[word]
      });
    } else {
      setError(`Rất tiếc! Hiện tại kho dữ liệu Local chỉ hỗ trợ demo các từ: ${Object.keys(LOCAL_DICTIONARY).join(', ')}. Hãy thử lại với các từ này nhé!`);
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #002f6c',
      borderRadius: '8px',
      padding: '20px',
      width: '350px',
      backgroundColor: '#f4f7f9',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ marginTop: 0, color: '#002f6c', marginBottom: '8px', textAlign: 'center' }}>
        Từ điển Tại chỗ (Local Mode)
      </h3>
      
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Thử gõ: love, meaningful, world..."
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            outline: 'none'
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#002f6c',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            fontSize: '14px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Tra từ
        </button>
      </form>

      {error && <p style={{ color: '#d32f2f', fontSize: '13px', textAlign: 'left', lineHeight: '1.4' }}>{error}</p>}

      {result && (
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: '#ffffff', 
          padding: '12px', 
          borderRadius: '6px', 
          border: '1px solid #e0e0e0',
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#333', textTransform: 'capitalize' }}>
            {result.word} <span style={{ color: '#666', fontWeight: 'normal', fontSize: '14px' }}>{result.meanings[0]?.phonetic}</span>
          </h4>
          
          {result.meanings.map((meaning: any, index: number) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <em style={{ color: '#002f6c', fontWeight: 'bold', fontSize: '13px' }}>
                ({meaning.partOfSpeech})
              </em>
              <ol style={{ margin: '5px 0 0 20px', padding: 0, fontSize: '13px', color: '#444' }}>
                {meaning.definitions.map((def: string, i: number) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{def}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DictionaryWidget;