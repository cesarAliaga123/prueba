PGDMP  5                    }            mi_basedatos    17.2    17.2 !    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16480    mi_basedatos    DATABASE     �   CREATE DATABASE mi_basedatos WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Bolivia.1252';
    DROP DATABASE mi_basedatos;
                     postgres    false            �            1259    16500    about    TABLE     �   CREATE TABLE public.about (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    button_text text NOT NULL,
    button_link text NOT NULL,
    image_url text NOT NULL
);
    DROP TABLE public.about;
       public         heap r       postgres    false            �            1259    16499    about_id_seq    SEQUENCE     �   CREATE SEQUENCE public.about_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.about_id_seq;
       public               postgres    false    222            �           0    0    about_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.about_id_seq OWNED BY public.about.id;
          public               postgres    false    221            �            1259    16491    hero    TABLE     �   CREATE TABLE public.hero (
    id integer NOT NULL,
    background_image text NOT NULL,
    title text NOT NULL,
    button_text text NOT NULL,
    button_link text NOT NULL
);
    DROP TABLE public.hero;
       public         heap r       postgres    false            �            1259    16490    hero_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hero_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.hero_id_seq;
       public               postgres    false    220            �           0    0    hero_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.hero_id_seq OWNED BY public.hero.id;
          public               postgres    false    219            �            1259    16509    news    TABLE     �   CREATE TABLE public.news (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    image_url text NOT NULL
);
    DROP TABLE public.news;
       public         heap r       postgres    false            �            1259    16508    news_id_seq    SEQUENCE     �   CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.news_id_seq;
       public               postgres    false    224            �           0    0    news_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;
          public               postgres    false    223            �            1259    16482    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    16481    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    218            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    217            2           2604    16503    about id    DEFAULT     d   ALTER TABLE ONLY public.about ALTER COLUMN id SET DEFAULT nextval('public.about_id_seq'::regclass);
 7   ALTER TABLE public.about ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            1           2604    16494    hero id    DEFAULT     b   ALTER TABLE ONLY public.hero ALTER COLUMN id SET DEFAULT nextval('public.hero_id_seq'::regclass);
 6   ALTER TABLE public.hero ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            3           2604    16512    news id    DEFAULT     b   ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);
 6   ALTER TABLE public.news ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    223    224    224            0           2604    16485    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    16500    about 
   TABLE DATA           \   COPY public.about (id, title, description, button_text, button_link, image_url) FROM stdin;
    public               postgres    false    222   4"       �          0    16491    hero 
   TABLE DATA           U   COPY public.hero (id, background_image, title, button_text, button_link) FROM stdin;
    public               postgres    false    220   ^#       �          0    16509    news 
   TABLE DATA           A   COPY public.news (id, title, description, image_url) FROM stdin;
    public               postgres    false    224   �#       �          0    16482    usuarios 
   TABLE DATA           7   COPY public.usuarios (id, email, password) FROM stdin;
    public               postgres    false    218   Z$       �           0    0    about_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.about_id_seq', 1, true);
          public               postgres    false    221            �           0    0    hero_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.hero_id_seq', 1, true);
          public               postgres    false    219            �           0    0    news_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.news_id_seq', 5, true);
          public               postgres    false    223            �           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);
          public               postgres    false    217            ;           2606    16507    about about_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.about DROP CONSTRAINT about_pkey;
       public                 postgres    false    222            9           2606    16498    hero hero_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.hero
    ADD CONSTRAINT hero_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.hero DROP CONSTRAINT hero_pkey;
       public                 postgres    false    220            =           2606    16516    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public                 postgres    false    224            5           2606    16489    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public                 postgres    false    218            7           2606    16487    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    218            �     x�E�AN�@E��)|��	�Z�@��l܉����8�n�%� ���ITug���������󧐁iR{�^v�%aF�v�(�R?ـ�7	l5�48	���?0��#4��F���p�<b���I��.�A��CZ�Ú���|˛�qM���dJ��)���="��KR�O� ,����Ӿ��ed�g��S@�5�ʷt*F��ng9`��:��|M�R,�Z4����Y���	�z],n�k���b�,~��ޭ�Ohw|Uԅ��Y�>�u��u��ڣ�      �   n   x�ɱ�0�ڞ� #@pA�n��}��Y�a�`/�}G7���QV7���
�-��,�_�k1�%�d[�3M�\���[%$��-�E���?�hɍ�*+>��Η$�      �   n   x��˻�  ���	0|'�v��`!q0Gp1+�u׿'�RZ
Ƀds��NWHߛ!��y�"�r'�M9>U��՘��
O=����ӎi�i�4cz<]�]�����E�xY      �   4   x�3�L.�,.�L�K�+1202tH�M���K���tI,�67�446����� D�     