PGDMP                 	        y            eois_fp    12.2    12.2     $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    24760    eois_fp    DATABASE     �   CREATE DATABASE eois_fp WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE eois_fp;
                postgres    false            !          0    49468    schedule 
   TABLE DATA           T   COPY public.schedule (id, date, time_start, time_end, event, is_common) FROM stdin;
    public          postgres    false    215   �       )           0    0    schedule_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.schedule_id_seq', 1, false);
          public          postgres    false    214            !      x������ � �     