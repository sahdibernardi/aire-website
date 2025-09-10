# Configuração das Fontes Calistoga e Sora

## ✅ Configuração Completa!

As fontes foram configuradas com sucesso:
- **Calistoga** para todos os títulos (h1, h2, h3, h4, h5, h6)
- **Sora** para textos e corpo do site

## Como usar as fontes:

### Automático (já configurado):
- **Todos os títulos** (h1, h2, h3, h4, h5, h6) usam automaticamente **Calistoga**
- **Todo o texto** do site usa automaticamente **Sora**

### Usando classes do Tailwind:
```tsx
// Título com Calistoga
<h1 className="font-calistoga">Título com Calistoga</h1>

// Texto com Sora
<p className="font-sora">Texto com Sora</p>

// Diferentes pesos da Sora
<p className="font-sora font-thin">Texto fino</p>
<p className="font-sora font-light">Texto leve</p>
<p className="font-sora font-normal">Texto normal</p>
<p className="font-sora font-medium">Texto médio</p>
<p className="font-sora font-semibold">Texto semi-negrito</p>
<p className="font-sora font-bold">Texto negrito</p>
<p className="font-sora font-extrabold">Texto extra-negrito</p>
```

### Usando CSS direto:
```css
.titulo-personalizado {
  font-family: var(--font-calistoga);
}

.texto-personalizado {
  font-family: var(--font-sora);
}
```

## Estrutura de arquivos:
```
public/
  fonts/
    ├── Calistoga/
    │   └── Calistoga-Regular.ttf
    └── Sora/
        ├── Sora-Thin.ttf
        ├── Sora-ExtraLight.ttf
        ├── Sora-Light.ttf
        ├── Sora-Regular.ttf
        ├── Sora-Medium.ttf
        ├── Sora-SemiBold.ttf
        ├── Sora-Bold.ttf
        └── Sora-ExtraBold.ttf
```

## Estilos automáticos configurados:
- **h1**: 2.5rem com Calistoga
- **h2**: 2rem com Calistoga  
- **h3**: 1.75rem com Calistoga
- **h4**: 1.5rem com Calistoga
- **h5**: 1.25rem com Calistoga
- **h6**: 1.125rem com Calistoga
- **body**: Sora como fonte padrão
