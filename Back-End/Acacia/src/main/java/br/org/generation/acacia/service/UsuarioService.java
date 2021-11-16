package br.org.generation.acacia.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.org.generation.acacia.model.UserLogin;
import br.org.generation.acacia.model.Usuario;
import br.org.generation.acacia.repository.UsuarioRepository;

@Service
public class UsuarioService{

	@Autowired
	private UsuarioRepository repository;
	
	public List<Usuario> listarUsuarios(){
		return repository.findAll();
	}

	
	public Optional <Usuario> CadastrarUsuario(Usuario usuario){
		if (repository.findByUsuario(usuario.getUsuario()).isPresent())
            return Optional.empty();
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		
		return Optional.of(repository.save(usuario));
	}
	
	public Optional<UserLogin> Logar(Optional<UserLogin> user){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repository.findByUsuario(user.get().getUsuario());
	

		if(usuario.isPresent()) {
			
		if(encoder.matches(user.get().getSenha(), usuario.get().getSenha()));{
			
			
			String auth = user.get().getUsuario() + ":" + user.get().getSenha();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
			String authHeader = "Basic " + new String(encodedAuth);
			
			user.get().setId(usuario.get().getId());
			user.get().setNome(usuario.get().getNome());
			user.get().setSenha(usuario.get().getSenha());
			user.get().setToken(authHeader);
			
			return user;
			}
		}
		
		return Optional.empty();
	}
}
