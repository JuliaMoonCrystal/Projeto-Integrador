package br.org.generation.acacia.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table (name = "tb_tema")
public class Tema {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message="Titulo obrigatório!")
	@Size(min=5, max=100)
	private String titulo;
	
	@NotNull(message="Descrição obrigatória!")
	@Size(min=5, max=1000)
	private String descricao;
	
	@NotNull(message="Palavra chave obrigatória!")
	@Size(min=5, max=100)
	private String palavra_chave;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getPalavra_chave() {
		return palavra_chave;
	}
	public void setPalavra_chave(String palavra_chave) {
		this.palavra_chave = palavra_chave;
	}
	
	
}
