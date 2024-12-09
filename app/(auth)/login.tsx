import { useSession } from '@/context/Authcontext';
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';


export default function LoginScreen() {

  const { signIn, session } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    
    console.log("sess", session)
    
  }, [session])

  const handleLogin = () => {
    // Handle the login logic here
    console.log('Logged in with:', email, password);
    signIn();
    router.replace("/")
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <View style={styles.registerContainer}>
        <Text style={styles.infoText}>Don't have an account?</Text>
        <Pressable onPress={() => console.log("Attempt  Register-Navigation")}>
          <Link href={{ pathname:"/register", params: {from: "login", redirectTo: "home"}}}
            style={styles.linkText}>Register here</Link>
        </Pressable>
      </View>
      <Text>OR</Text>
      <Pressable style={styles.buttonGoogle}
      
        onPress={() => {
            console.log("Attempt  Register-Navigation");
            router.push("/register");
          }
        }>
        <Link href="/register"
            style={styles.buttonGoogleText}>Continue with Google</Link>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 1,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wheat',
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonGoogle:{
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 20,
    elevation: 3,
  },
  buttonGoogleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  infoText: {
    color: '#333',
  },
  linkText: {
    color: 'lightblue',
    fontWeight: 'bold',
  },
});
