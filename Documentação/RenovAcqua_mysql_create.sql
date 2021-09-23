CREATE TABLE `tb_usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`usuario` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_temas` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`tema` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`palavra_chave` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagens` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(255) NOT NULL,
	`endereco` varchar(255) NOT NULL,
	`texto` varchar(5000) NOT NULL,
	`data_postagem` TIMESTAMP NOT NULL,
	`id_usuario` bigint NOT NULL,
	`id_temas` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_postagens` ADD CONSTRAINT `tb_postagens_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario`(`id`);

ALTER TABLE `tb_postagens` ADD CONSTRAINT `tb_postagens_fk1` FOREIGN KEY (`id_temas`) REFERENCES `tb_temas`(`id`);




