import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: "#B6B6B6",
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: "#6B6B6B",
  }
});
