package br.org.generation.acacia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.org.generation.acacia.model.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Long>{

     public List<Postagem> findAllByTituloContainingIgnoreCase(String titulo);        	
}
