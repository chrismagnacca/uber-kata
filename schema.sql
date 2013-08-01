drop table if exists locations;
create table locations (
  id integer primary key autoincrement not null,
  lat float not null,
  lng float not null,
  address varchar not null,
  nickname varchar not null
);

