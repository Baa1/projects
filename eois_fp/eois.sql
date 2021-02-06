PGDMP         +                y            eois_fp    12.2    12.2 %    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    24760    eois_fp    DATABASE     �   CREATE DATABASE eois_fp WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE eois_fp;
                postgres    false            �            1259    24783    firms    TABLE     �   CREATE TABLE public.firms (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    tagline character varying(200) NOT NULL,
    logo character varying(100),
    manager integer
);
    DROP TABLE public.firms;
       public         heap    postgres    false            �            1259    24781    firms_id_seq    SEQUENCE     �   CREATE SEQUENCE public.firms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.firms_id_seq;
       public          postgres    false    205            9           0    0    firms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.firms_id_seq OWNED BY public.firms.id;
          public          postgres    false    204            �            1259    24799 	   positions    TABLE     d   CREATE TABLE public.positions (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.positions;
       public         heap    postgres    false            �            1259    24797    positions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.positions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.positions_id_seq;
       public          postgres    false    209            :           0    0    positions_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.positions_id_seq OWNED BY public.positions.id;
          public          postgres    false    208            �            1259    41241    refresh_tokens    TABLE     Y   CREATE TABLE public.refresh_tokens (
    id integer NOT NULL,
    token text NOT NULL
);
 "   DROP TABLE public.refresh_tokens;
       public         heap    postgres    false            �            1259    41239    refresh_tokens_id_seq    SEQUENCE     �   CREATE SEQUENCE public.refresh_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.refresh_tokens_id_seq;
       public          postgres    false    211            ;           0    0    refresh_tokens_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.refresh_tokens_id_seq OWNED BY public.refresh_tokens.id;
          public          postgres    false    210            �            1259    24791    roles    TABLE     `   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    24789    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    207            <           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    206            �            1259    49450    session    TABLE     s   CREATE TABLE public.session (
    id integer NOT NULL,
    date_start date NOT NULL,
    date_end date NOT NULL
);
    DROP TABLE public.session;
       public         heap    postgres    false            �            1259    49448    session_id_seq    SEQUENCE     �   CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.session_id_seq;
       public          postgres    false    213            =           0    0    session_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;
          public          postgres    false    212            �            1259    24763    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    salt character varying(32) NOT NULL,
    email character varying(100),
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    patronymic character varying(50),
    birthday date,
    role_id integer,
    photo character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24761    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            >           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �
           2604    24786    firms id    DEFAULT     d   ALTER TABLE ONLY public.firms ALTER COLUMN id SET DEFAULT nextval('public.firms_id_seq'::regclass);
 7   ALTER TABLE public.firms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    24802    positions id    DEFAULT     l   ALTER TABLE ONLY public.positions ALTER COLUMN id SET DEFAULT nextval('public.positions_id_seq'::regclass);
 ;   ALTER TABLE public.positions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            �
           2604    41244    refresh_tokens id    DEFAULT     v   ALTER TABLE ONLY public.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('public.refresh_tokens_id_seq'::regclass);
 @   ALTER TABLE public.refresh_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �
           2604    24794    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            �
           2604    49453 
   session id    DEFAULT     h   ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);
 9   ALTER TABLE public.session ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            �
           2604    24766    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2606    24788    firms firms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.firms
    ADD CONSTRAINT firms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.firms DROP CONSTRAINT firms_pkey;
       public            postgres    false    205            �
           2606    24804    positions positions_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.positions DROP CONSTRAINT positions_pkey;
       public            postgres    false    209            �
           2606    41249 "   refresh_tokens refresh_tokens_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.refresh_tokens DROP CONSTRAINT refresh_tokens_pkey;
       public            postgres    false    211            �
           2606    24796    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    207            �
           2606    49455    session session_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pkey;
       public            postgres    false    213            �
           2606    24770    users users_login_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_key UNIQUE (login);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_login_key;
       public            postgres    false    203            �
           2606    24768    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            �
           2606    24872    firms firms_manager_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.firms
    ADD CONSTRAINT firms_manager_fkey FOREIGN KEY (manager) REFERENCES public.users(id) NOT VALID;
 B   ALTER TABLE ONLY public.firms DROP CONSTRAINT firms_manager_fkey;
       public          postgres    false    2728    203    205            �
           2606    24805    users users_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) NOT VALID;
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_id_fkey;
       public          postgres    false    2732    207    203           